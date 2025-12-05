'use client';

import { LucideAudioWaveform, LucideCommand, LucideGalleryVerticalEnd } from 'lucide-react';
import type * as React from 'react';
import { NavMain } from '@/components/nav-main';
import { TeamSwitcher } from '@/components/team-switcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { APP_ROUTES } from '@/shared/constants/app-routes';
import { NavProjects } from './nav-projects';

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
	navMain: Object.values(APP_ROUTES.PRIVATE.WITH_SUB_ROUTES).map((route) => ({
		title: route.name,
		url: route.path,
		icon: route.icon,
		isActive: false,
		items: route.sub_routes?.map((subRoute) => ({
			title: subRoute.name,
			url: subRoute.path,
			icon: subRoute.icon,
		})),
	})),
	projects: Object.values(APP_ROUTES.PRIVATE.WITHOUT_SUB_ROUTES).map((route) => ({
		title: route.name,
		url: route.path,
		icon: route.icon,
	})),
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant="inset" collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
			</SidebarContent>
			<SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
			{/* <SidebarRail /> */}
		</Sidebar>
	);
}
