import { heroui } from '@heroui/theme';
import tailwindScrollBar from 'tailwind-scrollbar';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			...defaultTheme,
			colors: {
				...defaultTheme.colors,
			},
			screens: {
				...defaultTheme.screens,
				lg: '1025px',
				md: '769px',
				xsm: '321px',
			},
			fontFamily: {
				...defaultTheme.fontFamily,
				dm_sans: ['var(--font-dm-sans)'],
			},
			animation: {
				...defaultTheme.animation,
			},
			keyframes: {
				...defaultTheme.keyframes,
			},
		},
	},
	darkMode: 'class',
	plugins: [
		heroui({
			themes: {
				light: {
					colors: {
						background: '#f5f5f5',
					},
				},
			},
		}),
		tailwindScrollBar({ noCompatible: true }),
	],
};
export default config;
