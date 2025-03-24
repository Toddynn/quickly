'use client';

import { Spinner } from '@heroui/react';

export default function Loading() {
	return (
		<div className="flex min-h-screen w-full items-center justify-center backdrop-blur-xl">
			<Spinner />
		</div>
	);
}
