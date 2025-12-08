import type { APP_ROUTES } from '@/shared/constants/app-routes';

type PathParamValue = string | number | undefined;

type ExtractRouteParams<Path extends string> = Path extends `${string}:${infer Param}/${infer Rest}`
	? Param | ExtractRouteParams<`/${Rest}`>
	: Path extends `${string}:${infer Param}`
		? Param
		: never;

type ParamsObject<Path extends string> = [ExtractRouteParams<Path>] extends [never]
	? {} // rota sem path params
	: {
			[K in ExtractRouteParams<Path>]: PathParamValue;
		};

type FlattenAppRoutes<T> =
	T extends Record<string, any>
		? {
				[K in keyof T]: T[K] extends string ? T[K] : FlattenAppRoutes<T[K]>;
			}[keyof T]
		: never;

export type AllAppPaths = FlattenAppRoutes<typeof APP_ROUTES>;

type QueryParams = Record<string, string | number | undefined | null>;

// --- Query builder ---

function buildQueryString(queryParams: QueryParams = {}): string {
	const queryString = Object.entries(queryParams)
		.filter(([, value]) => value !== undefined && value !== null)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		.join('&');

	return queryString ? `?${queryString}` : '';
}

// --- Função com inferência condicional baseada no path ---

/**
 * Função que constrói uma rota com base no path fornecido, valores de parâmetro e query params.
 *
 * @param path - O caminho que será construído, pode conter parâmetros definidos com ':'.
 * @param args - Um objeto com os valores dos parâmetros ou os query params.
 * @returns A rota construída com base no path fornecido, valores de parâmetro e query params.
 * @throws {Error} Se um parâmetro forneceito não for encontrado no objeto de parâmetros.
 */
export function buildAppRoute<Path extends AllAppPaths>(
	path: Path,
	...args: ExtractRouteParams<Path> extends never ? [queryParams?: QueryParams] : [params: ParamsObject<Path>, queryParams?: QueryParams]
): string {
	const hasParams = /:([a-zA-Z0-9_]+)/.test(path);

	let builtPath = String(path);
	let params: Record<string, PathParamValue> = {};
	let queryParams: QueryParams = {};

	if (hasParams) {
		params = args[0] ?? {};
		queryParams = args[1] ?? {};
	} else {
		queryParams = args[0] ?? {};
	}

	builtPath = builtPath.replace(/:([a-zA-Z0-9_]+)/g, (_, paramName) => {
		const value = params[paramName];
		if (value === undefined) {
			throw new Error(`Missing parameter "${paramName}" for path "${path}"`);
		}
		return String(value);
	});

	return `${builtPath}${buildQueryString(queryParams)}`;
}
