import { Building2, Globe, Info } from 'lucide-react';
import type { ComponentProps } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Organization } from '@/shared/functions/zustand/get-organization-by-id';
import { cn } from '@/shared/lib/utils';

interface OrganizationCardProps extends ComponentProps<'div'> {
	organization: Organization;
}
export function OrganizationCard({ organization, className, ...props }: OrganizationCardProps) {
	return (
		<Card
			className={cn(
				'h-fit w-full overflow-hidden border-border/60 shadow-sm transition-all hover:border-border/80 hover:shadow-md gap-0 p-0',
				className,
			)}
			{...props}
		>
			<CardHeader className="flex flex-row items-center gap-4 space-y-0 bg-muted/20  p-6">
				<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-inner">
					<Building2 size={24} aria-hidden="true" />
				</div>
				<div className="flex flex-col gap-1.5 overflow-hidden">
					<CardTitle className="truncate text-lg font-semibold leading-none tracking-tight">{organization.name}</CardTitle>
					<div className="flex items-center gap-1.5 text-sm text-muted-foreground">
						<Globe size={18} />
						<span className="truncate font-mono">{organization.slug}.quickly.app</span>
					</div>
				</div>
			</CardHeader>
			<CardContent className="space-y-4  p-6">
				<div className="flex flex-wrap gap-2">
					<Badge variant="default" className="font-normal rounded-md">
						Plano Gratuito
					</Badge>
				</div>
				<div className="flex items-center gap-2 text-sm font-medium text-foreground">
					<Info size={16} className="text-muted-foreground" />
					Sobre a organização
				</div>
				{organization.description ? (
					<p className="text-sm leading-relaxed text-muted-foreground">{organization.description}</p>
				) : (
					<p className="italic text-muted-foreground/50 text-sm">Nenhuma descrição fornecida.</p>
				)}
			</CardContent>
		</Card>
	);
}
