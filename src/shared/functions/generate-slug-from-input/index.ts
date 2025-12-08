export const generateSlugFromInput = (name: string): string => {
	return name
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // Remove acentos
		.replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
		.trim()
		.replace(/\s+/g, '-') // Espaços viram hífens
		.replace(/-+/g, '-') // Remove hífens consecutivos
		.replace(/^-+|-+$/g, ''); // Remove hífens das pontas
};
