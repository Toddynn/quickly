'use client';

import { Button, cn, ScrollShadow } from '@heroui/react';
import { addMinutes, differenceInMinutes, endOfWeek, format, isSameDay, isWithinInterval, startOfWeek } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, LucidePen, LucidePlus } from 'lucide-react';
import { parseAsBoolean, useQueryState } from 'nuqs';
import { useState } from 'react';
import { toast } from 'sonner';

export const generateHorarios = () => {
	const base = new Date();
	base.setHours(0, 0, 0, 0);

	const slots = [];

	for (let i = 0; i < 24 * 2; i++) {
		const slotTime = new Date(base);
		slotTime.setMinutes(i * 30);

		slots.push({
			hora: slotTime,
			agendamento: null,
		});
	}

	return slots;
};

// Sample data structure as provided
const horarios = generateHorarios();

// Generate a week of dates starting from today
const generateWeekDates = () => {
	const today = new Date();
	const weekDates = [];

	for (let i = 0; i < 7; i++) {
		const date = new Date(today);
		date.setDate(today.getDate() + i);
		weekDates.push(date);
	}

	return weekDates;
};

// Generate appointments for the week (for demo purposes)
export const generateWeekAppointments = (weekDates: Date[]) => {
	return weekDates.map((date) => {
		const baseHorarios = generateHorarios();

		return {
			date,
			appointments: baseHorarios.map((slot) => {
				const hora = new Date(date);
				hora.setHours(slot.hora.getHours(), slot.hora.getMinutes(), 0, 0);

				const dayIndex = weekDates.indexOf(date);
				let agendamento = null;

				if (dayIndex === 4) {
					const horaString = format(hora, 'HH:mm');
					if (horaString === '10:00' || horaString === '15:30') {
						agendamento = {
							nome: 'Cliente Fixo',
							contato: '11999999999',
							servico: {
								nome: 'Cabelo + Barba',
								tempo_estimado: '30min',
								url_capa: '',
								valor: 40,
							},
							status: 'aguardando',
						};
					}
				} else {
					const hasAppointment = Math.random() > 0.85;
					if (hasAppointment) {
						agendamento = {
							nome: ['João', 'Maria', 'Ana'][Math.floor(Math.random() * 3)],
							contato: '119' + Math.floor(Math.random() * 90000000 + 10000000),
							servico: {
								nome: ['Cabelo', 'Barba', 'Corte Feminino'][Math.floor(Math.random() * 3)],
								tempo_estimado: '30min',
								url_capa: '',
								valor: Math.floor(Math.random() * 30 + 20),
							},
							status: 'aguardando',
						};
					}
				}

				return {
					hora,
					agendamento,
				};
			}),
		};
	});
};

export default function SchedulingCalendar() {
	const [show_done_schedules, set_show_done_schedules] = useQueryState('', parseAsBoolean.withOptions({ shallow: false }).withDefault(false));
	const [currentWeek, setCurrentWeek] = useState(generateWeekDates());
	const [weekData, setWeekData] = useState(generateWeekAppointments(currentWeek));

	const currentWeekStart = startOfWeek(currentWeek[0], { weekStartsOn: 1 });
	const currentWeekEnd = endOfWeek(currentWeek[6], { weekStartsOn: 1 });

	const isViewingCurrentWeek = isWithinInterval(new Date(), {
		start: currentWeekStart,
		end: currentWeekEnd,
	});

	// Navigate to previous week
	const previousWeek = () => {
		const newWeek = currentWeek.map((date) => {
			const newDate = new Date(date);
			newDate.setDate(date.getDate() - 7);
			return newDate;
		});
		setCurrentWeek(newWeek);
		setWeekData(generateWeekAppointments(newWeek));
	};

	// Navigate to next week
	const nextWeek = () => {
		const newWeek = currentWeek.map((date) => {
			const newDate = new Date(date);
			newDate.setDate(date.getDate() + 7);
			return newDate;
		});
		setCurrentWeek(newWeek);
		setWeekData(generateWeekAppointments(newWeek));
	};

	// Get random pastel color for appointment cards
	const getAppointmentColor = (serviceName?: string) => {
		const colors: Record<string, string> = {
			Cabelo: 'bg-orange-50 border-orange-200',
			Barba: 'bg-blue-50 border-blue-200',
			'Cabelo + Barba': 'bg-green-50 border-green-200',
			'Corte Feminino': 'bg-purple-50 border-purple-200',
		};

		return serviceName ? colors[serviceName] || 'bg-gray-50 border-gray-200' : 'bg-gray-50 border-gray-200';
	};

	const toggleVisibility = () => {
		set_show_done_schedules((old) => !old);
	};

	return (
		<div className="w-full ">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Agenda de serviços</h1>
				<div className="flex items-center gap-4">
					<Button variant="flat" radius="full" onPress={toggleVisibility}>
						{show_done_schedules ? 'Ocultar concluídos' : 'Mostrar concluídos'}
					</Button>
					<Button variant="flat" isIconOnly radius="full" onPress={previousWeek}>
						<ChevronLeft size={18} />
					</Button>
					<span className="text-xl font-medium ">
						{format(currentWeek[0], 'dd/MM/yy')} - {format(currentWeek[6], 'dd/MM/yy')}
					</span>
					<Button variant="flat" isIconOnly radius="full" onPress={nextWeek}>
						<ChevronRight size={18} />
					</Button>
				</div>
			</div>

			<ScrollShadow orientation="horizontal">
				<div className="relative overflow-x-auto min-w-[1050px]">
					{/* Calendar Header */}
					<div className="grid grid-cols-8 border-b">
						<div></div>
						{currentWeek.map((date, index) => {
							return (
								<div key={index} className={cn('p-2 text-center font-medium', isSameDay(new Date(), date) && 'bg-default-100')}>
									<div>{format(date, 'eee', { locale: ptBR })}</div>
									<div>{date.getDate()}</div>
								</div>
							);
						})}
					</div>

					{/* Calendar Body */}
					<div className="relative">
						{/* Time slots */}
						{horarios.map((slot, slotIndex) => (
							<div
								key={slotIndex}
								data-should-hide={differenceInMinutes(new Date(), slot.hora) >= 60 && !show_done_schedules}
								className="relative grid grid-cols-8 border-b data-[should-hide=true]:hidden"
							>
								<div className="p-2 sticky text-right text-sm text-default-500 left-0">
									<span>{format(slot.hora, 'HH:mm')}</span>
								</div>

								{isViewingCurrentWeek &&
									isSameDay(new Date(), slot.hora) &&
									isWithinInterval(new Date(), {
										start: slot.hora,
										end: addMinutes(slot.hora, 30),
									}) && (
										<div
											className="absolute left-2 right-2 border-t-2 border-success-500 z-10 pointer-events-none"
											style={{ top: '50%' }}
										>
											<div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-success-500" />
										</div>
									)}

								{weekData.map((day, dayIndex) => {
									const appointment = day.appointments[slotIndex];

									return (
										<div
											key={`${dayIndex}-${slotIndex}`}
											className={cn(
												isSameDay(new Date(), day.date) && 'bg-default-50',
												'border-r p-1 min-h-[100px] relative flex items-center group justify-center'
											)}
										>
											{appointment.agendamento ? (
												<div
													className={cn(
														getAppointmentColor(appointment.agendamento.servico.nome),
														'p-2 rounded-md border text-sm size-full group relative'
													)}
												>
													<div className="font-medium">{appointment.agendamento.servico.nome}</div>
													<div className="text-xs text-default-600">
														{format(appointment.hora, 'HH:mm')} - {appointment.agendamento.servico.tempo_estimado}
													</div>
													<div className="mt-1">{appointment.agendamento.nome}</div>
													<div className="text-xs text-default-600">R$ {appointment.agendamento.servico.valor},00</div>
													{isViewingCurrentWeek &&
														(isSameDay(new Date(), day.date)
															? differenceInMinutes(new Date(), slot.hora) <= 30
															: true) && (
															<Button
																variant="flat"
																color="primary"
																className=" mt-2 sm:hidden group-hover:flex"
																size="sm"
															>
																editar <LucidePen size={16} />
															</Button>
														)}
												</div>
											) : (
												isViewingCurrentWeek &&
												(isSameDay(new Date(), day.date) ? differenceInMinutes(new Date(), slot.hora) <= 30 : true) && (
													<Button
														size="sm"
														variant="flat"
														className="group-hover:flex hidden"
														onPress={() => {
															navigator.clipboard.writeText(
																'link de agendamento com horario predefinido deve abrir modal pra escolher serviço'
															);
															toast.info('veja o clipboard');
														}}
													>
														Convidar
													</Button>
												)
											)}
										</div>
									);
								})}
							</div>
						))}
					</div>
				</div>
			</ScrollShadow>

			<Button isIconOnly size="lg" variant="shadow" color="success" radius="full" className="fixed z-50 bottom-6 right-6 size-16">
				<LucidePlus size={28} />
			</Button>
		</div>
	);
}
