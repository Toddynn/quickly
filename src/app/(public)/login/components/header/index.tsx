'use client';

import { LucideArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AppLogo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { APP_ROUTES } from '@/shared/constants/app-routes';

export default function LoginHeader() {
	return (
		<div className="flex sm:flex-row flex-col sm:items-center gap-2">
			<Link href={APP_ROUTES.PUBLIC.LANDING_PAGE.path}>
				<Button variant="outline" size="icon-lg">
					<LucideArrowLeft className="size-5" />
				</Button>
			</Link>
			<AppLogo className="text-5xl" />
		</div>
	);
}
