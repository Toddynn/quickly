'use client';

import { LucideAudioWaveform, LucideCommand, LucideGalleryVerticalEnd } from 'lucide-react';
import type * as React from 'react';
import { NavRoutes } from '@/components/nav-main';
import { TeamSwitcher } from '@/components/team-switcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { APP_ROUTES } from '@/shared/constants/app-routes';

// This is sample data.
const data = {
	user: {
		name: 'John Doe',
		email: 'john.doe@example.com',
		avatar: '',
	},
	teams: [
		{
			name: 'Acme Inc',
			logo: LucideGalleryVerticalEnd,
			plan: 'Enterprise',
		},
		{
			name: 'Acme Corp.',
			logo: LucideAudioWaveform,
			plan: 'Startup',
		},
		{
			name: 'Evil Corp.',
			logo: LucideCommand,
			plan: 'Free',
		},
	],
	routes: Object.values(APP_ROUTES.PRIVATE).map((route) => ({
		title: route.name,
		url: route.path,
		icon: route.icon,
		is_active: false,
	})),
};

export function AppSidebar({ collapsible = 'icon', variant = 'inset', ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant={variant} collapsible={collapsible} {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavRoutes routes={data.routes} />
				{/* <NavProjects projects={data.projects} /> */}
			</SidebarContent>
			<SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
			{/* <SidebarRail /> */}
		</Sidebar>
	);
}
