'use client';

import NumberFlow from '@number-flow/react';
import { LucideArrowUpRight, LucideCalendarArrowUp, LucideChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export default function TotalSchedulingsCard() {
	return (
		<Card className="w-full h-full">
			<CardHeader className="flex-col items-start gap-2">
				<div className="flex items-center justify-between gap-2 w-full">
					<h1 className="text-xl font-medium">Total de agendamentos</h1>
					<Button size="icon-lg" variant="secondary" className="shrink-0">
						<LucideCalendarArrowUp size={20} />
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
				<NumberFlow value={4874} animated className="text-4xl font-bold" />
			</CardContent>
			<CardFooter className="pt-0">
				<p className="flex whitespace-normal flex-wrap items-center gap-1 text-lg font-normal text-heroui-default-600 text-pretty">
					<span className="text-heroui-success font-medium flex items-center gap-1">
						<LucideArrowUpRight size={18} /> 2%
					</span>
					em comparação com o mês anterior
				</p>
			</CardFooter>
		</Card>
	);
}
