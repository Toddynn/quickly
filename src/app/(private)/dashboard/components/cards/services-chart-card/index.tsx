'use client';

import { LucideChevronsUpDown, LucideTickets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ServicesChart from '../../charts/services-chart';

export default function ServicesChartCard() {
	return (
		<Card className="w-full h-full">
			<CardHeader className="flex-col items-start gap-2">
				<div className="flex items-center justify-between gap-2 w-full">
					<h1 className="text-xl font-medium">Adesão aos serviços</h1>
					<Button size="icon-lg" className="shrink-0">
						<LucideTickets size={20} />
					</Button>
				</div>
				<div className="flex w-full items-center justify-between gap-2">
					<h1 className="text-heroui-default-600">Por quantidade de agendamentos</h1>
					<Button size="sm" variant="outline" className="text-heroui-default-600">
						<h3 className="text-base text-heroui-default-600 ">Último ano</h3>
						<LucideChevronsUpDown size={14} />
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<ServicesChart />
			</CardContent>
		</Card>
	);
}
