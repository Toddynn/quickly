export function formatBrazilianPhone(phone: string): string {
	const digits = phone.replace(/\D/g, '');

	let number = digits;

	// Remove DDI só para formatar (visualmente)
	if (digits.startsWith('55')) {
		number = digits.slice(2);
	}

	let formatted = '';

	if (number.length >= 1) formatted += `(${number.slice(0, 1)}`;
	if (number.length >= 2) formatted = `(${number.slice(0, 2)}`;
	if (number.length >= 3) formatted += `) ${number.slice(2, 3)}`;
	if (number.length >= 4) formatted += ` ${number.slice(3, 7)}`;
	if (number.length >= 8) formatted += `-${number.slice(7, 11)}`;

	// Se o número completo tiver 11 dígitos, mostra com DDI
	if (digits.length === 11) {
		formatted = `+55 ${formatted}`;
	}

	return formatted;
}
