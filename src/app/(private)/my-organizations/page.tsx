import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import AppLogo from '@/components/logo';
import { SidebarInset, SidebarInsetNav, SidebarTrigger } from '@/components/ui/sidebar';
import { getQueryClient } from '@/shared/functions/get-query-client';
import { OrganizationsWrapper } from './components/organizations-wrapper';

export default async function MyOrganizations() {
	const queryClient = getQueryClient();

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<SidebarInset>
				<SidebarInsetNav>
					<SidebarTrigger />
					<AppLogo />
				</SidebarInsetNav>
				<OrganizationsWrapper />
			</SidebarInset>
		</HydrationBoundary>
	);
}
