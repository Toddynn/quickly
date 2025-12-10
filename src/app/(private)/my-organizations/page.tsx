import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import AppLogo from '@/components/logo';
import { SidebarInset, SidebarInsetNav, SidebarTrigger } from '@/components/ui/sidebar';
import { TypographyH2 } from '@/components/ui/typography';
import { getQueryClient } from '@/shared/functions/get-query-client';
import OrganizationsList from './components/organizations-list';

export default async function MyOrganizations() {
	const queryClient = getQueryClient();

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<SidebarInset>
				<SidebarInsetNav>
					<SidebarTrigger />
					<AppLogo />
				</SidebarInsetNav>
				<div className="flex max-w-7xl flex-1 flex-col gap-4 p-4">
					<TypographyH2 className="self-start border-none">Minhas Organizações</TypographyH2>
					<OrganizationsList />
				</div>
			</SidebarInset>
		</HydrationBoundary>
	);
}
