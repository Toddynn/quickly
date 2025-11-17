'use client';

import { Card, CardBody, CardHeader, type CardProps, Chip, Divider, ScrollShadow } from '@heroui/react';
import Link from 'next/link';
import { useMemo } from 'react';
import { toast } from 'sonner';
import { formatBrazilianPhone } from '@/shared/functions/format-brazilian-phone';
import type { Employee } from '../../../page';

interface EmployeeCardProps extends Omit<CardProps, `children`> {
	employee: Employee;
}
export default function EmployeeCard({ employee, ...props }: EmployeeCardProps) {
	const formatted_contact = useMemo(() => formatBrazilianPhone(employee.contact), []);
	return (
		<Card {...props}>
			<CardHeader className="flex-col items-start gap-1">
				<h1 className="text-xl text-ellipsis font-medium line-clamp-2">{employee.name}</h1>
				<h3
					className="cursor-pointer hover:underline text-default-600 font-normal"
					onClick={() => {
						navigator.clipboard.writeText(employee.email);
						toast.info('Copiado!');
					}}
				>
					{employee.email}
				</h3>
				<h3
					className="cursor-pointer hover:underline text-default-600 font-normal"
					onClick={() => {
						navigator.clipboard.writeText(formatted_contact);
						toast.info('Copiado!');
					}}
				>
					{formatted_contact}
				</h3>
			</CardHeader>
			<Divider />
			<CardBody>
				{employee.links && (
					<div className="flex flex-col gap-2">
						<h1 className="font-normal">Links</h1>
						<ScrollShadow orientation="horizontal" className="flex pb-2 items-center gap-2">
							{employee.links.map((link) => (
								<Link key={link.id} href={link.url} target="_blank">
									<Chip variant="bordered" radius="sm" className="border-1">
										{link.url}
									</Chip>
								</Link>
							))}
						</ScrollShadow>
					</div>
				)}
			</CardBody>
		</Card>
	);
}
