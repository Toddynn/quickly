'use client';

import { type Locale, differenceInHours, format, formatDistanceToNowStrict } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface FormatDynamicDateProps {
	date: Date | string;
	diffLimit?: number;
	formatStr?: string;
	locale?: Locale;
}

/**
 * Formata uma data dinamicamente.
 *
 * Se a data for menor de 24h da data atual, retorna a distância em horas
 * entre a data atual e a data passada, acrescida do sufixo 'atrás' ou 'daqui a'
 * dependendo da distância.
 *
 * Caso contrário, retorna a data formatada com o formato `'em' dd/MM/yyyy 'às' HH:mm`
 * por padrão, mas pode ser customizado.
 *
 * @param {Date} date - Data a ser formatada
 * @param {number} [diffLimit=24] - Limite de horas que determina se a data
 *   ser  formatada como dist ncia ou como data completa
 * @param {string} [formatStr=`'em' dd/MM/yyyy 'às' HH:mm`] - Formato a ser usado na
 *   formatação da data completa
 * @param {Locale} [locale = ptBR] - Localidade a ser usado na
 *   formatação da data
 * @returns {string} A data formatada dinamicamente
 */
export default function formatDynamicDate({ date, diffLimit = 24, formatStr = `'em' dd/MM/yyyy 'às' HH:mm`, locale = ptBR }: FormatDynamicDateProps): string {
	const formattedDate = new Date(date);
	const hoursDiff = differenceInHours(new Date(), formattedDate);

	return hoursDiff < diffLimit ? formatDistanceToNowStrict(formattedDate, { addSuffix: true, locale }) : `${format(formattedDate, formatStr, { locale })}`;
}
