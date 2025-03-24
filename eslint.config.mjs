import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Ajuste para __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Inicializa o compat para configurar corretamente o ESLint
const compat = new FlatCompat({
	baseDirectory: __dirname,
});

// Importação correta dos plugins
import eslintPluginNext from '@next/eslint-plugin-next';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		name: 'Custom Next.js ESLint Config',
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			'@next/next': eslintPluginNext,
			'react-hooks': eslintPluginReactHooks,
			prettier: eslintPluginPrettier,
		},
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		rules: {
			// Regras do Next.js
			...eslintPluginNext.configs.recommended.rules,
			...eslintPluginNext.configs['core-web-vitals'].rules,

			// Regras do React Hooks
			...eslintPluginReactHooks.configs.recommended.rules,

			// Regras do Prettier
			...eslintPluginPrettier.configs.recommended.rules,

			// Desativando erro de classes personalizadas no Tailwind
			'tailwindcss/no-custom-classname': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			// Regras adicionais
			'react-hooks/exhaustive-deps': 'warn', // Garante dependências corretas no useEffect e useMemo
			'prettier/prettier': ['error', { singleQuote: true, semi: true }], // Configurações para Prettier
		},
	},
];
export default eslintConfig;
