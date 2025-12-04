'use client';

import { LucideArrowUpRight, LucideChevronsUpDown, LucideThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export default function MostChosenServiceCard() {
	return (
		<Card className="w-full h-full">
			<CardHeader className="flex-col gap-2 items-start">
				<div className="flex items-center justify-between gap-2 w-full">
					<h1 className="text-xl font-medium">
						Serviço <span className="text-heroui-success">mais</span> escolhido
					</h1>
					<Button size="icon-lg" variant="secondary" className="shrink-0">
						<LucideThumbsUp size={20} />
					</Button>
				</div>
				<div className="flex items-center gap-2">
					<Button size="sm" variant="outline" className="text-heroui-default-600">
						<h3 className="text-base text-heroui-default-600 capitalize">Nessa semana</h3>
						<LucideChevronsUpDown size={14} />
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<h1 className="text-3xl font-bold">Corte + barba</h1>
			</CardContent>
			<CardFooter className="pt-0">
				<p className="flex whitespace-normal flex-wrap items-center gap-1 text-lg font-normal text-heroui-default-600 text-pretty">
					<span className="text-heroui-success font-medium flex items-center gap-1">
						<LucideArrowUpRight size={18} /> 2%
					</span>
					em comparação com o outro serviço
				</p>
			</CardFooter>
		</Card>
	);
}
