'use client';

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

const chartData = [
	{ month: 'Janeiro', desktop: 186, mobile: 80 },
	{ month: 'Fevereiro', desktop: 305, mobile: 200 },
	{ month: 'Março', desktop: 237, mobile: 120 },
	{ month: 'Abril', desktop: 73, mobile: 190 },
	{ month: 'Maio', desktop: 209, mobile: 130 },
	{ month: 'Junho', desktop: 214, mobile: 140 },
	{ month: 'Julho', desktop: 214, mobile: 140 },
	{ month: 'Agosto', desktop: 214, mobile: 140 },
	{ month: 'Setembro', desktop: 214, mobile: 140 },
	{ month: 'Outubro', desktop: 214, mobile: 140 },
	{ month: 'Novembro', desktop: 214, mobile: 140 },
	{ month: 'Dezembro', desktop: 214, mobile: 140 },
];
const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'hsl(var(--chart-1))',
	},
	mobile: {
		label: 'Mobile',
		color: 'hsl(var(--chart-2))',
	},
} satisfies ChartConfig;

export default function ServicesChart() {
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
				<Area dataKey="mobile" type="bump" fill="var(--color-mobile)" fillOpacity={0.6} stroke="var(--color-mobile)" stackId="a" />
				<Area dataKey="desktop" type="bump" fill="var(--color-desktop)" fillOpacity={0.6} stroke="var(--color-desktop)" stackId="a" />
			</AreaChart>
		</ChartContainer>
	);
}
