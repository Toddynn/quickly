'use client';

import type { VariantProps } from 'class-variance-authority';
import { LucideCalendar, LucideMail, LucideUser } from 'lucide-react';
import { useCallback } from 'react';
import { InfiniteList } from '@/components/composition-pattern/infinite-list';
import { Badge, type badgeVariants } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import formatDynamicDate from '@/shared/functions/format-dynamic-date';
import { formatLongDate } from '@/shared/functions/format-long-date';
import type { OrganizationInvite } from '@/shared/functions/tanstack/get/private/organization-invites/get-all-organization-invites';
import { usePrivateInfiniteGetAllOrganizationInvitesPaginated } from '@/shared/functions/tanstack/get/private/organization-invites/get-all-organization-invites/use-index';

interface InvitesListProps {
	organization_id: string;
	search?: string;
}

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>['variant']>;

interface InviteStatusBadge {
	variant: BadgeVariant;
	text: string;
}

function getInviteStatusBadge(status: string): InviteStatusBadge {
	switch (status) {
		case 'PENDING':
			return {
				variant: 'default',
				text: 'Pendente',
			};
		case 'ACCEPTED':
			return {
				variant: 'default',
				text: 'Aceito',
			};
		case 'EXPIRED':
		case 'REJECTED':
			return {
				variant: 'secondary',
				text: status === 'EXPIRED' ? 'Expirado' : 'Rejeitado',
			};
		default:
			return {
				variant: 'secondary',
				text: status,
			};
	}
}

function InviteCard({ invite }: { invite: OrganizationInvite }) {
	const statusBadge = getInviteStatusBadge(invite.status);

	return (
		<Card className="w-full">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<div className="flex items-center gap-3">
					<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
						<LucideMail size={20} />
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-sm font-medium leading-none">{invite.email}</p>
						<div className="flex items-center gap-2 text-xs text-muted-foreground">
							<LucideUser size={14} />
							<span>Enviado {formatDynamicDate({ date: invite.created_at })}</span>
						</div>
					</div>
				</div>
				<Badge variant={statusBadge.variant}>{statusBadge.text}</Badge>
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-2 text-xs text-muted-foreground">
					<LucideCalendar size={14} />
					<span>Expira em {formatLongDate({ date: invite.expiration_date })}</span>
				</div>
			</CardContent>
		</Card>
	);
}

export function InvitesList({ organization_id, search }: InvitesListProps) {
	const {
		data: Pagination,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
		error,
	} = usePrivateInfiniteGetAllOrganizationInvitesPaginated({
		organization_id,
		search: search || undefined,
	});

	const renderItem = useCallback((invite: OrganizationInvite, _index: number, _pageIndex: number) => {
		return <InviteCard key={invite.id} invite={invite} />;
	}, []);

	return (
		<InfiniteList
			className="flex flex-col gap-4"
			pages={Pagination}
			renderItem={renderItem}
			isLoading={isLoading}
			isFetchingNextPage={isFetchingNextPage}
			hasNextPage={!!hasNextPage}
			error={error}
			onEndReached={fetchNextPage}
		/>
	);
}
