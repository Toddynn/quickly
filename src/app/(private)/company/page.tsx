'use client';

import { Card, CardBody, CardHeader, Divider, Input } from '@heroui/react';

export default function Company() {
	return (
		<main className="flex  flex-col gap-6 p-6">
			<section className="flex flex-col gap-6 size-full">
				<h1 className="text-2xl font-semibold">Dados da empresa</h1>
				<div className="flex flex-col gap-4">
					<Input name="name" label="Nome" size="lg" />
				</div>
				<div className="flex items-center gap-2">
					<h1 className="text-xl font-medium">Endereço da empresa</h1>
					<Divider className="w-auto flex-1" />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<Input name="cep" label="CEP" size="lg" />
					<Input name="street" label="Rua" size="lg" />
					<Input name="neighborhood" label="Bairro" size="lg" />
					<Input name="city" label="Cidade" size="lg" />
				</div>
				<div className="flex items-center gap-2">
					<h1 className="text-xl font-medium">Links da empresa</h1>
					<Divider className="w-auto flex-1" />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<Input name="link1" label="link1" size="lg" />
					<Input name="link2" label="link2" size="lg" />
					<Input name="link3" label="link3" size="lg" />
					<Input name="link4" label="link4" size="lg" />
				</div>
			</section>
			<Divider />
			<section className="flex flex-col gap-6 size-full">
				<h1 className="text-2xl font-semibold">Filiais</h1>
				<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
					<Card shadow="sm">
						<CardHeader>
							<h1 className="text-xl font-medium">Filial 1</h1>
						</CardHeader>
						<Divider />
						<CardBody>dados principais</CardBody>
					</Card>
					<Card shadow="sm">
						<CardHeader>
							<h1 className="text-xl font-medium">Filial 1</h1>
						</CardHeader>
						<Divider />
						<CardBody>dados principais</CardBody>
					</Card>
					<Card shadow="sm">
						<CardHeader>
							<h1 className="text-xl font-medium">Filial 1</h1>
						</CardHeader>
						<Divider />
						<CardBody>dados principais</CardBody>
					</Card>
					<Card shadow="sm">
						<CardHeader>
							<h1 className="text-xl font-medium">Filial 1</h1>
						</CardHeader>
						<Divider />
						<CardBody>dados principais</CardBody>
					</Card>
					<Card shadow="sm">
						<CardHeader>
							<h1 className="text-xl font-medium">Filial 1</h1>
						</CardHeader>
						<Divider />
						<CardBody>dados principais</CardBody>
					</Card>
				</div>
			</section>
		</main>
	);
}
