import Image from 'next/image';
import type { JSX } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartIcon, MagnifierIcon, WalletIcon } from './Icons';

interface ServiceProps {
	title: string;
	description: string;
	icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
	{
		title: 'Gestão de Profissionais',
		description:
			'Cadastre múltiplos profissionais, defina especialidades e gerencie a agenda de cada um individualmente. Controle total sobre sua equipe.',
		icon: <ChartIcon />,
	},
	{
		title: 'Histórico de Clientes',
		description: 'Mantenha um histórico completo de cada cliente, incluindo agendamentos anteriores, preferências e informações de contato.',
		icon: <WalletIcon />,
	},
	{
		title: 'Lembretes Automáticos',
		description: 'Envie lembretes automáticos por WhatsApp ou SMS para seus clientes, reduzindo faltas e melhorando a experiência.',
		icon: <MagnifierIcon />,
	},
];

export const Services = () => {
	return (
		<section className="container py-24 sm:py-32">
			<div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
				<div>
					<h2 className="text-3xl md:text-4xl font-bold">
						<span className="bg-linear-to-b from-heroui-success/60 to-heroui-success text-transparent bg-clip-text">Serviços </span>
						Completos
					</h2>

					<p className="text-muted-foreground text-xl mt-4 mb-8 ">
						Tudo que você precisa para gerenciar seu negócio de forma profissional e eficiente.
					</p>

					<div className="flex flex-col gap-8">
						{serviceList.map(({ icon, title, description }: ServiceProps) => (
							<Card key={title}>
								<CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
									<div className="mt-1 bg-primary/20 p-1 rounded-2xl">{icon}</div>
									<div>
										<CardTitle>{title}</CardTitle>
										<CardDescription className="text-md mt-2">{description}</CardDescription>
									</div>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>

				<div className="w-[300px] md:w-[500px] lg:w-[600px] relative">
					<Image src={'/assets/images/cubeLeg.png'} fill sizes="100vw" className="object-contain" alt="About services" />
				</div>
			</div>
		</section>
	);
};
