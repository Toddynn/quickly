type GenerateVideoThumbnailProps = { file: File; url?: never } | { file?: never; url: string };
/**
 * Gera um thumbnail de um v deo em formato de imagem png.
 * O v deo pode ser passado como um arquivo File ou como uma url.
 * @param {{ file: File; url?: never } | { file?: never; url: string }} props
 * @returns Promise<string> promessa com o thumbnail em formato de imagem png
 */
export const generateVideoThumbnail = ({ file, url }: GenerateVideoThumbnailProps): Promise<string> => {
	return new Promise((resolve, reject) => {
		const video = document.createElement('video');
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		if (!ctx) {
			reject('Erro ao processar o canvas');
			return;
		}

		if (file) {
			video.src = URL.createObjectURL(file);
		} else if (url) {
			video.src = url;
		} else {
			reject('Nenhum arquivo ou url fornecido');
		}
		video.crossOrigin = 'anonymous';
		video.muted = true;
		video.playsInline = true;
		video.currentTime = 2; // Pega um frame no segundo 2

		video.onloadeddata = () => {
			video.width = video.videoWidth;
			video.height = video.videoHeight;
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;

			video.play();
		};

		video.onseeked = () => {
			ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
			const thumbnail = canvas.toDataURL('image/png');
			resolve(thumbnail);
		};

		video.onerror = (e) => reject(e);
	});
};
