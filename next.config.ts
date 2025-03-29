import { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			/* {
				hostname: process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
			}, */
			{
				hostname: String(process.env.NEXT_PUBLIC_APP_DOMAIN),
			},
			{
				protocol: 'https',
				hostname: '**',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
