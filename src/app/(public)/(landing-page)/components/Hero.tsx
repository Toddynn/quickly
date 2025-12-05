import { Button } from '@/components/ui/button';
import { TypographyH1, TypographyH2 } from '@/components/ui/typography';
import { HeroCards } from './HeroCards';

export const Hero = () => {
	return (
		<section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
			<div className="text-center lg:text-start space-y-6">
				<main className="font-bold">
					<TypographyH1 className="inline text-5xl md:text-6xl">
						Gestão de{' '}
						<span className="inline bg-linear-to-r from-heroui-success-400 to-heroui-success-600 text-transparent bg-clip-text">
							Agendamentos
						</span>
					</TypographyH1>{' '}
					<TypographyH2 className="inline text-3xl md:text-4xl border-none">
						<span>para </span>
					</TypographyH2>
					<TypographyH2 className="inline text-3xl md:text-4xl border-none bg-linear-to-r from-heroui-success-500 to-heroui-success-700 text-transparent bg-clip-text">
						Pequenos Empreendedores
					</TypographyH2>
				</main>

				<p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
					Digitalize e simplifique a gestão de agendamentos do seu negócio. Organize atendimentos, gerencie profissionais e aumente sua
					produtividade — tudo em um único ambiente digital.
				</p>

				<div className="space-y-4 md:space-y-0 md:space-x-4">
					<Button className="w-full md:w-1/3 bg-heroui-success hover:bg-heroui-success-600">Começar Agora</Button>
				</div>
			</div>

			{/* Hero cards sections */}
			<div className="z-10">
				<HeroCards />
			</div>

			{/* Shadow effect */}
			<div className="shadow"></div>
		</section>
	);
};
