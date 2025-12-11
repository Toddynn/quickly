'use client';

import { useMutation } from '@tanstack/react-query';
import { LucideTrash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useOrganizationInviteActions } from '@/app/(private)/my-organizations/[organizationId]/invites/shared/functions/use-organization-invite-actions';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import type { OrganizationInvite } from '@/shared/functions/tanstack/get/private/organization-invites/get-all-organization-invites';
import { private_get_all_organization_invites_query_key } from '@/shared/functions/tanstack/get/private/organization-invites/get-all-organization-invites/query-key';
import { cn } from '@/shared/lib/utils';

interface OrganizationInviteActionsCancelProps extends ButtonProps {
	invite_id: OrganizationInvite['id'];
	organization_id: string;
}

export default function OrganizationInviteActionsCancel({
	invite_id,
	organization_id,
	className,
	variant = 'destructive',
	children,
	...props
}: OrganizationInviteActionsCancelProps) {
	const { cancelOrganizationInvite } = useOrganizationInviteActions();

	const { mutateAsync: handleCancelInvite, isPending: isCancelingInvite } = useMutation({
		mutationFn: async ({ current_invite_id }: { current_invite_id: string }) =>
			await cancelOrganizationInvite({
				invite_id: current_invite_id,
				query_keys_to_invalidate: private_get_all_organization_invites_query_key({ organization_id }),
				on_success: () => toast.success('Convite cancelado com sucesso!'),
			}),
	});

	return (
		<Button
			className={cn('sm:w-auto w-full', className)}
			variant={variant}
			disabled={isCancelingInvite}
			onClick={() => handleCancelInvite({ current_invite_id: invite_id })}
			{...props}
		>
			{children ??
				(isCancelingInvite ? (
					<>
						<Spinner />
						Cancelando...
					</>
				) : (
					<>
						<LucideTrash2 size={18} />
						Cancelar
					</>
				))}
		</Button>
	);
}
