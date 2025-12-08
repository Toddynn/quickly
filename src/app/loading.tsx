'use client';

import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
	return (
		<div className="flex min-h-dvh w-full items-center justify-center backdrop-blur-xl">
			<Spinner />
		</div>
	);
}
