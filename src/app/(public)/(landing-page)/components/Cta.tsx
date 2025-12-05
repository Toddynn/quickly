import { Button } from '@/components/ui/button';

export const Cta = () => {
	return (
		<section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
			<div className="container lg:grid lg:grid-cols-2 place-items-center">
				<div className="lg:col-start-1">
					<h2 className="text-3xl md:text-4xl font-bold ">
						Pronto para
						<span className="bg-linear-to-b from-heroui-success/60 to-heroui-success text-transparent bg-clip-text"> Digitalizar </span>
						seu Negócio?
					</h2>
					<p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
						Junte-se a milhares de empreendedores que já transformaram a gestão de seus agendamentos. Comece hoje mesmo e veja a diferença no
						seu dia a dia.
					</p>
				</div>

				<div className="space-y-4 lg:col-start-2">
					<Button className="w-full md:mr-4 md:w-auto bg-heroui-success hover:bg-heroui-success-600">Começar Agora</Button>
					<Button variant="outline" className="w-full md:w-auto">
						Ver Funcionalidades
					</Button>
				</div>
			</div>
		</section>
	);
};
