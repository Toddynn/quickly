'use client';

import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import { LucideChartLine, LucideChevronsUpDown } from 'lucide-react';
import EmployeesChart from '../../charts/employees-chart';

export default function EmployeesPerformanceCard() {
	return (
		<Card shadow="sm" className="w-full h-full">
			<CardHeader className="flex-col items-start gap-2">
				<div className="flex items-center justify-between gap-2 w-full">
					<h1 className="text-xl font-medium">Performance dos funcionários</h1>
					<Button isIconOnly radius="full" size="lg" variant="flat" color="primary" className="shrink-0">
						<LucideChartLine size={20} />
					</Button>
				</div>
				<div className="flex w-full items-center justify-between gap-2">
					<h1 className="text-default-600">Por quantidade de agendamentos</h1>
					<Button endContent={<LucideChevronsUpDown size={14} />} size="sm" radius="sm" variant="bordered" className="border-1 text-default-600">
						<h3 className="text-base text-default-600 ">Último ano</h3>
					</Button>
				</div>
			</CardHeader>
			<CardBody>
				<EmployeesChart />
			</CardBody>
		</Card>
	);
}
