'use client';

import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import NumberFlow from '@number-flow/react';
import { LucideArrowUpRight, LucideUser } from 'lucide-react';

export default function TodaySchedulingCard() {
	return (
		<Card shadow="sm" className="w-full h-full">
			<CardHeader className="pb-0 justify-between gap-4">
				<h1 className="text-xl font-medium">Agendamentos de hoje</h1>
				<Button isIconOnly radius="full" size="lg" variant="flat" color="secondary" className="shrink-0">
					<LucideUser size={20} />
				</Button>
			</CardHeader>
			<CardBody>
				<NumberFlow value={4874} animated className="text-4xl font-bold" />
			</CardBody>
			<CardFooter className=" pt-0">
				<p className="flex whitespace-normal flex-wrap items-center gap-1 text-lg font-normal text-default-600 text-pretty">
					<span className="text-success font-medium flex items-center gap-1">
						<LucideArrowUpRight size={18} /> 2%
					</span>
					em comparação com ontem
				</p>
			</CardFooter>
		</Card>
	);
}
