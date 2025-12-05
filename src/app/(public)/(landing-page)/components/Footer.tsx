import Link from 'next/link';
import AppLogo from '@/components/logo';

export const Footer = () => {
	return (
		<footer id="footer">
			<hr className="w-11/12 mx-auto" />

			<section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
				<div className="col-span-full xl:col-span-2">
					<Link rel="noreferrer noopener" href="/" className="font-bold text-xl flex items-center">
						<AppLogo />
					</Link>
					<p className="text-muted-foreground mt-4">
						Sistema de gestão de agendamentos para pequenos empreendedores. Simples, eficiente e acessível.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Produto</h3>
					<div>
						<Link rel="noreferrer noopener" href="#features" className="opacity-60 hover:opacity-100">
							Funcionalidades
						</Link>
					</div>

					<div>
						<Link rel="noreferrer noopener" href="#pricing" className="opacity-60 hover:opacity-100">
							Preços
						</Link>
					</div>

					<div>
						<Link rel="noreferrer noopener" href="#howItWorks" className="opacity-60 hover:opacity-100">
							Como Funciona
						</Link>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Suporte</h3>
					<div>
						<Link rel="noreferrer noopener" href="#faq" className="opacity-60 hover:opacity-100">
							FAQ
						</Link>
					</div>

					<div>
						<Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
							Central de Ajuda
						</Link>
					</div>

					<div>
						<Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
							Contato
						</Link>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Empresa</h3>
					<div>
						<Link rel="noreferrer noopener" href="#about" className="opacity-60 hover:opacity-100">
							Sobre Nós
						</Link>
					</div>

					<div>
						<Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
							Blog
						</Link>
					</div>

					<div>
						<Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
							Carreiras
						</Link>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="font-bold text-lg">Legal</h3>
					<div>
						<Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
							Termos de Uso
						</Link>
					</div>

					<div>
						<Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
							Política de Privacidade
						</Link>
					</div>
				</div>
			</section>

			<section className="container pb-14 text-center">
				<h3>&copy; 2024 Quickly. Todos os direitos reservados.</h3>
			</section>
		</footer>
	);
};
