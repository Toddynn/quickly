export function formatPhoneNumber(value: string): string {
	if (!value) return '';
	const cleaned = value?.replace(/\D/g, '');

	// Com DDI 55 + DDD + celular
	if (/^55\d{11}$/.test(cleaned)) {
		return cleaned.replace(/^55(\d{2})(\d{5})(\d{4})$/, '55 ($1) $2-$3');
	}

	// Com DDI 55 + DDD + fixo
	if (/^55\d{10}$/.test(cleaned)) {
		return cleaned.replace(/^55(\d{2})(\d{4})(\d{4})$/, '55 ($1) $2-$3');
	}

	// DDD + celular (sem DDI)
	if (/^\d{11}$/.test(cleaned)) {
		return cleaned.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
	}

	// DDD + fixo (sem DDI)
	if (/^\d{10}$/.test(cleaned)) {
		return cleaned.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
	}

	// Apenas número local fixo ou celular incompleto
	if (/^\d{8,9}$/.test(cleaned)) {
		return cleaned.replace(/^(\d{4,5})(\d{4})$/, '$1-$2');
	}

	return cleaned;
}
