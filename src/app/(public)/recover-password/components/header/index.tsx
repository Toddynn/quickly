'use client';

import { LucideArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AppLogo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { APP_ROUTES } from '@/shared/constants/app-routes';

export default function RecoverPasswordHeader() {
	return (
		<div className="flex items-center gap-2">
			<Button variant="ghost" size="icon" asChild>
				<Link href={APP_ROUTES.PUBLIC.LOGIN}>
					<LucideArrowLeft size={18} />
				</Link>
			</Button>
			<AppLogo className="text-5xl" />
		</div>
	);
}
