'use client';

import { LucideArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AppLogo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { APP_ROUTES } from '@/shared/constants/app-routes';

export default function LoginHeader() {
	return (
		<div className="flex items-center gap-2">
			<Link href={APP_ROUTES.PUBLIC.MURAL_CHOICE}>
				<Button variant="ghost" size="icon">
					<LucideArrowLeft size={18} />
				</Button>
			</Link>
			<AppLogo className="text-5xl" />
		</div>
	);
}
