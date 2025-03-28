import { cn } from '@heroui/react';
import { HTMLAttributes } from 'react';

export default function AppLogo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn('flex select-none items-center text-xl', className)} {...props}>
			<h1 className="font-gugi text-success">Q</h1>
			<p className="text-inherit font-gugi">uickly</p>
		</div>
	);
}
