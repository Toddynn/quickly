import type { FilePreviewType } from '@/components/file-uploader/file-preview';

export const defineFilePreviewType = (mimetype: File['type']): FilePreviewType => {
	const isVideo = mimetype.includes('video/');
	const isImage = mimetype.includes('image/');
	const isPdf = mimetype.includes('application/pdf');
	const isSpreadsheet = mimetype.includes('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

	if (isVideo) return 'video';
	if (isImage) return 'image';
	if (isPdf) return 'pdf';
	if (isSpreadsheet) return 'spreadsheet';
	return 'image';
};
