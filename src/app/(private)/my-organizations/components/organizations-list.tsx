'use client';

import Link from 'next/link';
import { useCallback } from 'react';
import { OrganizationCard } from '@/components/composition-pattern/cards/organization/organization-card';
import { InfiniteList } from '@/components/composition-pattern/infinite-list';
import { usePrivateInfiniteGetAllOrganizationsPaginated } from '@/shared/functions/tanstack/get/private/organizations/get-all-organizations/use-index';
import type { Organization } from '@/shared/functions/zustand/get-organization-by-id';

// TODO: Trocar user_id para pegar do current user quando tiver login implementado
export default function OrganizationsList() {
	const user_id = '019afb5d-a7d1-735a-a495-2626d4b74ee6';

	const {
		data: Pagination,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
		error,
	} = usePrivateInfiniteGetAllOrganizationsPaginated({
		user_id,
	});

	const renderItem = useCallback((organization: Organization, _index: number, _pageIndex: number) => {
		return (
			<Link key={organization.id} href={`/my-organizations/${organization.id}/invites`} className="block">
				<OrganizationCard organization={organization} />
			</Link>
		);
	}, []);

	return (
		<InfiniteList
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
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
