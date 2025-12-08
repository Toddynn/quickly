import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import type { FileWithPreview } from '.';
import { FileCard } from './file-card';

interface UploadedFilesProps {
	files: Array<FileWithPreview>;
}

export function UploadedFiles({ files }: UploadedFilesProps) {
	return (
		<ScrollArea type="hover" className="w-full">
			<div className="flex space-x-4 px-1 pb-4">
				{files.map((file) => {
					return <FileCard key={file.id} file={file} />;
				})}
			</div>
			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	);
}
