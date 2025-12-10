'use client';

import { ChevronRight, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from '@/components/ui/sidebar';

export interface NavRoute {
	title: string;
	url: string;
	icon?: LucideIcon;
	is_active?: boolean;
	sub_routes?: NavRoute[];
}
interface NavRoutesProps {
	routes: NavRoute[];
	show_label?: boolean;
}
export function NavRoutes({ routes, show_label = false }: NavRoutesProps) {
	return (
		<SidebarGroup>
			{show_label && <SidebarGroupLabel>Platform</SidebarGroupLabel>}
			<SidebarMenu>
				{routes.map((route) => {
					const hasSubRoutes = route.sub_routes && route.sub_routes.length > 0;

					if (hasSubRoutes) {
						return (
							<Collapsible key={route.title} asChild defaultOpen={route.is_active} className="group/collapsible">
								<SidebarMenuItem>
									<CollapsibleTrigger asChild>
										<SidebarMenuButton tooltip={route.title}>
											{route.icon && <route.icon />}
											<span>{route.title}</span>
											<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
										</SidebarMenuButton>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{route.sub_routes?.map((sub_route) => (
												<SidebarMenuSubItem key={sub_route.title}>
													<SidebarMenuSubButton asChild>
														<Link href={sub_route.url} rel="noopener noreferrer">
															<span>{sub_route.title}</span>
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									</CollapsibleContent>
								</SidebarMenuItem>
							</Collapsible>
						);
					}

					return (
						<SidebarMenuItem key={route.title}>
							<SidebarMenuButton asChild tooltip={route.title}>
								<Link href={route.url} rel="noopener noreferrer">
									{route.icon && <route.icon />}
									<span>{route.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					);
				})}
			</SidebarMenu>
		</SidebarGroup>
	);
}
