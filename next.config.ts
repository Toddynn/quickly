const nextConfig = {
	images: {
		remotePatterns: [
			/* {
				hostname: process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
			}, */
			{
				hostname: process.env.NEXT_PUBLIC_APP_DOMAIN,
			},
		],
	},
};

export default nextConfig;
