import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	turbopack: {
		root: path.join(__dirname, '..'),
	},
	compiler: {
		removeConsole: process.env.NODE_ENV !== 'development',
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
				],
			},
			{
				source: '/sw.js',
				headers: [
					{
						key: 'Content-Type',
						value: 'application/javascript; charset=utf-8',
					},
					{
						key: 'Cache-Control',
						value: 'no-cache, no-store, must-revalidate',
					},
					{
						key: 'Content-Security-Policy',
						value: "default-src 'self'; script-src 'self'",
					},
				],
			},
		];
	},
	images: {
		qualities: [25, 50, 75, 100],
		remotePatterns: [
			{
				hostname: 'i.pravatar.cc',
			},
			/* {
				hostname: env.NEXT_PUBLIC_BACKEND_DOMAIN,
			},
			{
				hostname: env.NEXT_PUBLIC_APP_DOMAIN,
			},
			{
				hostname: thumbnail_domains[YTB_THUMBNAIL_DOMAIN.imgYouTubeCom],
			},
			{
				hostname: thumbnail_domains[YTB_THUMBNAIL_DOMAIN.iYtImgCom],
			},
			{
				hostname: thumbnail_domains[YTB_THUMBNAIL_DOMAIN.i3YtImgCom],
			}, */
		],
	},
	allowedDevOrigins: ['localhost' /* , env.NEXT_PUBLIC_APP_DOMAIN */],
	/* async rewrites() {
		return [
			{
				source: `${env.NEXT_PUBLIC_API_SOURCE}/:path*`,
				destination: `${backend_url}/:path*`,
			},
			{ source: '/favicon.ico', destination: '/assets/logos/favicon.ico' },
		];
	}, */
	reactCompiler: true,
};

export default nextConfig;
