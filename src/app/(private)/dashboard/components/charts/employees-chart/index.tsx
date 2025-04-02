'use client';

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

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
			<AreaChart
				accessibilityLayer
				data={chartData}
				margin={{
					left: 12,
					right: 12,
				}}
			>
				<CartesianGrid vertical={false} />
				<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
				<ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
				<ChartLegend content={<ChartLegendContent />} />
				<Area dataKey="rodriguinho" type="bump" fill="var(--color-rodriguinho)" fillOpacity={0.6} stroke="var(--color-rodriguinho)" stackId="a" />
				<Area dataKey="arthurzinho" type="bump" fill="var(--color-arthurzinho)" fillOpacity={0.6} stroke="var(--color-arthurzinho)" stackId="a" />
			</AreaChart>
		</ChartContainer>
	);
}
