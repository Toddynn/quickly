'use client';

import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import NumberFlow from '@number-flow/react';
import {
	LucideArrowDownRight,
	LucideArrowUpRight,
	LucideCalendarArrowUp,
	LucideChevronsUpDown,
	LucideThumbsDown,
	LucideThumbsUp,
	LucideUser,
} from 'lucide-react';
import EmployeesPerformanceCard from './components/cards/employees-performance-card';
import ServicesChartCard from './components/cards/services-chart-card';

export default function Dashboard() {
	return (
		<div className="size-full p-6 flex flex-col gap-6">
			<div className="flex h-52 items-start gap-6">
				<Card shadow="sm" className="w-full h-full">
					<CardHeader className="pb-0 justify-between gap-4">
						<h1 className="text-xl font-medium">Agendamentos de hoje</h1>
						<Button isIconOnly radius="full" size="lg" variant="flat" color="secondary" className="shrink-0">
							<LucideUser size={20} />
						</Button>
					</CardHeader>
					<CardBody className="py-0">
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
				<Card shadow="sm" className="w-full h-full">
					<CardHeader className="flex-col items-start">
						<div className="flex items-center justify-between gap-2 w-full">
							<h1 className="text-xl font-medium">Total de agendamentos</h1>
							<Button isIconOnly radius="full" size="lg" variant="flat" color="success" className="shrink-0">
								<LucideCalendarArrowUp size={20} />
							</Button>
						</div>
						<div className="flex items-center gap-2">
							<Button
								endContent={<LucideChevronsUpDown size={14} />}
								size="sm"
								radius="sm"
								variant="bordered"
								className="border-1 text-default-600"
							>
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
				<Card shadow="sm" className="w-full h-full">
					<CardHeader className="flex-col items-start">
						<div className="flex items-center justify-between gap-2 w-full">
							<h1 className="text-xl font-medium">
								Serviço <span className="text-success">mais</span> escolhido
							</h1>
							<Button isIconOnly radius="full" size="lg" variant="flat" color="success" className="shrink-0">
								<LucideThumbsUp size={20} />
							</Button>
						</div>
						<div className="flex items-center gap-2">
							<Button
								endContent={<LucideChevronsUpDown size={14} />}
								size="sm"
								radius="sm"
								variant="bordered"
								className="border-1 text-default-600"
							>
								<h3 className="text-base text-default-600 capitalize">Nessa semana</h3>
							</Button>
						</div>
					</CardHeader>
					<CardBody>
						<h1 className="text-3xl font-bold">Corte + barba</h1>
					</CardBody>
					<CardFooter className=" pt-0">
						<p className="flex whitespace-normal flex-wrap items-center gap-1 text-lg font-normal text-default-600 text-pretty">
							<span className="text-success font-medium flex items-center gap-1">
								<LucideArrowUpRight size={18} /> 2%
							</span>
							em comparação com o outro serviço
						</p>
					</CardFooter>
				</Card>
				<Card shadow="sm" className="w-full h-full">
					<CardHeader className="flex-col items-start">
						<div className="flex items-center justify-between gap-2 w-full">
							<h1 className="text-xl font-medium">
								Serviço <span className="text-danger">menos</span> escolhido
							</h1>
							<Button isIconOnly radius="full" size="lg" variant="flat" color="danger" className="shrink-0">
								<LucideThumbsDown size={20} />
							</Button>
						</div>
						<div className="flex items-center gap-2">
							<Button
								endContent={<LucideChevronsUpDown size={14} />}
								size="sm"
								radius="sm"
								variant="bordered"
								className="border-1 text-default-600"
							>
								<h3 className="text-base text-default-600 capitalize">Nessa semana</h3>
							</Button>
						</div>
					</CardHeader>
					<CardBody>
						<h1 className="text-3xl font-bold">Barba</h1>
					</CardBody>
					<CardFooter className="pt-0">
						<p className="flex whitespace-normal flex-wrap items-center gap-1 text-lg font-normal text-default-600 text-pretty">
							<span className="text-danger font-medium flex items-center gap-1">
								<LucideArrowDownRight size={18} /> 2%
							</span>
							em comparação com o outro serviço
						</p>
					</CardFooter>
				</Card>
			</div>
			<div className="flex  items-center gap-6">
				<EmployeesPerformanceCard />
				<ServicesChartCard />
			</div>
		</div>
	);
}
