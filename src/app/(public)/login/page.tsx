'use client';

import AppLogo from '@/components/logo';
import { ThemeSwitcher } from '@/components/ui/theme-switch';
import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input } from '@heroui/react';
import { LucideBarChart2, LucideEye } from 'lucide-react';
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

				<div className="relative size-full flex justify-center flex-col gap-6">
					<Card shadow="sm" className="light relative">
						<CardHeader className="gap-2 p-6 flex-wrap text-4xl text-success-700 font-bold">Metas Rápidas de Agendamento</CardHeader>
						<CardBody className="p-6">
							<p className="text-ellipsis font-normal text-lg text-pretty">
								Alcance eficiência no agendamento. Use o nosso sistema de agendamento para organizar compromissos de forma prática e
								transparente.
							</p>
						</CardBody>
						<CardFooter></CardFooter>
					</Card>
					<div className="light bg-slate-50 p-6 rounded-2xl w-72 absolute bottom-8 -right-6 flex-row flex gap-2 text-success-700 items-center ">
						<div>
							<Button radius="full" size="lg" isIconOnly>
								<LucideBarChart2 size={24} />
							</Button>
						</div>
						<div className="flex flex-col ">
							<h3 className="text-sm font-semibold">Ganhos</h3>
							<h1 className="text-2xl font-bold">R$ 350.40</h1>
						</div>
					</div>
				</div>

				<div className="flex flex-col dark:text-foreground text-background gap-12 items-center">
					<h1 className="text-3xl text-pretty font-bold">Agendamentos simplificados e rápidos</h1>
					<p className="text-pretty text-base font-medium">
						Analisar padrões de agendamentos anteriores garante que os negócios sempre tomem as decisões certas.
					</p>
					<AppLogo className="text-3xl" />
				</div>
			</aside>
		</main>
	);
}
