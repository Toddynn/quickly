import Image from 'next/image';
import { Statistics } from './Statistics';

export const About = () => {
	return (
		<section id="about" className="container py-24 sm:py-32">
			<div className="bg-muted/50 border rounded-lg py-12">
				<div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
					<div className=" relative w-300px">
						<Image src={'/assets/images/pilot.png'} alt="pilot" fill sizes="100vw" className=" object-contain rounded-lg" />
					</div>
					<div className="bg-green-0 flex flex-col justify-between">
						<div className="pb-6">
							<h2 className="text-3xl md:text-4xl font-bold">
								<span className="bg-linear-to-b from-heroui-success/60 to-heroui-success text-transparent bg-clip-text">Sobre o </span>
								Quickly
							</h2>
							<p className="text-xl text-muted-foreground mt-4">
								O Quickly é um sistema online de gestão de agendamentos criado especialmente para pequenos e médios prestadores de
								serviços. Nossa missão é tornar a tecnologia acessível e útil para quem precisa de soluções simples, mas eficazes, no
								dia a dia da prestação de serviços.
							</p>
							<p className="text-xl text-muted-foreground mt-4">
								Democratizamos o acesso a um sistema de gestão eficiente, contribuindo diretamente para o fortalecimento do
								empreendedorismo e a profissionalização do setor.
							</p>
						</div>

						<Statistics />
					</div>
				</div>
			</div>
		</section>
	);
};
