'use client';

import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Pagination } from '@heroui/react';
import NumberFlow from '@number-flow/react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { LucideCalendar, LucideChevronsUp } from 'lucide-react';
import { Fragment } from 'react';

const horarios = [
	{ hora: '09:00', agendamento: null },
	{
		hora: '10:00',
		agendamento: {
			nome: 'Rafael Costa',
			contato: '11933334444',
			servico: { nome: 'Cabelo + Barba', tempo_estimado: '30min', url_capa: '', valor: 35 },
			status: 'aguardando',
		},
	},
	{ hora: '11:00', agendamento: null },
	{
		hora: '12:00',
		agendamento: {
			nome: 'Rafael Costa',
			contato: '11933334444',
			servico: { nome: 'Cabelo + Barba', tempo_estimado: '30min', url_capa: '', valor: 35 },
			status: 'aguardando',
		},
	},
	{ hora: '13:00', agendamento: null },
	{ hora: '14:00', agendamento: null },
	{
		hora: '15:00',
		agendamento: {
			nome: 'Juliana Martins',
			contato: '11955556666',
			servico: { nome: 'Cabelo', tempo_estimado: '30min', url_capa: '', valor: 35 },
			status: 'aguardando',
		},
	},
	{ hora: '16:00', agendamento: null },
];
export default function Schedules() {
	return (
		<div className="size-full flex gap-6 p-4">
			<div className="flex size-full flex-col gap-4">
				<h1 className="text-xl font-medium">Meus agendamentos</h1>
				<Card shadow="sm" className="">
					<CardHeader className="justify-between">
						<h1 className="text-xl">{format(new Date(), `'Dia' dd, MMMM 'de' yyyy`, { locale: ptBR })}</h1>
						<Button variant="flat" color="default">
							Selecionar data <LucideCalendar size={20} />
						</Button>
					</CardHeader>
					<Divider />
					<CardBody className="gap-4">
						{horarios.map(({ agendamento, hora }, idx) => {
							return (
								<Fragment key={idx}>
									{!agendamento ? (
										<Card shadow="sm" className="flex flex-col gap-1.5">
											<CardHeader className="text-lg justify-between gap-2 items-center ">
												<h1 className="text-lg font-medium">{hora}</h1>
												<Button variant="light" color="primary" className="underline">
													Convidar
												</Button>
											</CardHeader>
										</Card>
									) : (
										<Card shadow="sm" className="flex flex-col gap-1.5">
											<CardHeader className="justify-between sm:flex-row flex-col">
												<div className="w-full gap-4 flex-wrap flex italic text-lg">
													<Chip className="justify-end shrink-0" variant="shadow" radius="sm">
														{hora}
													</Chip>
													<h1 className="font-semibold text-ellipsis line-clamp-2">{agendamento.nome}</h1>
												</div>
												<Chip className="justify-end border-1 shrink-0" variant="dot" radius="sm">
													{agendamento.servico.tempo_estimado}
												</Chip>
											</CardHeader>
											<Divider />
											<CardBody className="flex flex-col gap-2">
												<p className="text-xl font-light">
													<span className="font-medium">Serviço: </span>
													{agendamento.servico.nome}
												</p>
												<Chip
													className=" items-center"
													variant="flat"
													color="success"
													radius="sm"
													endContent={<LucideChevronsUp size={14} />}
												>
													<NumberFlow
														value={agendamento.servico.valor}
														locales="pt-BR"
														format={{ style: 'currency', currency: 'BRL' }}
													/>
												</Chip>
											</CardBody>
										</Card>
									)}
								</Fragment>
							);
						})}
					</CardBody>
					<Divider />
					<CardFooter className="justify-center">
						<Pagination total={10} showControls />
					</CardFooter>
				</Card>
			</div>
			<div className="size-full"></div>
		</div>
	);
}
