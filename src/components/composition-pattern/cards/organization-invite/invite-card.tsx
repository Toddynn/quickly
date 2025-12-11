import type { VariantProps } from 'class-variance-authority';
import { LucideCalendar, LucideMail, LucideUser } from 'lucide-react';
import { OrganizationInviteActions } from '@/components/composition-pattern/actions/organization-invites';
import { Badge, type badgeVariants } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type { OrganizationInviteStatus } from '@/shared/constants/organization-invite-status';
import { ORGANIZATION_INVITE_STATUS } from '@/shared/constants/organization-invite-status';
import formatDynamicDate from '@/shared/functions/format-dynamic-date';
import { formatLongDate } from '@/shared/functions/format-long-date';
import type { OrganizationInvite } from '@/shared/functions/tanstack/get/private/organization-invites/get-all-organization-invites';

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>['variant']>;

interface InviteStatusBadge {
	variant: BadgeVariant;
	text: string;
}

function getInviteStatusBadge(status: OrganizationInviteStatus): InviteStatusBadge {
	switch (status) {
		case ORGANIZATION_INVITE_STATUS.PENDING:
			return {
				variant: 'default',
				text: 'Pendente',
			};
		case ORGANIZATION_INVITE_STATUS.ACCEPTED:
			return {
				variant: 'success',
				text: 'Aceito',
			};
		case ORGANIZATION_INVITE_STATUS.EXPIRED:
			return {
				variant: 'outline',
				text: 'Expirado',
			};
		case ORGANIZATION_INVITE_STATUS.REJECTED:
			return {
				variant: 'destructive',
				text: 'Rejeitado',
			};
		case ORGANIZATION_INVITE_STATUS.CANCELED:
			return {
				variant: 'warning',
				text: 'Cancelado',
			};
		default:
			return {
				variant: 'secondary',
				text: status,
			};
	}
}

interface InviteCardProps {
	invite: OrganizationInvite;
	organization_id: string;
}

export function InviteCard({ invite, organization_id }: InviteCardProps) {
	const statusBadge = getInviteStatusBadge(invite.status);
	const canCancel = invite.status === ORGANIZATION_INVITE_STATUS.PENDING;

	return (
		<Card className="w-full">
			<CardHeader className="flex flex-row flex-wrap items-center justify-between space-y-0 ">
				<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
					<LucideMail size={20} />
				</div>
				<div className="flex flex-col gap-1 items-start flex-1">
					<p className="font-medium leading-none truncate">{invite.email}</p>
					<div className="flex items-center gap-2 text-xs text-muted-foreground">
						<LucideUser size={14} />
						<span>Enviado {formatDynamicDate({ date: invite.created_at })}</span>
					</div>
				</div>
				<Badge className="rounded-md" variant={statusBadge.variant}>
					{statusBadge.text}
				</Badge>
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-2 text-xs text-muted-foreground">
					<LucideCalendar size={14} />
					<span>Data de expiração: {formatLongDate({ date: invite.expiration_date })}</span>
				</div>
			</CardContent>
			<CardFooter className="justify-end">
				{canCancel && <OrganizationInviteActions.Cancel invite_id={invite.id} organization_id={organization_id} />}
			</CardFooter>
		</Card>
	);
}
