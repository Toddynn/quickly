import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import AppLogo from '@/components/logo';
import { SidebarInset, SidebarInsetNav, SidebarTrigger } from '@/components/ui/sidebar';
import { getQueryClient } from '@/shared/functions/get-query-client';
import { EditOrganizationWrapper } from './components/wrapper';

export default async function CreateOrganization({ params }: { params: Promise<{ organizationId: string }> }) {
	const { organizationId: organization_id } = await params;

	const queryClient = getQueryClient();

	if (!organization_id) notFound();

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<SidebarInset>
				<SidebarInsetNav>
					<SidebarTrigger />
					<AppLogo />
				</SidebarInsetNav>
				<EditOrganizationWrapper organization_id={organization_id} />
			</SidebarInset>
		</HydrationBoundary>
	);
}
