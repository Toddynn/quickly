'use client';

import { filesize } from 'filesize';
import { LucideUpload } from 'lucide-react';
import { useCallback, useMemo } from 'react';
import { type Accept, type FileError, useDropzone } from 'react-dropzone';
import { toast } from 'sonner';
import { v4 } from 'uuid';
import { default_accepted_file_types } from '@/shared/constants/acceptable-files';
import { defineFilePreviewType } from '@/shared/functions/define-file-preview-type';
import { generateVideoThumbnail } from '@/shared/functions/generate-video-thumbnail';
import { cn } from '@/shared/lib/utils';
import { useFiles } from '@/shared/stores/zustand/files-store';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { FieldDescription } from '../ui/field';

export type FileWithPreview = { id: string; preview: string; file: File };

export enum DropzoneErrorCodes {
	FILE_TOO_LARGE = 'file-too-large',
	FILE_TOO_SMALL = 'file-too-small',
	TOO_MANY_FILES = 'too-many-files',
	FILE_INVALID_TYPE = 'file-invalid-type',
}

export interface FileUploaderProps {
	label?: string;
	is_required?: boolean;
	max_files?: number;
	max_size?: number;
	accepted_types?: Accept;
	uploaded_files_length?: number;
	onChange?: (files_with_preview: Array<FileWithPreview>, raw_files: Array<File>) => void;
	className?: string;
}

export default function FileUploader({
	max_files = 5,
	max_size = 10 * 1024 * 1024,
	accepted_types = default_accepted_file_types,
	uploaded_files_length,
	onChange,
	className,
}: FileUploaderProps) {
	const { files, addMultipleFiles } = useFiles();

	const onDrop = useCallback(
		async (acceptedFiles: File[]) => {
			const totalUploaded = uploaded_files_length ? uploaded_files_length + files.length : files.length;

			if (totalUploaded >= max_files) {
				toast.error(`Você já atingiu o limite de ${max_files} arquivos.`);
				return;
			}

			const availableSlots = max_files - totalUploaded;

			if (acceptedFiles.length > availableSlots) {
				toast.error(`Você só pode adicionar mais ${availableSlots} arquivo(s).`);
				acceptedFiles = acceptedFiles.slice(0, availableSlots);
			}
			const newFiles: FileWithPreview[] = await Promise.all(
				acceptedFiles.map(async (file) => {
					const id = v4();
					const file_type = defineFilePreviewType(file?.type);
					if (file_type === 'video') {
						try {
							const thumbnail = await generateVideoThumbnail({ file });
							return { preview: thumbnail, id, file };
						} catch (error) {
							toast.error(`Erro ao gerar thumbnail do vídeo: ${error}`);
						}
					}

					return { preview: URL.createObjectURL(file), id, file };
				}),
			);
			addMultipleFiles(newFiles);
			onChange?.(newFiles, acceptedFiles);
		},
		[addMultipleFiles, files.length, max_files, uploaded_files_length, onChange],
	);

	const { getRootProps, getInputProps, fileRejections } = useDropzone({
		accept: accepted_types,
		maxSize: max_size,
		maxFiles: max_files,
		onDrop,
	});

	const translateErrorMessage = useCallback((errors: readonly FileError[]) => {
		return errors
			.map((error) => {
				switch (error.code) {
					case DropzoneErrorCodes.FILE_TOO_LARGE:
						return 'O arquivo excedeu o limite de tamanho permitido';
					case DropzoneErrorCodes.FILE_TOO_SMALL:
						return 'O arquivo é muito pequeno';
					case DropzoneErrorCodes.TOO_MANY_FILES:
						return 'Você enviou mais arquivos do que o permitido';
					case DropzoneErrorCodes.FILE_INVALID_TYPE:
						return 'Tipo de arquivo não suportado';
					default:
						return error.message;
				}
			})
			.join(', ');
	}, []);

	const renderFileRejections = useMemo(() => {
		if (fileRejections.length === 0) return null;

		return (
			<Alert variant={'destructive'}>
				<AlertTitle>Alguns arquivos apresentaram problemas</AlertTitle>
				<AlertDescription>
					<ul className="list-disc pl-4">
						{fileRejections.map((error, index) => (
							<li key={error.file.name + index}>
								{error.file.name} <span className="line-clamp-2"> - {translateErrorMessage(error.errors)} </span>
							</li>
						))}
					</ul>
				</AlertDescription>
			</Alert>
		);
	}, [fileRejections, translateErrorMessage]);

	return (
		<div className={cn('w-full', className)}>
			{/* Área de Drop */}
			<div
				{...getRootProps()}
				className="border-default-300 text-default-500 hover:border-default-400 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 text-center transition-colors"
			>
				<input {...getInputProps()} />
				<div className="flex flex-wrap items-center justify-center gap-2">
					<p>Arraste ou clique para adicionar arquivos</p>
					<LucideUpload size={18} />
				</div>
				<FieldDescription className="text-xs">
					máx. {max_files} {max_files > 1 ? 'arquivos' : 'arquivo'}, {filesize(max_size)} {max_files > 1 && 'cada'}
				</FieldDescription>
			</div>

			{/* Erros do Dropzone (Local) */}
			{renderFileRejections}
		</div>
	);
}
