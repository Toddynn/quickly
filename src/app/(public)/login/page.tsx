'use client';

import AppLogo from '@/components/logo';
import { ThemeSwitcher } from '@/components/ui/theme-switch';
import { Button, Card, CardBody, CardHeader, Checkbox, Divider, Input } from '@heroui/react';
import { LucideBanknote, LucideCalendar, LucideCalendarClock, LucideEye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
	return (
		<main className="flex h-screen items-center gap-12 p-20">
			<aside className="flex flex-col items-start gap-12 size-full p-20">
				<AppLogo className="text-3xl" />
				<ThemeSwitcher />
				<div className="flex flex-col size-full gap-8 ">
					<h1 className="text-4xl font-bold">Bem-vindo! 👋🏼</h1>
					<Input
						labelPlacement="outside"
						variant="bordered"
						size="lg"
						name="email"
						type="email"
						isRequired
						label="E-mail"
						placeholder="exemplo@gmail.com"
					/>
					<Input
						labelPlacement="outside"
						variant="bordered"
						size="lg"
						name="password"
						type="password"
						isRequired
						label="Senha"
						placeholder="**************"
						endContent={<LucideEye size={16} />}
					/>
					<div className="flex flex-wrap items-center justify-between w-full">
						<Checkbox color="success">Lembre de mim</Checkbox>
						<Link href="#" className="underline">
							Esqueceu a senha?
						</Link>
					</div>
					<Button className="w-full text-background bg-foreground font-medium" size="lg">
						Entrar
					</Button>
				</div>
			</aside>
			<aside className="relative flex flex-col overflow-hidden gap-12 size-full p-20 text-foreground bg-[#2A2A2A] rounded-xl">
				<div className="absolute -top-16 -right-16 rounded-full bg-slate-100/10 size-96 z-0" />
				<div className="flex items-center gap-4 size-full">
					<div className="size-full flex justify-center flex-col gap-6">
						<Card shadow="sm" className="light translate-x-10 z-10">
							<CardHeader className="gap-2 p-6 flex-wrap font-medium text-lg">
								Agendamentos <LucideCalendar size={18} />
								<Divider />
							</CardHeader>
							<CardBody className="gap-4">
								<div className="flex items-center overflow-hidden w-full justify-between gap-4">
									<Button isIconOnly className="shrink-0 dark" size="lg" radius="full">
										<LucideCalendarClock size={18} />
									</Button>
									<div className="flex flex-col shrink-0 justify-start items-start">
										<h1 className="font-medium text-base">Daniel da silva</h1>
										<h3 className="text-sm text-default-600">22 de janeiro de {new Date().getFullYear()}</h3>
									</div>
									<Button className="shrink-0" radius="full">
										Agendamento
									</Button>
								</div>
								<div className="flex items-center overflow-hidden justify-between gap-4">
									<Button isIconOnly className="shrink-0 dark" size="lg" radius="full">
										<LucideCalendarClock size={18} />
									</Button>
									<div className="flex flex-col shrink-0 justify-start items-start">
										<h1 className="font-medium text-base">Emanoel Castanha</h1>
										<h3 className="text-sm text-default-600">27 de janeiro de {new Date().getFullYear()}</h3>
									</div>
									<Button className="shrink-0" radius="full">
										Agendamento
									</Button>
								</div>
							</CardBody>
						</Card>
						<Card shadow="sm" className="light translate-x-16 z-10">
							<CardBody className="flex-row gap-4">
								<Button isIconOnly className="shrink-0 dark" size="lg" radius="full">
									<LucideBanknote size={26} />
								</Button>
								<div className="flex flex-col shrink-0 justify-start items-start">
									<h1 className="font-medium text-base">Ganhos</h1>
									<h3 className="text-xl font-bold text-success-600">R$ 350.40</h3>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className="relative rounded-2xl w-2/3 overflow-hidden h-96">
						<Image
							src="/assets/images/login.jpg"
							alt="Men looking at phone"
							className="object-cover object-center"
							sizes="1920x1080"
							quality={100}
							fill
							priority
						/>
					</div>
				</div>
				<div className="flex flex-col dark:text-foreground text-background gap-12 items-center">
					<h1 className="text-5xl text-pretty font-bold">Agendamentos simplificados e rápidos</h1>
					<p className="text-pretty text-base font-medium">
						Garanta eficiência e organização com nosso sistema avançado de agendamento. Planeje e gerencie compromissos de forma prática e
						ágil, economizando tempo e aumentando sua produtividade.
					</p>
					<AppLogo className="text-3xl" />
				</div>
			</aside>
		</main>
	);
}
