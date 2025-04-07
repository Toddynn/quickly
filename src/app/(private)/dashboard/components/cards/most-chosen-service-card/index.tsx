'use client';

import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import { LucideArrowUpRight, LucideChevronsUpDown, LucideThumbsUp } from 'lucide-react';

export default function MostChosenServiceCard() {
	return (
		<Card shadow="sm" className="w-full h-full">
			<CardHeader className="flex-col gap-2 items-start">
				<div className="flex items-center justify-between gap-2 w-full">
					<h1 className="text-xl font-medium">
						Serviço <span className="text-success">mais</span> escolhido
					</h1>
					<Button isIconOnly radius="full" size="lg" variant="flat" color="success" className="shrink-0">
						<LucideThumbsUp size={20} />
					</Button>
				</div>
				<div className="flex items-center gap-2">
					<Button endContent={<LucideChevronsUpDown size={14} />} size="sm" radius="sm" variant="bordered" className="border-1 text-default-600">
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
	);
}
