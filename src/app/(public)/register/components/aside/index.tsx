'use client';

import { LucideBarChart2, LucideChevronsUp } from 'lucide-react';
import type { ComponentProps } from 'react';
import AppLogo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/shared/lib/utils';

export default function RegisterAsideCover({ className, ...props }: ComponentProps<'aside'>) {
	return (
		<aside
			className={cn(
				'relative min-[1024px]:flex hidden flex-col justify-between overflow-hidden gap-12  lg:p-20 p-12 text-foreground bg-[#2A2A2A] rounded-xl',
				className,
			)}
			{...props}
		>
			<div className="absolute -top-16 -left-16 rounded-full bg-slate-100/10 size-96 z-0" />

			<div className="relative">
				<Card className="light shadow-md shadow-background border-none">
					<CardHeader className="gap-2 p-6 flex-wrap text-4xl text-left text-heroui-success-700 font-bold">
						Metas rápidas de agendamento
					</CardHeader>
					<CardContent className="p-6">
						<p className="text-ellipsis font-normal text-lg text-pretty text-left">
							Gerencie compromissos com facilidade e eficiência. Nosso sistema simplifica o agendamento para você ganhar tempo e manter
							tudo organizado.
						</p>
					</CardContent>
					<CardFooter></CardFooter>
				</Card>
				<div className="light shadow-md shadow-background/70 flex items-center gap-4 p-4 bg-background rounded-2xl absolute -bottom-10 -left-6 text-heroui-success-700">
					<Button size="icon-lg" variant="ghost" className="text-heroui-success-700 bg-foreground rounded-full">
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

			<div className="flex flex-col dark:text-foreground text-background lg:gap-12 mt-6 gap-4 items-center">
				<h1 className="text-3xl text-left w-full text-pretty font-bold">Agendamentos simplificados e rápidos</h1>
				<p className="text-pretty text-left text-lg w-full font-normal">
					Tome decisões mais inteligentes com base no histórico de agendamentos. Planeje com confiança e otimize sua rotina.
				</p>
			</div>
			<AppLogo className="text-3xl  justify-center" text_class_name="text-white" />
		</aside>
	);
}
