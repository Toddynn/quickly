import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { cn } from '@/shared/lib/utils';

interface InfiniteListDefaultEmptyListProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, 'children'> {
	pageIndex: number;
}
export function InfiniteListDefaultEmptyPage({ pageIndex, className }: InfiniteListDefaultEmptyListProps) {
	return <h1 className={cn('text-default-500 w-full text-center', className)}>Página {pageIndex + 1} vazia</h1>;
}
