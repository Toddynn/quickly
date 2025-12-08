import { filesize } from 'filesize';
import { instanceof as instanceof_zod } from 'zod/v4';

export const FileSchema = ({ max_size = 10 * 1024 * 1024 }: { max_size?: number }) =>
	instanceof_zod(File, { error: 'Arquivo inválido' }).refine((file) => file.size < max_size, {
		message: `Cada arquivo deve ter no máximo ${filesize(max_size)}`,
	});
