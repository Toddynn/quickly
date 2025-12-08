'use client';

import Image from 'next/image';
import Link from 'next/link';
import { defineFilePreviewType } from '@/shared/functions/define-file-preview-type';
import { cn } from '@/shared/lib/utils';
import type { FileWithPreview } from '.';

export type FilePreviewType = 'pdf' | 'video' | 'image' | 'spreadsheet';

export interface FilePreviewProps {
	file: FileWithPreview;
	show_video_cover?: boolean;
	className?: string;
}

export default function FilePreview({ file, className, show_video_cover = true }: FilePreviewProps) {
	const file_type = defineFilePreviewType(file.file.type);

	if (file_type === 'video' && !show_video_cover) {
		return (
			<video controls src={file.preview} className={cn('object-cover')}>
				<track kind="captions" />
				<p>
					O seu navegador não tem suporte a vídeo HTML. Em vez disso, aqui está
					<Link href={file.preview} download={file.preview}>
						o link do vídeo
					</Link>
					.
				</p>
			</video>
		);
	}

	if (file_type === 'video' || file_type === 'image') {
		return (
			<Image
				src={file.preview}
				quality={100}
				priority
				unoptimized={file.file?.type.includes('gif')}
				alt={file.file?.name || 'image is not provided'}
				title={file.file?.name || 'image is not provided'}
				fill
				sizes="144px"
				className={cn('object-cover', className)}
				crossOrigin="use-credentials"
			/>
		);
	}

	if (file_type === 'spreadsheet') {
		return <h1>Preview indisponível</h1>;
	}
	return (
		<div className={cn('size-full overflow-hidden', className)}>
			<iframe src={file.preview} title="pdf preview" allowFullScreen className={'size-full border-none'} />
		</div>
	);
}
