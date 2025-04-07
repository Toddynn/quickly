import EmployeesPerformanceCard from './components/cards/employees-performance-card';
import LeastChosenServiceCard from './components/cards/least-chosen-service-card';
import MostChosenServiceCard from './components/cards/most-chosen-service-card';
import ServicesChartCard from './components/cards/services-chart-card';
import TodaySchedulingCard from './components/cards/today-schedulings-card';
import TotalSchedulingsCard from './components/cards/total-schedulings-card';

export default function Dashboard() {
	return (
		<main className="size-full p-6 flex flex-col gap-6">
			<section className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:h-60 items-start gap-6">
				<TodaySchedulingCard />
				<TotalSchedulingsCard />

				<MostChosenServiceCard />
				<LeastChosenServiceCard />
			</section>
			<section className="flex min-[1024px]:flex-row flex-col items-center gap-6">
				<EmployeesPerformanceCard />
				<ServicesChartCard />
			</section>
		</main>
	);
}
