import type { ComponentProps } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/shared/lib/utils';

export function OrganizationCardSkeleton({ className, ...props }: ComponentProps<'div'>) {
	return (
		<Card
			className={cn(
				'h-fit w-full overflow-hidden border-border/60 shadow-sm transition-all hover:border-border/80 hover:shadow-md gap-0 p-0',
				className,
			)}
			{...props}
		>
			<CardHeader className="flex flex-row items-center gap-4 space-y-0 p-6">
				{/* Skeleton Logo */}
				<Skeleton className="h-12 w-12 rounded-xl" />
				<div className="flex flex-col gap-2 w-full max-w-[70%]">
					{/* Skeleton Title */}
					<Skeleton className="h-5 w-3/4" />
					{/* Skeleton Slug */}
					<Skeleton className="h-3 w-1/2" />
				</div>
			</CardHeader>
			<CardContent className="space-y-4 p-6">
				<div className="flex gap-2">
					<Skeleton className="h-6 w-24 rounded-full" />
				</div>
				<div className="space-y-3">
					<Skeleton className="h-4 w-1/3" /> {/* Label "Sobre" */}
					<div className="space-y-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-[90%]" />
						<Skeleton className="h-4 w-[60%]" />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
