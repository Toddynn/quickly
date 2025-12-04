'use client';

import { LucideChartLine, LucideChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import EmployeesChart from '../../charts/employees-chart';

export default function EmployeesPerformanceCard() {
	return (
		<Card className="w-full h-full">
			<CardHeader className="flex-col items-start gap-2">
				<div className="flex items-center justify-between gap-2 w-full">
					<h1 className="text-xl font-medium">Performance dos funcionários</h1>
					<Button size="icon-lg" className="shrink-0">
						<LucideChartLine size={20} />
					</Button>
				</div>
				<div className="flex w-full items-center justify-between gap-2">
					<h1 className="text-heroui-default-600">Por quantidade de agendamentos</h1>
					<Button size="sm" className=" text-heroui-default-600">
						<h3 className="text-base text-heroui-default-600 ">Último ano</h3>
						<LucideChevronsUpDown size={14} />
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<EmployeesChart />
			</CardContent>
		</Card>
	);
}
