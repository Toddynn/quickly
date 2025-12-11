'use client';

import { useState } from 'react';
import { OrganizationsHeader } from './organizations-header';
import OrganizationsList from './organizations-list';

export function OrganizationsWrapper() {
	const [search, setSearch] = useState('');

	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<div className="size-full rounded-xl flex flex-col gap-6">
				<OrganizationsHeader search={search} onSearchChange={setSearch} />
				<OrganizationsList search={search} />
			</div>
		</div>
	);
}

