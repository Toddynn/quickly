import { object, string } from 'zod/v4';

const clientEnvSchema = object({
	NEXT_PUBLIC_APP_NAME: string({ error: 'NEXT_PUBLIC_APP_NAME is required.' }),
	NEXT_PUBLIC_APP_SHORT_NAME: string({ error: 'NEXT_PUBLIC_APP_SHORT_NAME is required.' }),
	NEXT_PUBLIC_APP_DESCRIPTION: string({ error: 'NEXT_PUBLIC_APP_DESCRIPTION is required.' }),
	NEXT_PUBLIC_APP_KEYWORDS: string({ error: 'NEXT_PUBLIC_APP_KEYWORDS is required.' }),
	NEXT_PUBLIC_APP_CREATOR: string({ error: 'NEXT_PUBLIC_APP_CREATOR is required.' }),
	NEXT_PUBLIC_THEME_COLOR: string({ error: 'NEXT_PUBLIC_THEME_COLOR is required.' }),
	NEXT_PUBLIC_BG_COLOR: string({ error: 'NEXT_PUBLIC_BG_COLOR is required.' }),

	NEXT_PUBLIC_APP_PROTOCOL: string({ error: 'NEXT_PUBLIC_APP_PROTOCOL is required.' }),
	NEXT_PUBLIC_APP_DOMAIN: string({ error: 'NEXT_PUBLIC_APP_DOMAIN is required.' }),
	NEXT_PUBLIC_APP_PORT: string().optional(),

	NEXT_PUBLIC_BACKEND_PROTOCOL: string({ error: 'NEXT_PUBLIC_BACKEND_PROTOCOL is required.' }),
	NEXT_PUBLIC_BACKEND_DOMAIN: string({ error: 'NEXT_PUBLIC_BACKEND_DOMAIN is required.' }),
	NEXT_PUBLIC_BACKEND_PORT: string({ error: 'NEXT_PUBLIC_BACKEND_PORT is required.' }).optional(),

	NEXT_PUBLIC_API_SOURCE: string({ error: 'NEXT_PUBLIC_API_SOURCE is required.' }),

	NEXT_PUBLIC_COOKIE_SESSION_ID: string({ error: 'NEXT_PUBLIC_COOKIE_SESSION_ID is required.' }),
});

const rawClientEnv = {
	NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
	NEXT_PUBLIC_APP_SHORT_NAME: process.env.NEXT_PUBLIC_APP_SHORT_NAME,
	NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
	NEXT_PUBLIC_APP_KEYWORDS: process.env.NEXT_PUBLIC_APP_KEYWORDS,
	NEXT_PUBLIC_APP_CREATOR: process.env.NEXT_PUBLIC_APP_CREATOR,
	NEXT_PUBLIC_THEME_COLOR: process.env.NEXT_PUBLIC_THEME_COLOR,
	NEXT_PUBLIC_BG_COLOR: process.env.NEXT_PUBLIC_BG_COLOR,

	NEXT_PUBLIC_APP_PROTOCOL: process.env.NEXT_PUBLIC_APP_PROTOCOL,
	NEXT_PUBLIC_APP_DOMAIN: process.env.NEXT_PUBLIC_APP_DOMAIN,
	NEXT_PUBLIC_APP_PORT: process.env.NEXT_PUBLIC_APP_PORT,

	NEXT_PUBLIC_BACKEND_PROTOCOL: process.env.NEXT_PUBLIC_BACKEND_PROTOCOL,
	NEXT_PUBLIC_BACKEND_DOMAIN: process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
	NEXT_PUBLIC_BACKEND_PORT: process.env.NEXT_PUBLIC_BACKEND_PORT,

	NEXT_PUBLIC_API_SOURCE: process.env.NEXT_PUBLIC_API_SOURCE,

	NEXT_PUBLIC_COOKIE_SESSION_ID: process.env.NEXT_PUBLIC_COOKIE_SESSION_ID,
} as const;

export const env = clientEnvSchema.parse(rawClientEnv);

// ----- Derivados
export const is_production = process.env.NODE_ENV === 'production';

const withPort = (protocol: string, domain: string, port?: string) => {
	return port ? `${protocol}://${domain}:${port}` : `${protocol}://${domain}`;
};

export const app_url = withPort(env.NEXT_PUBLIC_APP_PROTOCOL, env.NEXT_PUBLIC_APP_DOMAIN, env.NEXT_PUBLIC_APP_PORT);

export const backend_url = withPort(env.NEXT_PUBLIC_BACKEND_PROTOCOL, env.NEXT_PUBLIC_BACKEND_DOMAIN, env.NEXT_PUBLIC_BACKEND_PORT);

export const APP_METADATA = {
	name: env.NEXT_PUBLIC_APP_NAME,
	shortName: env.NEXT_PUBLIC_APP_SHORT_NAME,
	description: env.NEXT_PUBLIC_APP_DESCRIPTION,
	keywords: env.NEXT_PUBLIC_APP_KEYWORDS.split(','),
	creator: env.NEXT_PUBLIC_APP_CREATOR,
	themeColor: env.NEXT_PUBLIC_THEME_COLOR,
	backgroundColor: env.NEXT_PUBLIC_BG_COLOR,
};
