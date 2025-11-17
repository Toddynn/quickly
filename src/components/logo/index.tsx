import { cn } from '@heroui/react';
import type { HTMLAttributes } from 'react';

interface AppLogoProps extends HTMLAttributes<HTMLDivElement> {
	text_class_name?: string;
}
export default function AppLogo({ text_class_name, className, ...props }: AppLogoProps) {
	return (
		<div className={cn('flex select-none items-center text-xl', className)} {...props}>
			<h1 className="font-gugi text-success">Q</h1>
			<p className={`${text_class_name} text-inherit font-gugi`}>uickly</p>
		</div>
	);
}
