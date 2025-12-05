import type { JSX } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from '../components/Icons';

interface FeatureProps {
	icon: JSX.Element;
	title: string;
	description: string;
}

const features: FeatureProps[] = [
	{
		icon: <MedalIcon />,
		title: 'Cadastre-se',
		description: 'Crie sua conta em minutos. Configure seu estabelecimento, profissionais e horários de funcionamento de forma simples e intuitiva.',
	},
	{
		icon: <MapIcon />,
		title: 'Configure sua Agenda',
		description: 'Defina os serviços oferecidos, duração de cada atendimento e disponibilidade de cada profissional. O sistema se adapta ao seu negócio.',
	},
	{
		icon: <PlaneIcon />,
		title: 'Receba Agendamentos',
		description: 'Seus clientes podem agendar online a qualquer momento. Você recebe notificações e pode confirmar ou ajustar os horários.',
	},
	{
		icon: <GiftIcon />,
		title: 'Gerencie e Cresça',
		description: 'Acompanhe relatórios, histórico de clientes e otimize sua operação. Foque no que realmente importa: atender bem seus clientes.',
	},
];

export const HowItWorks = () => {
	return (
		<section id="howItWorks" className="container text-center py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold ">
				Como <span className="bg-linear-to-b from-heroui-success/60 to-heroui-success text-transparent bg-clip-text">Funciona</span>
			</h2>
			<p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
				Em poucos passos, você terá seu sistema de agendamentos funcionando e organizando seu negócio de forma profissional.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{features.map(({ icon, title, description }: FeatureProps) => (
					<Card key={title} className="bg-muted/50">
						<CardHeader>
							<CardTitle className="grid gap-4 place-items-center">
								{icon}
								{title}
							</CardTitle>
						</CardHeader>
						<CardContent>{description}</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};
