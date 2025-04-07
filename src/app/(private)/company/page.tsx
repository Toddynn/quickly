'use client';

import { Card, CardBody, CardHeader, Divider, Input } from '@heroui/react';

export default function Company() {
	return (
		<main className="flex  flex-col gap-6 p-6">
			<section className="flex flex-col gap-6 size-full">
				<h1 className="text-2xl font-semibold">Dados da empresa</h1>
				<div className="flex flex-col gap-4">
					<Input name="name" label="Nome" size="lg" />
					<Input name="name" label="Nome" size="lg" />
					<Input name="name" label="Nome" size="lg" />
					<Input name="name" label="Nome" size="lg" />
					<Input name="name" label="Nome" size="lg" />
				</div>
			</section>
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
