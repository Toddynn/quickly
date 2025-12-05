import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQProps {
	question: string;
	answer: string;
	value: string;
}

const FAQList: FAQProps[] = [
	{
		question: 'O Quickly é gratuito?',
		answer: 'Sim! Oferecemos um plano básico gratuito para você começar. Você pode testar todas as funcionalidades principais sem compromisso.',
		value: 'item-1',
	},
	{
		question: 'Preciso de conhecimento técnico para usar?',
		answer: 'Não! O Quickly foi desenvolvido para ser intuitivo e fácil de usar. Se você consegue usar um celular, consegue usar o Quickly. Além disso, oferecemos suporte completo para ajudar você.',
		value: 'item-2',
	},
	{
		question: 'Meus clientes precisam criar conta para agendar?',
		answer: 'Não é obrigatório. Seus clientes podem agendar apenas informando nome e telefone. Mas também podem criar uma conta para ter acesso ao histórico de agendamentos.',
		value: 'item-3',
	},
	{
		question: 'Posso usar em múltiplos dispositivos?',
		answer: 'Sim! O Quickly funciona em computadores, tablets e celulares. Você pode acessar de qualquer lugar, a qualquer momento.',
		value: 'item-4',
	},
	{
		question: 'Como funcionam os lembretes automáticos?',
		answer: 'O sistema envia lembretes automáticos por WhatsApp ou SMS para seus clientes antes do agendamento, reduzindo significativamente as faltas e melhorando a experiência.',
		value: 'item-5',
	},
];

export const FAQ = () => {
	return (
		<section id="faq" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold mb-4">
				Perguntas <span className="bg-linear-to-b from-heroui-success/60 to-heroui-success text-transparent bg-clip-text">Frequentes</span>
			</h2>

			<Accordion type="single" collapsible className="w-full AccordionRoot">
				{FAQList.map(({ question, answer, value }: FAQProps) => (
					<AccordionItem key={value} value={value}>
						<AccordionTrigger className="text-left">{question}</AccordionTrigger>

						<AccordionContent>{answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<h3 className="font-medium mt-4">
				Ainda tem dúvidas?{' '}
				<Link rel="noreferrer noopener" href="#" className="text-heroui-success transition-all border-heroui-success hover:border-b-2">
					Entre em contato
				</Link>
			</h3>
		</section>
	);
};
