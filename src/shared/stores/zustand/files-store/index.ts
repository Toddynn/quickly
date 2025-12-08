'use client';

import { create } from 'zustand';
import type { FileWithPreview } from '@/components/file-uploader';

interface FilesState {
	files: Array<FileWithPreview>;
}

interface FilesActions {
	addMultipleFiles(files: Array<FileWithPreview>): void;
	updateFileById: (file_id: string, new_data: Partial<FileWithPreview>) => void;
	removeFileById: (file_id: string) => void;
	clearAll: () => void;
}

export type FilesStore = FilesState & FilesActions;

export const useFiles = create<FilesStore>((set) => ({
	files: [],

	addMultipleFiles: (new_files) => set((state) => ({ files: [...state.files, ...new_files] })),

	updateFileById: (file_id, newData) =>
		set((state) => ({
			files: state.files.map((file) => (file.id === file_id ? { ...file, ...newData } : file)),
		})),

	removeFileById: (file_id) =>
		set((state) => ({
			files: state.files.filter((file) => file.id !== file_id),
		})),

	clearAll: () =>
		set((state) => {
			for (const file of state.files) {
				URL.revokeObjectURL(file.preview);
			}
			return { files: [] };
		}),
}));
