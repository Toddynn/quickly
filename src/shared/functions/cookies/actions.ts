'use server';

import { cookies } from 'next/headers';

/**
 * Define um cookie com nome, valor e dias de expiração usando a API nativa do Next.js
 * @param name Nome do cookie
 * @param value Valor do cookie
 * @param expires_in Valor de expiração
 */
export async function setCookie(name: string, value: string, expires_in: number): Promise<void> {
	const cookieStore = await cookies();
	const expires = new Date();
	expires.setTime(expires.getTime() + expires_in);

	cookieStore.set(name, value, {
		expires,
		path: '/',
		sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
		secure: process.env.NODE_ENV === 'production',
		httpOnly: process.env.NODE_ENV === 'production',
	});
}

/**
 * Obtém o valor de um cookie pelo nome usando a API nativa do Next.js
 * @param name Nome do cookie
 * @returns Valor do cookie ou undefined se não existir
 */
export async function getCookie(name: string): Promise<string | undefined> {
	const cookieStore = await cookies();
	const cookie = cookieStore.get(name);
	return cookie?.value;
}

/**
 * Remove um cookie pelo nome usando a API nativa do Next.js
 * @param name Nome do cookie
 */
export async function removeCookie(name: string): Promise<void> {
	const cookieStore = await cookies();
	cookieStore.delete(name);
}
