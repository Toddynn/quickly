import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/shared/functions/get-query-client';
import getOrganizationInviteById from '@/shared/functions/tanstack/get/public/organization-invites/get-organization-invite-by-id';
import { get_organization_invite_by_id_query_key } from '@/shared/functions/tanstack/get/public/organization-invites/get-organization-invite-by-id/query-key';
import { AcceptOrganizationInviteWrapper } from './components/accept-organization-invite-wrapper';

interface AcceptOrganizationInvitePageProps {
	params: Promise<{ organizationInviteId: string }>;
}

export default async function AcceptOrganizationInvitePage({ params }: AcceptOrganizationInvitePageProps) {
	const { organizationInviteId: invite_id } = await params;

	const queryClient = getQueryClient();

	await queryClient.prefetchQuery({
		queryKey: get_organization_invite_by_id_query_key({ invite_id }),
		queryFn: async () => await getOrganizationInviteById({ invite_id }),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<AcceptOrganizationInviteWrapper invite_id={invite_id} />
		</HydrationBoundary>
	);
}
