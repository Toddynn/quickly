'use client';

import AppLogo from '@/components/logo';
import { ThemeSwitcher } from '@/components/ui/theme-switch';
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, useDisclosure } from '@heroui/react';
import { LucideDoorOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminNavbar() {
	const pathName = usePathname();
	const { isOpen, onOpenChange } = useDisclosure();
	const menuItems = [
		{ label: 'Início', href: '/dashboard' },
		{ label: 'Agendamentos', href: '/schedules' },
		{ label: 'Funcionários', href: '/employees' },
		{ label: 'Serviços', href: '/services' },
		{ label: 'Empresa', href: '/companies' },
	];

	return (
		<Navbar
			isBordered
			isMenuOpen={isOpen}
			onMenuOpenChange={onOpenChange}
			shouldHideOnScroll
			classNames={{
				wrapper: 'max-w-none',
				item: [
					'flex ',
					'relative',
					'h-full',
					'items-center',
					"data-[active=true]:after:content-['']",
					'data-[active=true]:after:absolute',
					'data-[active=true]:after:bottom-0',
					'data-[active=true]:after:left-0',
					'data-[active=true]:after:right-0',
					'data-[active=true]:after:h-[2px]',
					'data-[active=true]:after:rounded-[2px]',
					'data-[active=true]:after:bg-success',
				],
			}}
		>
			<NavbarContent justify="start">
				<NavbarMenuToggle className="sm:hidden" aria-label={isOpen ? 'Close menu' : 'Open menu'} />
				<NavbarBrand className="w-auto text-xl">
					<AppLogo className="text-2xl" />
				</NavbarBrand>
				<NavbarItem className="sm:hidden flex">
					<ThemeSwitcher size="sm" />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{menuItems.map((menu_item, idx) => (
					<NavbarItem key={'pc-menu-item' + idx} isActive={pathName === menu_item.href}>
						<Link href={menu_item.href}>{menu_item.label}</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent className="hidden sm:flex" justify="end">
				<NavbarItem>
					<ThemeSwitcher size="sm" />
				</NavbarItem>
				<NavbarItem>
					<Button color="danger" variant="light" endContent={<LucideDoorOpen size={16} />}>
						Sair
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu className="py-8">
				{menuItems.map((menu_item, index) => {
					const is_active = pathName === menu_item.href;
					return (
						<NavbarMenuItem key={'mobile-menu-item' + index}>
							<Button
								as={Link}
								variant={is_active ? 'bordered' : 'light'}
								color={is_active ? 'primary' : 'default'}
								radius="none"
								className="w-full text-inherit font-medium justify-start border-x-0 border-t-0"
								href={menu_item.href}
							>
								{menu_item.label}
							</Button>
						</NavbarMenuItem>
					);
				})}

				<NavbarMenuItem className="mt-auto">
					<Button color="danger" variant="flat" className="w-full justify-start" endContent={<LucideDoorOpen size={16} />}>
						Sair
					</Button>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
}
