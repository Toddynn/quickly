'use client';
import { LucideSearch, LucideTicketPlus } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Fragment, Suspense, useState } from 'react';
import { OrganizationCard } from '@/components/composition-pattern/cards/organization/organization-card';
import { OrganizationCardSkeleton } from '@/components/composition-pattern/cards/organization/organization-card-skeleton';
import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { TypographyH2 } from '@/components/ui/typography';
import { USER_ID_TEST } from '@/shared/constants/user-id-test';
import type { Organization } from '@/shared/functions/zustand/get-organization-by-id';
import { useSuspenseGetOrganizationById } from '@/shared/functions/zustand/get-organization-by-id/use-index';
import { InviteModal } from './invite-modal';
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
					<div className="sticky bg-background z-10 py-4 gap-4 top-0">
						<TypographyH2 className="self-start border-none">Convites da Organização</TypographyH2>
						<div className="flex sm:flex-row flex-col items-center gap-2">
							<InputGroup className="h-10">
								<InputGroupAddon align={'inline-start'}>
									<LucideSearch size={18} />
								</InputGroupAddon>
								<InputGroupInput
									id={'search'}
									name={'search'}
									type="text"
									placeholder="Pesquisar convites..."
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
							</InputGroup>
							<Button size={'lg'} className="group sm:w-auto w-full text-base items-center" onClick={() => setIsInviteModalOpen(true)}>
								Convidar <LucideTicketPlus className="group-hover:-rotate-15 size-5 rotate-0 transition-transform duration-200" />
							</Button>
						</div>
					</div>
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
