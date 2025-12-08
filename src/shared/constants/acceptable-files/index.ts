import type { Accept } from 'react-dropzone';

export const image_types: Accept = {
	'image/png': ['.png'],
	'image/jpeg': ['.jpeg', '.jpg'],
	'image/gif': ['.gif'],
	'image/webp': ['.webp'],
	'image/heic': ['.heic'],
	'image/heif': ['.heif'],
	'image/avif': ['.avif'],
};

export const video_types: Accept = {
	'video/mp4': ['.mp4'],
	'video/avi': ['.avi'],
	'video/mov': ['.mov'],
	'video/webm': ['.webm'],
};

export const spreadsheet_types: Accept = {
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
};

export const pdf_types: Accept = {
	'application/pdf': ['.pdf'],
};

export const default_accepted_file_types: Accept = {
	...image_types,
};
