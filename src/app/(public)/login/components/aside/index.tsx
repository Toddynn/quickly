'use client';

import AppLogo from '@/components/logo';
import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import { LucideBarChart2, LucideChevronsUp } from 'lucide-react';

export default function LoginAsideCover() {
	return (
		<aside className="relative min-[1024px]:flex hidden flex-col justify-between overflow-hidden gap-12 size-full lg:p-20 p-12 text-foreground bg-[#2A2A2A] rounded-xl">
			<div className="absolute -top-16 -right-16 rounded-full bg-slate-100/10 size-96 z-0" />

			<div className="relative">
				<Card shadow="sm" className="light ">
					<CardHeader className="gap-2 p-6 flex-wrap text-4xl text-left text-success-700 font-bold">Metas rápidas de agendamento</CardHeader>
					<CardBody className="p-6 ">
						<p className="text-ellipsis font-normal text-lg text-pretty text-left">
							Gerencie compromissos com facilidade e eficiência. Nosso sistema simplifica o agendamento para você ganhar tempo e manter
							tudo organizado.
						</p>
					</CardBody>
					<CardFooter></CardFooter>
				</Card>
				<div className="light shadow-md shadow-foreground/70 flex items-center gap-4 p-4 bg-background rounded-2xl absolute -bottom-10 -right-6 text-success-700">
					<Button isIconOnly variant="light" size="lg" radius="full" className="text-success-700 bg-white">
						<LucideBarChart2 size={18} />
					</Button>
					<div className="flex font-bold flex-col">
						<h3 className="font-medium text-foreground">Ganhos</h3>
						<h1 className="flex items-center gap-2 text-xl">
							R$ 350.40 <LucideChevronsUp size={18} />
						</h1>
					</div>
				</div>
			</div>

			<div className="flex flex-col dark:text-foreground text-background lg:gap-12 gap-4 items-center">
				<h1 className="text-3xl text-left w-full text-pretty font-bold">Agendamentos simplificados e rápidos</h1>
				<p className="text-pretty text-left text-lg w-full font-normal">
					Tome decisões mais inteligentes com base no histórico de agendamentos. Planeje com confiança e otimize sua rotina.
				</p>
			</div>
			<AppLogo className="text-3xl  justify-center" text_class_name="text-white" />
		</aside>
	);
}
