'use client';

import { Button, cn, ScrollShadow } from '@heroui/react';
import { ChevronLeft, ChevronRight, LucidePlus } from 'lucide-react';
import { useState } from 'react';

// Sample data structure as provided
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
	{ hora: '17:00', agendamento: null },
	{ hora: '18:00', agendamento: null },
	{ hora: '19:00', agendamento: null },
	{ hora: '20:00', agendamento: null },
	{ hora: '21:00', agendamento: null },
	{ hora: '22:00', agendamento: null },
	{ hora: '23:00', agendamento: null },
	{ hora: '00:00', agendamento: null },
];

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
const generateWeekAppointments = (weekDates: Date[]) => {
	return weekDates.map((date) => {
		// Clone the horarios array but randomize which slots have appointments
		return {
			date,
			appointments: horarios.map((slot) => {
				// For demo purposes, randomly decide if this slot has an appointment
				// The current day (index 0) will use the exact data provided
				const dayIndex = weekDates.indexOf(date);
				if (dayIndex === 4) {
					// Friday will use the exact data provided
					return { ...slot };
				} else {
					// For other days, randomly assign appointments
					const hasAppointment = Math.random() > 0.7;
					if (hasAppointment && slot.agendamento === null) {
						return {
							...slot,
							agendamento: {
								nome: ['João Silva', 'Maria Oliveira', 'Pedro Santos', 'Ana Souza'][Math.floor(Math.random() * 4)],
								contato: '119' + Math.floor(Math.random() * 90000000 + 10000000),
								servico: {
									nome: ['Cabelo', 'Barba', 'Cabelo + Barba', 'Corte Feminino'][Math.floor(Math.random() * 4)],
									tempo_estimado: '30min',
									url_capa: '',
									valor: Math.floor(Math.random() * 50) + 20,
								},
								status: 'aguardando',
							},
						};
					} else if (!hasAppointment && slot.agendamento !== null) {
						return { ...slot, agendamento: null };
					}
					return { ...slot };
				}
			}),
		};
	});
};

export default function SchedulingCalendar() {
	const [currentWeek, setCurrentWeek] = useState(generateWeekDates());
	const [weekData, setWeekData] = useState(generateWeekAppointments(currentWeek));
	const [currentTime, setCurrentTime] = useState(new Date());

	// Format date to Brazilian style (dd/mm)
	const formatDate = (date: Date) => {
		return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
	};

	// Format day of week in Portuguese
	const formatDayOfWeek = (date: Date) => {
		const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
		return days[date.getDay()];
	};

	// Check if date is today
	const isToday = (date: Date) => {
		const today = new Date();
		return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
	};

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

	// Get current time indicator position
	const getCurrentTimePosition = () => {
		const now = new Date();
		const hours = now.getHours();
		const minutes = now.getMinutes();

		// Calculate position as percentage of day (24 hours)
		return (hours + minutes / 60) * (100 / 24);
	};

	// Get random pastel color for appointment cards
	const getAppointmentColor = (serviceName: string) => {
		const colors: Record<string, string> = {
			Cabelo: 'bg-orange-50 border-orange-200',
			Barba: 'bg-blue-50 border-blue-200',
			'Cabelo + Barba': 'bg-green-50 border-green-200',
			'Corte Feminino': 'bg-purple-50 border-purple-200',
		};

		return colors[serviceName] || 'bg-gray-50 border-gray-200';
	};

	return (
		<div className="w-full">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Agenda de serviços</h1>
				<div className="flex items-center gap-4">
					<Button variant="flat" isIconOnly radius="full" onPress={previousWeek}>
						<ChevronLeft size={18} />
					</Button>
					<span className="text-xl font-medium ">
						{formatDate(currentWeek[0])} - {formatDate(currentWeek[6])}
					</span>
					<Button variant="flat" isIconOnly radius="full" onPress={nextWeek}>
						<ChevronRight size={18} />
					</Button>
				</div>
			</div>

			<ScrollShadow orientation="horizontal">
				<div className="overflow-x-auto min-w-[1050px]">
					{/* Calendar Header */}
					<div className="grid grid-cols-8 border-b">
						<div className="p-2 font-medium text-gray-500 text-center">GMT -03</div>
						{currentWeek.map((date, index) => (
							<div key={index} className={cn('p-2 text-center font-medium', isToday(date) ? 'bg-emerald-100' : '')}>
								<div>{formatDayOfWeek(date)}</div>
								<div>{date.getDate()}</div>
							</div>
						))}
					</div>

					{/* Calendar Body */}
					<div className="relative">
						{/* Time slots */}
						{horarios.map((slot, slotIndex) => (
							<div key={slotIndex} className="grid grid-cols-8 border-b">
								<div className="p-2 text-right text-sm text-gray-500 relative">
									<span className="">{slot.hora}</span>
								</div>

								{weekData.map((day, dayIndex) => {
									const appointment = day.appointments[slotIndex];

									return (
										<div
											key={`${dayIndex}-${slotIndex}`}
											className={cn('border-r p-1 min-h-[100px] relative', isToday(day.date) ? 'bg-emerald-50' : '')}
										>
											{appointment.agendamento && (
												<div
													className={cn(
														'p-2 rounded-md border text-sm h-full',
														getAppointmentColor(appointment.agendamento.servico.nome)
													)}
												>
													<div className="font-medium">{appointment.agendamento.servico.nome}</div>
													<div className="text-xs text-gray-600">
														{appointment.hora} - {appointment.agendamento.servico.tempo_estimado}
													</div>
													<div className="mt-1">{appointment.agendamento.nome}</div>
													<div className="text-xs text-gray-600">R$ {appointment.agendamento.servico.valor},00</div>
												</div>
											)}
										</div>
									);
								})}
							</div>
						))}

						{/* Current time indicator */}
						{currentWeek.some((date) => isToday(date)) && (
							<div
								className="absolute left-0 right-0 border-t-2 border-emerald-500 z-10 pointer-events-none"
								style={{ top: `${getCurrentTimePosition()}%` }}
							>
								<div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">
									<span className="sr-only">Hora atual</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</ScrollShadow>

			<Button isIconOnly size="lg" variant="shadow" color="success" radius="full" className="fixed bottom-6 right-6 ">
				<LucidePlus size={18} />
			</Button>
		</div>
	);
}
