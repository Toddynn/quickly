'use client';

import NumberFlow from '@number-flow/react';
import { LucideArrowUpRight, LucideUser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export default function TodaySchedulingCard() {
	return (
		<Card className="w-full h-full">
			<CardHeader className="pb-0 justify-between gap-4">
				<h1 className="text-xl font-medium">Agendamentos de hoje</h1>
				<Button size="icon-lg" variant="secondary" className="shrink-0">
					<LucideUser size={20} />
				</Button>
			</CardHeader>
			<CardContent>
				<NumberFlow value={4874} animated className="text-4xl font-bold" />
			</CardContent>
			<CardFooter className="pt-0">
				<p className="flex whitespace-normal flex-wrap items-center gap-1 text-lg font-normal text-heroui-default-600 text-pretty">
					<span className="text-heroui-success font-medium flex items-center gap-1">
						<LucideArrowUpRight size={18} /> 2%
					</span>
					em comparação com ontem
				</p>
			</CardFooter>
		</Card>
	);
}
