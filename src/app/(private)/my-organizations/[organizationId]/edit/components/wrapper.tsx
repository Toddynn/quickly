'use client';
import { notFound } from 'next/navigation';
import Loading from '@/app/loading';
import { TypographyH2 } from '@/components/ui/typography';
import type { Organization } from '@/shared/functions/zustand/get-organization-by-id';
import { useGetOrganizationById } from '@/shared/functions/zustand/get-organization-by-id/use-index';
import { EditOrganizationFormulary } from './forms/edit-organization-form';

export function EditOrganizationWrapper({ organization_id }: { organization_id: Organization['id'] }) {
	const { data: Organization, isLoading } = useGetOrganizationById({ organization_id });

	if (isLoading) return <Loading />;

	if (!Organization) notFound();

	return (
		<div className="flex max-w-2xl flex-1 flex-col gap-4 p-4">
			<TypographyH2 className="self-start border-none">{Organization.name}</TypographyH2>
			<EditOrganizationFormulary organization={Organization} />
		</div>
	);
}
