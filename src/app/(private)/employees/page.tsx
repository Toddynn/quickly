import { v4 } from 'uuid';
import EmployeeCard from './components/cards/employee-card';
import EmployeesHeader from './components/header';

export enum Permissions {
	EMPLOYEE = 1,
	ADMIN = 2,
}

export interface Employee {
	id: number;
	name: string;
	contact: string;
	break_start: string | null;
	break_end: string | null;
	password: string;
	email: string;
	permission: Permissions;
	links?: Array<Link>;
}

export interface Link {
	id: string;
	url: string;
}

export const employees: Employee[] = [
	{
		id: 1,
		name: 'Ana Souza',
		contact: '48999990001',
		break_start: null,
		break_end: null,
		password: 'password123',
		email: 'ana.souza@email.com',
		permission: Permissions.EMPLOYEE,
	},
	{
		id: 2,
		name: 'Carlos Lima',
		contact: '47988880002',
		break_start: null,
		break_end: null,
		password: 'segura123',
		email: 'carlos.lima@email.com',
		permission: Permissions.ADMIN,
		links: [
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
		],
	},
	{
		id: 3,
		name: 'Beatriz Rocha',
		contact: '41977770003',
		break_start: null,
		break_end: null,
		password: '123456',
		email: 'beatriz.rocha@email.com',
		permission: Permissions.EMPLOYEE,
	},
	{
		id: 4,
		name: 'Daniel Costa',
		contact: '47966660004',
		break_start: null,
		break_end: null,
		password: 'abc123',
		email: 'daniel.costa@email.com',
		permission: Permissions.EMPLOYEE,
		links: [
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
		],
	},
	{
		id: 5,
		name: 'Elisa Martins',
		contact: '47955550005',
		break_start: null,
		break_end: null,
		password: 'password456',
		email: 'elisa.martins@email.com',
		permission: Permissions.ADMIN,
		links: [
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
		],
	},
	{
		id: 6,
		name: 'Felipe Gomes',
		contact: '48944440006',
		break_start: null,
		break_end: null,
		password: 'megapassword',
		email: 'felipe.gomes@email.com',
		permission: Permissions.EMPLOYEE,
		links: [
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
		],
	},
	{
		id: 7,
		name: 'Gabriela Nunes',
		contact: '41933330007',
		break_start: null,
		break_end: null,
		password: 'minhapassword',
		email: 'gabriela.nunes@email.com',
		permission: Permissions.EMPLOYEE,
		links: [
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
		],
	},
	{
		id: 8,
		name: 'Henrique Silva',
		contact: '48922220008',
		break_start: null,
		break_end: null,
		password: '123password',
		email: 'henrique.silva@email.com',
		permission: Permissions.ADMIN,
		links: [
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
		],
	},
	{
		id: 9,
		name: 'Isabela Ferreira',
		contact: '47911110009',
		break_start: null,
		break_end: null,
		password: 'password321',
		email: 'isabela.ferreira@email.com',
		permission: Permissions.EMPLOYEE,
		links: [
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
			{ id: v4(), url: 'https://www.instagram.com/vinicius.toddys/' },
		],
	},
];

export default function Employees() {
	return (
		<main className="size-full p-6 flex flex-col gap-6">
			<EmployeesHeader />

			<section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
				{employees.map((employee, idx) => {
					return <EmployeeCard key={`employee` + idx} employee={employee} />;
				})}
			</section>
		</main>
	);
}
