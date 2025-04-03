'use client';

import { Card, CardHeader, Button, CardBody, CardFooter } from '@heroui/react';
import NumberFlow from '@number-flow/react';
import { LucideCalendarArrowUp, LucideChevronsUpDown, LucideArrowUpRight } from 'lucide-react';

export default function TotalSchedulingsCard() {
	return (
		<Card shadow="sm" className="w-full h-full">
			<CardHeader className="flex-col items-start">
				<div className="flex items-center justify-between gap-2 w-full">
					<h1 className="text-xl font-medium">Total de agendamentos</h1>
					<Button isIconOnly radius="full" size="lg" variant="flat" color="success" className="shrink-0">
						<LucideCalendarArrowUp size={20} />
					</Button>
				</div>
				<div className="flex items-center gap-2">
					<Button endContent={<LucideChevronsUpDown size={14} />} size="sm" radius="sm" variant="bordered" className="border-1 text-default-600">
						<h3 className="text-base text-default-600 capitalize">Nessa semana</h3>
					</Button>
				</div>
			</CardHeader>
			<CardBody className="py-0">
				<NumberFlow value={4874} animated className="text-4xl font-bold" />
			</CardBody>
			<CardFooter className=" pt-0">
				<p className="flex whitespace-normal flex-wrap items-center gap-1 text-lg font-normal text-default-600 text-pretty">
					<span className="text-success font-medium flex items-center gap-1">
						<LucideArrowUpRight size={18} /> 2%
					</span>
					em comparação com o mês anterior
				</p>
			</CardFooter>
		</Card>
	);
}
