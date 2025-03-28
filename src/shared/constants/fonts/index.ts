import { DM_Sans, Gugi } from 'next/font/google';

export const dmSansFont = DM_Sans({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
	variable: '--font-dm_sans',
});
export const gugiFont = Gugi({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-gugi',
});
