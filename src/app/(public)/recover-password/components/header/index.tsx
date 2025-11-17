'use client';

import { Button } from '@heroui/react';
import { LucideArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AppLogo from '@/components/logo';
import { APP_ROUTES } from '@/shared/constants/app-routes';

export default function RecoverPasswordHeader() {
	return (
		<div className="flex items-center gap-2">
			<Link href={APP_ROUTES.PUBLIC.LOGIN}>
				<Button variant="light" isIconOnly as="div">
					<LucideArrowLeft size={18} />
				</Button>
			</Link>
			<AppLogo className="text-5xl" />
		</div>
	);
}
