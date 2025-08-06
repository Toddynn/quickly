'use client';

import { Button, Divider, Input } from '@heroui/react';

export default function Company() {
	return (
		<main className="flex gap-6 p-4">
			<aside className="flex bg-content1 rounded-lg p-4 max-w-64 min-h-full flex-col gap-6 size-full">
				<div className="flex flex-col gap-2">
					<h1 className="font-medium ">Empresa atual</h1>
					<Button variant="flat">Dados da empresa</Button>
				</div>
				<Divider />
				<div className="flex max-w-64 flex-col gap-2">
					<h1 className="font-medium ">Minhas empresas</h1>
					<Button variant="flat">Dados da empresa1</Button>
					<Button variant="flat">Dados da empresa2</Button>
					<Button variant="flat">Dados da empresa3</Button>
					<Button variant="flat">Dados da empresa4</Button>
					<Button variant="flat">Dados da empresa5</Button>
				</div>
			</aside>
			<section className="flex flex-col p-4 gap-6 size-full">
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
		</main>
	);
}
