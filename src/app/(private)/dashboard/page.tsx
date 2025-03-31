'use client';

import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import NumberFlow from '@number-flow/react';
import { LucideArrowUpRight, LucideCalendarArrowUp, LucideUser, LucideUsers } from 'lucide-react';

export default function Dashboard() {
	return (
		<div className="size-full p-4 flex flex-col gap-6">
			<div className="flex items-center gap-6">
				<Card shadow="sm" className="h-full w-full">
					<CardHeader className="pb-0 justify-between gap-4">
						<h1 className="text-xl font-medium">Total de agendamentos</h1>
						<Button isIconOnly radius="full" size="lg" variant="flat" color="success" className="shrink-0">
							<LucideCalendarArrowUp size={20} />
						</Button>
					</CardHeader>
					<CardBody className="py-0">
						<NumberFlow value={4874} animated className="text-5xl font-bold" />
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
				<Card shadow="sm" className="h-full w-full">
					<CardHeader className="pb-0 justify-between gap-4">
						<h1 className="text-xl font-medium">Total de funcionários</h1>
						<Button isIconOnly radius="full" size="lg" variant="flat" color="primary" className="shrink-0">
							<LucideUsers size={20} />
						</Button>
					</CardHeader>
					<CardBody className="py-0">
						<NumberFlow value={4874} animated className="text-5xl font-bold" />
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
				<Card shadow="sm" className="h-full w-full">
					<CardHeader className="pb-0 justify-between gap-4">
						<h1 className="text-xl font-medium">Funcionários presentes hoje</h1>
						<Button isIconOnly radius="full" size="lg" variant="flat" color="secondary" className="shrink-0">
							<LucideUser size={20} />
						</Button>
					</CardHeader>
					<CardBody className="py-0">
						<NumberFlow value={4874} animated className="text-5xl font-bold" />
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
			</div>
			<div className="flex  items-center gap-6">
				<Card shadow="sm" className="w-full h-full">
					<CardHeader>
						<h1>Performance dos empregados</h1>
					</CardHeader>
					<CardBody>Gráfico aqui</CardBody>
					<CardFooter>
						<LucideArrowUpRight />
						<h1>
							<span>2%</span> em comparação com o mês anterior
						</h1>
					</CardFooter>
				</Card>
				{/* <Card shadow="sm" className="w-full h-full">
					<CardHeader>
						<h1>Total de agendamentos</h1>
					</CardHeader>
					<CardBody>
						<NumberFlow value={4874} animated />
					</CardBody>
					<CardFooter>
						<LucideArrowUpRight />
						<h1>
							<span>2%</span> em comparação com o mês anterior
						</h1>
					</CardFooter>
				</Card> */}
			</div>
		</div>
	);
}
