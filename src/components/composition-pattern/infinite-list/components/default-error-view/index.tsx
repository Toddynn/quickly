'use client';

import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/shared/lib/utils';

interface InfiniteListDefaultErrorViewProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
	error: Error | null;
	retry?: () => void;
}

export function InfiniteListDefaultErrorView({ error, retry, className }: InfiniteListDefaultErrorViewProps) {
	return (
		<div className={cn('text-center', className)}>
			<p className="font-medium text-danger ">Erro ao carregar.</p>
			<pre className="text-xs whitespace-pre-wrap opacity-70">{String(error?.message)}</pre>
			{!!retry && (
				<Button onClick={retry} size="sm" variant="default" className="mt-2">
					Tentar novamente
				</Button>
			)}
		</div>
	);
}
