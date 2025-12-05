import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

enum PopularPlanType {
	NO = 0,
	YES = 1,
}

interface PricingProps {
	title: string;
	popular: PopularPlanType;
	price: number;
	description: string;
	buttonText: string;
	benefitList: string[];
}

const pricingList: PricingProps[] = [
	{
		title: 'Básico',
		popular: 0,
		price: 0,
		description: 'Perfeito para começar. Ideal para pequenos estabelecimentos que estão iniciando.',
		buttonText: 'Começar Grátis',
		benefitList: ['1 profissional', 'Até 50 agendamentos/mês', 'Lembretes básicos', 'Suporte por email', 'Relatórios básicos'],
	},
	{
		title: 'Profissional',
		popular: 1,
		price: 49,
		description: 'Para quem quer crescer. Ideal para estabelecimentos em expansão.',
		buttonText: 'Teste Grátis',
		benefitList: ['Até 5 profissionais', 'Agendamentos ilimitados', 'Lembretes automáticos', 'Suporte prioritário', 'Relatórios completos'],
	},
	{
		title: 'Empresarial',
		popular: 0,
		price: 149,
		description: 'Solução completa para grandes operações com múltiplos profissionais.',
		buttonText: 'Falar com Vendas',
		benefitList: ['Profissionais ilimitados', 'Agendamentos ilimitados', 'API personalizada', 'Suporte dedicado', 'Relatórios avançados'],
	},
];

export const Pricing = () => {
	return (
		<section id="pricing" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold text-center">
				Planos
				<span className="bg-linear-to-b from-heroui-success/60 to-heroui-success text-transparent bg-clip-text"> Acessíveis </span>
				para Você
			</h2>
			<h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
				Escolha o plano ideal para o tamanho do seu negócio. Sem surpresas, sem complicações.
			</h3>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{pricingList.map((pricing: PricingProps) => (
					<Card
						key={pricing.title}
						className={pricing.popular === PopularPlanType.YES ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10' : ''}
					>
						<CardHeader>
							<CardTitle className="flex item-center justify-between">
								{pricing.title}
								{pricing.popular === PopularPlanType.YES ? (
									<Badge variant="secondary" className="text-sm text-primary">
										Most popular
									</Badge>
								) : null}
							</CardTitle>
							<div>
								<span className="text-3xl font-bold">R$ {pricing.price}</span>
								<span className="text-muted-foreground"> /mês</span>
							</div>

							<CardDescription>{pricing.description}</CardDescription>
						</CardHeader>

						<CardContent>
							<Button
								className={`w-full ${pricing.popular === PopularPlanType.YES ? 'bg-heroui-success hover:bg-heroui-success-600' : ''}`}
							>
								{pricing.buttonText}
							</Button>
						</CardContent>

						<hr className="w-4/5 m-auto mb-4" />

						<CardFooter className="flex">
							<div className="space-y-4">
								{pricing.benefitList.map((benefit: string) => (
									<span key={benefit} className="flex">
										<Check className="text-green-500" /> <h3 className="ml-2">{benefit}</h3>
									</span>
								))}
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
