import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface TestimonialProps {
	image: string;
	name: string;
	userName: string;
	comment: string;
}

const testimonials: TestimonialProps[] = [
	{
		image: 'https://i.pravatar.cc/150?img=12',
		name: 'Maria Silva',
		userName: 'Salão de Beleza',
		comment: 'O Quickly transformou completamente a organização do meu salão! Agora meus clientes agendam online e eu tenho controle total da agenda. Recomendo muito!',
	},
	{
		image: 'https://i.pravatar.cc/150?img=33',
		name: 'João Santos',
		userName: 'Barbearia',
		comment: 'Sistema muito fácil de usar! Em poucos dias já estava tudo configurado. Os lembretes automáticos reduziram muito as faltas. Excelente investimento!',
	},
	{
		image: 'https://i.pravatar.cc/150?img=47',
		name: 'Ana Costa',
		userName: 'Clínica de Estética',
		comment: 'Finalmente encontrei um sistema que atende às necessidades do meu negócio. Os relatórios me ajudam muito a entender o desempenho e tomar decisões.',
	},
	{
		image: 'https://i.pravatar.cc/150?img=51',
		name: 'Carlos Oliveira',
		userName: 'Oficina Mecânica',
		comment: 'A interface é intuitiva e o suporte é excelente. Meus clientes adoram poder agendar pelo celular. Definitivamente vale a pena!',
	},
	{
		image: 'https://i.pravatar.cc/150?img=20',
		name: 'Patrícia Lima',
		userName: 'Consultório Odontológico',
		comment: 'O histórico de clientes é uma mão na roda! Consigo ver todo o atendimento anterior e oferecer um serviço mais personalizado.',
	},
	{
		image: 'https://i.pravatar.cc/150?img=45',
		name: 'Roberto Alves',
		userName: 'Academia',
		comment: 'Gerencio múltiplos profissionais com facilidade. O sistema evita conflitos de horário e tudo funciona perfeitamente. Muito satisfeito!',
	},
];

export const Testimonials = () => {
	return (
		<section id="testimonials" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold">
				O que nossos
				<span className="bg-linear-to-b from-heroui-success/60 to-heroui-success text-transparent bg-clip-text"> clientes dizem</span>
			</h2>

			<p className="text-xl text-muted-foreground pt-4 pb-8">
				Milhares de empreendedores já transformaram a gestão de seus agendamentos com o Quickly
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
				{testimonials.map(({ image, name, userName, comment }: TestimonialProps) => (
					<Card key={userName} className="max-w-md md:break-inside-avoid overflow-hidden">
						<CardHeader className="flex flex-row items-center gap-4 pb-2">
							<Avatar>
								<AvatarImage alt="" src={image} />
								<AvatarFallback>OM</AvatarFallback>
							</Avatar>

							<div className="flex flex-col">
								<CardTitle className="text-lg">{name}</CardTitle>
								<CardDescription>{userName}</CardDescription>
							</div>
						</CardHeader>

						<CardContent>{comment}</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};
