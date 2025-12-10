import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { cn } from '@/shared/lib/utils';

export function InfiniteListDefaultEmptyList({ children, className }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
	return <h1 className={cn('text-default-500 w-full text-center', className)}>{children ?? 'Nada por aqui ainda'}</h1>;
}
