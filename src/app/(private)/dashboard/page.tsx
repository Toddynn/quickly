'use client';

import EmployeesPerformanceCard from './components/cards/employees-performance-card';
import LeastChosenServiceCard from './components/cards/least-chosen-service-card';
import MostChosenServiceCard from './components/cards/most-chosen-service-card';
import ServicesChartCard from './components/cards/services-chart-card';
import TodaySchedulingCard from './components/cards/today-schedulings-card';
import TotalSchedulingsCard from './components/cards/total-schedulings-card';

export default function Dashboard() {
	return (
		<div className="size-full p-6 flex flex-col gap-6">
			<div className="flex h-52 items-start gap-6">
				<TodaySchedulingCard />

				<TotalSchedulingsCard />

				<MostChosenServiceCard />
				<LeastChosenServiceCard />
			</div>
			<div className="flex  items-center gap-6">
				<EmployeesPerformanceCard />
				<ServicesChartCard />
			</div>
		</div>
	);
}
