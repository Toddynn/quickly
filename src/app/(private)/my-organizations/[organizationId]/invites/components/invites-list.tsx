'use client';

import { useCallback } from 'react';
import { InviteCard } from '@/components/composition-pattern/cards/organization-invite/invite-card';
import { InfiniteList } from '@/components/composition-pattern/infinite-list';
import type { OrganizationInvite } from '@/shared/functions/tanstack/get/private/organization-invites/get-all-organization-invites';
import { usePrivateInfiniteGetAllOrganizationInvitesPaginated } from '@/shared/functions/tanstack/get/private/organization-invites/get-all-organization-invites/use-index';

interface InvitesListProps {
	organization_id: string;
	search?: string;
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

	const renderItem = useCallback(
		(invite: OrganizationInvite, _index: number, _pageIndex: number) => {
			return <InviteCard key={invite.id} invite={invite} organization_id={organization_id} />;
		},
		[organization_id],
	);

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
