import { Check } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LightBulbIcon } from './Icons';

export const HeroCards = () => {
	return (
		<div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
			{/* Testimonial */}
			<Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader className="flex flex-row items-center gap-4 pb-2">
					<Avatar>
						<AvatarImage alt="" src="https://i.pravatar.cc/150?img=12" />
						<AvatarFallback>MC</AvatarFallback>
					</Avatar>

					<div className="flex flex-col">
						<CardTitle className="text-lg">Maria Silva</CardTitle>
						<CardDescription>Salão de Beleza</CardDescription>
					</div>
				</CardHeader>

				<CardContent>
					O Quickly transformou a organização do meu salão! Agora meus clientes agendam online e eu tenho controle total da agenda.
				</CardContent>
			</Card>

			{/* Stats */}
			<Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader className="mt-8 flex justify-center items-center pb-2">
					<CardTitle className="text-center">+10.000</CardTitle>
					<CardDescription className="font-normal text-heroui-success">Agendamentos por mês</CardDescription>
				</CardHeader>

				<CardContent className="text-center pb-2">
					<p>Milhares de empreendedores já confiam no Quickly para gerenciar seus agendamentos</p>
				</CardContent>

				<CardFooter>
					<div className="flex gap-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-heroui-success">98%</div>
							<div className="text-sm text-muted-foreground">Satisfação</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-heroui-success">24/7</div>
							<div className="text-sm text-muted-foreground">Disponível</div>
						</div>
					</div>
				</CardFooter>
			</Card>

			{/* Pricing */}
			<Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader>
					<CardTitle className="flex item-center justify-between">
						Profissional
						<Badge variant="secondary" className="text-sm text-heroui-success">
							Mais popular
						</Badge>
					</CardTitle>
					<div>
						<span className="text-3xl font-bold">R$ 49</span>
						<span className="text-muted-foreground"> /mês</span>
					</div>

					<CardDescription>Plano ideal para estabelecimentos em crescimento.</CardDescription>
				</CardHeader>

				<CardContent>
					<Button className="w-full bg-heroui-success hover:bg-heroui-success-600">Teste Grátis</Button>
				</CardContent>

				<hr className="w-4/5 m-auto mb-4" />

				<CardFooter className="flex">
					<div className="space-y-4">
						{['Até 5 profissionais', 'Agendamentos ilimitados', 'Lembretes automáticos'].map((benefit: string) => (
							<span key={benefit} className="flex">
								<Check className="text-heroui-success" /> <h3 className="ml-2">{benefit}</h3>
							</span>
						))}
					</div>
				</CardFooter>
			</Card>

			{/* Service */}
			<Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
				<CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
					<div className="mt-1 bg-heroui-success/20 p-1 rounded-2xl">
						<LightBulbIcon />
					</div>
					<div>
						<CardTitle>Agendamento Inteligente</CardTitle>
						<CardDescription className="text-md mt-2">
							Sistema que evita conflitos de horário e permite que seus clientes agendem facilmente pelo celular ou computador.
						</CardDescription>
					</div>
				</CardHeader>
			</Card>
		</div>
	);
};
