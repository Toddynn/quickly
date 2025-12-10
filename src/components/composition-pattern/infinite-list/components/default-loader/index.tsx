import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/shared/lib/utils';

export function InfiniteListDefaultLoader({ className }: Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'>) {
	return (
		<div aria-busy="true" className={cn('flex flex-col items-center justify-center gap-2', className)}>
			<Spinner className="size-8" />
			<span>Carregando...</span>
		</div>
	);
}
