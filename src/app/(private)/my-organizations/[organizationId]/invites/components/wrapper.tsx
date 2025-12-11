'use client';
import { notFound } from 'next/navigation';
import { Fragment, Suspense, useState } from 'react';
import { OrganizationCard } from '@/components/composition-pattern/cards/organization/organization-card';
import { OrganizationCardSkeleton } from '@/components/composition-pattern/cards/organization/organization-card-skeleton';
import { USER_ID_TEST } from '@/shared/constants/user-id-test';
import type { Organization } from '@/shared/functions/zustand/get-organization-by-id';
import { useSuspenseGetOrganizationById } from '@/shared/functions/zustand/get-organization-by-id/use-index';
import { InviteModal } from './invite-modal';
import { InvitesHeader } from './invites-header';
import { InvitesList } from './invites-list';

interface OrganizationInvitesWrapperProps {
	organization_id: Organization['id'];
}

export function OrganizationInvitesWrapper({ organization_id }: OrganizationInvitesWrapperProps) {
	const { data: organization } = useSuspenseGetOrganizationById({ organization_id });
	const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
	const [search, setSearch] = useState('');

	if (!organization) notFound();

	// TODO: Trocar para pegar do current user quando tiver login implementado

	return (
		<Fragment>
			<div className="flex relative xl:flex-row flex-col-reverse flex-1 gap-4 p-4">
				<div className="size-full rounded-xl flex flex-col gap-6">
					<InvitesHeader search={search} onSearchChange={setSearch} onInviteClick={() => setIsInviteModalOpen(true)} />
					<InvitesList organization_id={organization_id} search={search} />
				</div>
				<Suspense fallback={<OrganizationCardSkeleton className="xl:sticky top-4 xl:max-w-md shrink-0" />}>
					<OrganizationCard className="xl:sticky top-4 xl:max-w-md shrink-0" organization={organization} />
				</Suspense>
			</div>
			<InviteModal open={isInviteModalOpen} onOpenChange={setIsInviteModalOpen} organization_id={organization_id} inviter_id={USER_ID_TEST} />
		</Fragment>
	);
}
