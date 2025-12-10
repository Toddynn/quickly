'use client';

import { LucideArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AppLogo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { APP_ROUTES } from '@/shared/constants/app-routes';

export default function RegisterHeader() {
	return (
		<div className="flex sm:flex-row flex-col sm:items-center gap-4">
			<Link href={APP_ROUTES.PUBLIC.LOGIN.path}>
				<Button variant="outline" size="icon-lg">
					<LucideArrowLeft className="size-5" />
				</Button>
			</Link>
			<AppLogo className="text-5xl" />
		</div>
	);
}
