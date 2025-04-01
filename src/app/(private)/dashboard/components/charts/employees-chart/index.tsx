'use client';

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const chartData = [
	{ month: 'Janeiro', rodriguinho: 186, arthurzinho: 80 },
	{ month: 'Fevereiro', rodriguinho: 305, arthurzinho: 200 },
	{ month: 'Março', rodriguinho: 237, arthurzinho: 120 },
	{ month: 'Abril', rodriguinho: 73, arthurzinho: 190 },
	{ month: 'Maio', rodriguinho: 209, arthurzinho: 130 },
	{ month: 'Junho', rodriguinho: 214, arthurzinho: 140 },
	{ month: 'Julho', rodriguinho: 214, arthurzinho: 140 },
	{ month: 'Agosto', rodriguinho: 214, arthurzinho: 140 },
	{ month: 'Setembro', rodriguinho: 214, arthurzinho: 140 },
	{ month: 'Outubro', rodriguinho: 214, arthurzinho: 140 },
	{ month: 'Novembro', rodriguinho: 214, arthurzinho: 140 },
	{ month: 'Dezembro', rodriguinho: 214, arthurzinho: 140 },
];

const chartConfig = {
	rodriguinho: {
		label: 'Rodriguinho',
		color: 'hsl(var(--chart-1))',
	},
	arthurzinho: {
		label: 'Arthurzinho',
		color: 'hsl(var(--chart-2))',
	},
} satisfies ChartConfig;

export default function EmployeesChart() {
	return (
		<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
			<BarChart accessibilityLayer data={chartData}>
				<CartesianGrid vertical={false} />
				<XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
				<ChartTooltip content={<ChartTooltipContent />} />
				<ChartLegend content={<ChartLegendContent />} />
				<Bar dataKey="rodriguinho" fill="var(--color-rodriguinho)" radius={4} />
				<Bar dataKey="arthurzinho" fill="var(--color-arthurzinho)" radius={4} />
			</BarChart>
		</ChartContainer>
	);
}
