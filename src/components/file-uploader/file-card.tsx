'use client';

import { filesize } from 'filesize';
import { LucideFile, LucideImage, LucideTrash2, LucideVideo } from 'lucide-react';
import { memo } from 'react';
import { defineFilePreviewType } from '@/shared/functions/define-file-preview-type';
import { useFiles } from '@/shared/stores/zustand/files-store';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import type { FileWithPreview } from '.';
import FilePreview, { type FilePreviewType } from './file-preview';

interface FileCardProps {
	file: FileWithPreview;
}
function FileTypeIcon(file_type: FilePreviewType) {
	switch (file_type) {
		case 'video':
			return LucideVideo;
		case 'pdf':
			return LucideFile;
		default:
			return LucideImage;
	}
}

export const FileCard = memo(function CardFile({ file }: FileCardProps) {
	const removeFileById = useFiles((s) => s.removeFileById);
	const file_type = defineFilePreviewType(file.file.type);
	const Icon = FileTypeIcon(file_type);

	return (
		<Card className="bg-muted relative w-full p-0 overflow-hidden gap-0 max-w-52 shrink-0 rounded-lg">
			<CardHeader className="relative flex h-36 shrink-0 items-center justify-center overflow-hidden px-0 py-0">
				<div className="flex size-full items-center justify-center text-center">
					<Icon className="text-foreground absolute top-2 left-2 z-10" size={18} />

					<FilePreview file={file} />
				</div>
			</CardHeader>

			<CardContent className="p-2">
				<h1 className="font-medium text-ellipsis line-clamp-2 text-sm">{file.file.name?.replace('_', ' ') ?? 'Arquivo sem nome'}</h1>
			</CardContent>
			<CardFooter className="p-2 justify-between items-center gap-2">
				<h2 className="text-muted-foreground text-ellipsis line-clamp-1 text-md">{filesize(file.file.size)}</h2>
				<Button size={'icon-lg'} variant="destructive" onClick={() => removeFileById(file.id)}>
					<LucideTrash2 size={16} />
				</Button>
			</CardFooter>
		</Card>
	);
});
