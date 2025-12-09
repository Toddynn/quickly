import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import AppLogo from '@/components/logo';
import { SidebarInset, SidebarInsetNav, SidebarTrigger } from '@/components/ui/sidebar';
import { getQueryClient } from '@/shared/functions/get-query-client';
import { getOrganizationById } from '@/shared/functions/zustand/get-organization-by-id';
import { get_organization_by_id_query_key } from '@/shared/functions/zustand/get-organization-by-id/query-key';
import { OrganizationInvitesWrapper } from './components/wrapper';

export default async function OrganizationInvites({ params }: { params: Promise<{ organizationId: string }> }) {
	const { organizationId: organization_id } = await params;

	const queryClient = getQueryClient();

	if (!organization_id) notFound();

	await queryClient.prefetchQuery({
		queryKey: get_organization_by_id_query_key({ organization_id }),
		queryFn: async () => await getOrganizationById({ organization_id }),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<SidebarInset>
				<SidebarInsetNav>
					<SidebarTrigger />
					<AppLogo />
				</SidebarInsetNav>
				<OrganizationInvitesWrapper organization_id={organization_id} />
			</SidebarInset>
		</HydrationBoundary>
	);
}
