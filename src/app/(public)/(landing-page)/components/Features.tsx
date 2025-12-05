import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureProps {
	title: string;
	description: string;
	image: string;
}

const features: FeatureProps[] = [
	{
		title: 'Agendamento Inteligente',
		description: 'Sistema que evita conflitos de horário e permite que seus clientes agendem facilmente pelo celular ou computador.',
		image: '/assets/images/looking-ahead.png',
	},
	{
		title: 'Controle de Disponibilidade',
		description: 'Gerencie a disponibilidade de cada profissional, defina horários de funcionamento e bloqueie períodos específicos.',
		image: '/assets/images/reflecting.png',
	},
	{
		title: 'Relatórios Gerenciais',
		description: 'Acompanhe o desempenho do seu negócio com relatórios detalhados sobre agendamentos, receita e clientes.',
		image: '/assets/images/growth.png',
	},
];

const featureList: string[] = [
	'Agendamento online',
	'Lembretes automáticos',
	'Histórico de clientes',
	'Multi-profissionais',
	'Relatórios em tempo real',
	'Interface intuitiva',
	'Acesso mobile',
	'Suporte dedicado',
	'Seguro e confiável',
];

export const Features = () => {
	return (
		<section id="features" className="container py-24 sm:py-32 space-y-8">
			<h2 className="text-3xl lg:text-4xl font-bold md:text-center">
				Funcionalidades <span className="bg-linear-to-b from-heroui-success/60 to-heroui-success text-transparent bg-clip-text">Completas</span>
			</h2>

			<div className="flex flex-wrap md:justify-center gap-4">
				{featureList.map((feature: string) => (
					<div key={feature}>
						<Badge variant="secondary" className="text-sm">
							{feature}
						</Badge>
					</div>
				))}
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{features.map(({ title, description, image }: FeatureProps) => (
					<Card key={title}>
						<CardHeader>
							<CardTitle>{title}</CardTitle>
						</CardHeader>

						<CardContent>{description}</CardContent>

						<CardFooter>
							<div className="w-[200px] lg:w-[300px] relative">
								<Image src={image} alt="About feature" fill sizes="100vw" className=" mx-auto" />
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
