'use client';

import { LucideSearch, LucideTicketPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { TypographyH2 } from '@/components/ui/typography';

interface InvitesHeaderProps {
	search: string;
	onSearchChange: (value: string) => void;
	onInviteClick: () => void;
}

export function InvitesHeader({ search, onSearchChange, onInviteClick }: InvitesHeaderProps) {
	return (
		<div className="sticky bg-background z-10 py-4 gap-4 top-0">
			<TypographyH2 className="self-start border-none">Convites da Organização</TypographyH2>
			<div className="flex sm:flex-row flex-col items-center gap-2">
				<InputGroup className="h-10">
					<InputGroupAddon align={'inline-start'}>
						<LucideSearch size={18} />
					</InputGroupAddon>
					<InputGroupInput
						id={'search'}
						name={'search'}
						type="text"
						placeholder="Pesquisar convites..."
						value={search}
						onChange={(e) => onSearchChange(e.target.value)}
					/>
				</InputGroup>
				<Button size={'lg'} className="group sm:w-auto w-full text-base items-center" onClick={onInviteClick}>
					Convidar <LucideTicketPlus className="group-hover:-rotate-15 size-5 rotate-0 transition-transform duration-200" />
				</Button>
			</div>
		</div>
	);
}
