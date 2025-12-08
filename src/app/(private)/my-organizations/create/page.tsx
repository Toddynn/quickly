import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import AppLogo from '@/components/logo';
import { SidebarInset, SidebarInsetNav, SidebarTrigger } from '@/components/ui/sidebar';
import { TypographyH2 } from '@/components/ui/typography';
import { getQueryClient } from '@/shared/functions/get-query-client';
import { CreateOrganizationFormulary } from './components/forms/create-organization-form';

export default async function CreateOrganization() {
	const queryClient = getQueryClient();

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<SidebarInset>
				<SidebarInsetNav>
					<SidebarTrigger />
					<AppLogo />
				</SidebarInsetNav>
				<div className="flex max-w-2xl flex-1 flex-col gap-4 p-4">
					<TypographyH2 className="self-start border-none">Criar Organização</TypographyH2>
					<CreateOrganizationFormulary />
				</div>
			</SidebarInset>
		</HydrationBoundary>
	);
}
