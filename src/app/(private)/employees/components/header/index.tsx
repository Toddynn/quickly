'use client';

import { Input } from '@heroui/react';
import { LucideSearch } from 'lucide-react';

export default function EmployeesHeader() {
	return (
		<div className="flex flex-col gap-6">
			<h1 className="text-xl font-medium">Funcionários</h1>
			<Input size="lg" startContent={<LucideSearch size={18} />} placeholder="Pesquisar" />
		</div>
	);
}
