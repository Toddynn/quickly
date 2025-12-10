'use client';

import { LucideFolder } from 'lucide-react';
import Link from 'next/link';
import { useCallback } from 'react';
import { OrganizationCard } from '@/components/composition-pattern/cards/organization/organization-card';
import { InfiniteList } from '@/components/composition-pattern/infinite-list';
import { Button } from '@/components/ui/button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty';
import { USER_ID_TEST } from '@/shared/constants/user-id-test';
import { usePrivateInfiniteGetAllOrganizationsPaginated } from '@/shared/functions/tanstack/get/private/organizations/get-all-organizations/use-index';
import type { Organization } from '@/shared/functions/zustand/get-organization-by-id';

// TODO: Trocar user_id para pegar do current user quando tiver login implementado
export default function OrganizationsList() {
	const {
		data: Pagination,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
		error,
	} = usePrivateInfiniteGetAllOrganizationsPaginated({
		user_id: USER_ID_TEST,
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
			EmptyList={
				<Empty>
					<EmptyHeader>
						<EmptyMedia variant="icon">
							<LucideFolder />
						</EmptyMedia>
						<EmptyTitle>Nenhuma Organização Encontrada</EmptyTitle>
						<EmptyDescription>Você ainda não criou nenhuma organização. Comece criando sua primeira organização.</EmptyDescription>
					</EmptyHeader>
					<EmptyContent>
						<Button asChild>
							<Link href="/my-organizations/create">Criar Organização</Link>
						</Button>
					</EmptyContent>
				</Empty>
			}
		/>
	);
}
