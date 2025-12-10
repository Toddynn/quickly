'use client';

interface FormatLongDateProps {
	date: Date | string;
	options?: Intl.DateTimeFormatOptions;
}

export const default_long_date_options: Intl.DateTimeFormatOptions = {
	day: '2-digit',
	month: 'long',
	year: 'numeric',
};

export const default_long_date_with_hour_options: Intl.DateTimeFormatOptions = {
	...default_long_date_options,
	hour: '2-digit',
	minute: '2-digit',
};

export const formatLongDate = ({ date, options = default_long_date_options }: FormatLongDateProps) => {
	return new Date(date).toLocaleDateString('pt-BR', options);
};

