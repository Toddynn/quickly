'use client';

import { useMutation } from '@tanstack/react-query';
import { LucideCheckCircle2, LucideMail, LucideMailX, LucideUser, LucideXCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import AppLogo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty';
import { Spinner } from '@/components/ui/spinner';
import { APP_ROUTES } from '@/shared/constants/app-routes';
import { ORGANIZATION_INVITE_STATUS } from '@/shared/constants/organization-invite-status';
import { USER_ID_TEST_2 } from '@/shared/constants/user-id-test';
import { get_organization_invite_by_id_query_key } from '@/shared/functions/tanstack/get/public/organization-invites/get-organization-invite-by-id/query-key';
import { useGetOrganizationInviteById } from '@/shared/functions/tanstack/get/public/organization-invites/get-organization-invite-by-id/use-index';
import { useAcceptOrganizationInviteActions } from '../shared/functions/use-accept-organization-invite-actions';

interface AcceptOrganizationInviteWrapperProps {
	invite_id: string;
}

export function AcceptOrganizationInviteWrapper({ invite_id }: AcceptOrganizationInviteWrapperProps) {
	const router = useRouter();
	const { acceptOrganizationInvite } = useAcceptOrganizationInviteActions();

	const { data: invite, isLoading, error } = useGetOrganizationInviteById({ invite_id });

	const { mutateAsync: handleAcceptInvite, isPending: isAcceptingInvite } = useMutation({
		mutationFn: async () =>
			await acceptOrganizationInvite({
				invite_id,
				user_id: USER_ID_TEST_2,
				query_keys_to_invalidate: get_organization_invite_by_id_query_key({ invite_id }),
				on_success: () => {
					toast.success('Convite aceito com sucesso!');
					router.push(APP_ROUTES.PRIVATE.DASHBOARD.path);
				},
			}),
	});

	if (isLoading) {
		return (
			<main className="flex min-h-dvh items-center justify-center p-4">
				<div className="flex flex-col items-center gap-4">
					<AppLogo className="text-4xl" />
					<Spinner />
				</div>
			</main>
		);
	}

	if (error || !invite) {
		return (
			<main className="flex min-h-dvh items-center justify-center p-4">
				<div className="flex w-full max-w-md flex-col items-center gap-6">
					<AppLogo className="text-4xl" />
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<LucideMailX className="text-destructive" />
							</EmptyMedia>
							<EmptyTitle>Convite não encontrado</EmptyTitle>
							<EmptyDescription>O convite que você está tentando acessar não existe ou não está mais disponível.</EmptyDescription>
						</EmptyHeader>
					</Empty>
				</div>
			</main>
		);
	}

	if (invite.status !== ORGANIZATION_INVITE_STATUS.PENDING) {
		if (invite.status === ORGANIZATION_INVITE_STATUS.ACCEPTED) {
			return (
				<main className="flex min-h-dvh items-center justify-center p-4">
					<div className="flex w-full max-w-md flex-col items-center gap-6">
						<AppLogo className="text-4xl" />
						<Empty>
							<EmptyHeader>
								<EmptyMedia variant="icon">
									<LucideCheckCircle2 className="text-heroui-success" />
								</EmptyMedia>
								<EmptyTitle>Convite já aceito</EmptyTitle>
								<EmptyDescription>Este convite já foi aceito anteriormente.</EmptyDescription>
							</EmptyHeader>
							<EmptyContent>
								<Button onClick={() => router.push(APP_ROUTES.PRIVATE.DASHBOARD.path)}>Ir para o Dashboard</Button>
							</EmptyContent>
						</Empty>
					</div>
				</main>
			);
		}

		const statusMessages = {
			[ORGANIZATION_INVITE_STATUS.EXPIRED]: {
				icon: LucideXCircle,
				title: 'Convite expirado',
				description: 'Este convite expirou e não pode mais ser aceito.',
			},
			[ORGANIZATION_INVITE_STATUS.REJECTED]: {
				icon: LucideXCircle,
				title: 'Convite rejeitado',
				description: 'Este convite foi rejeitado e não pode mais ser aceito.',
			},
			[ORGANIZATION_INVITE_STATUS.CANCELED]: {
				icon: LucideXCircle,
				title: 'Convite cancelado',
				description: 'Este convite foi cancelado e não pode mais ser aceito.',
			},
		};

		const statusInfo = statusMessages[invite.status as keyof typeof statusMessages] || {
			icon: LucideMailX,
			title: 'Convite indisponível',
			description: 'Este convite não está mais disponível para aceitação.',
		};

		const StatusIcon = statusInfo.icon;

		return (
			<main className="flex min-h-dvh items-center justify-center p-4">
				<div className="flex w-full max-w-md flex-col items-center gap-6">
					<AppLogo className="text-4xl" />
					<Empty>
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<StatusIcon className="text-muted-foreground" />
							</EmptyMedia>
							<EmptyTitle>{statusInfo.title}</EmptyTitle>
							<EmptyDescription>{statusInfo.description}</EmptyDescription>
						</EmptyHeader>
					</Empty>
				</div>
			</main>
		);
	}

	return (
		<main className="flex min-h-dvh items-center justify-center p-4">
			<div className="flex w-full max-w-md flex-col items-center gap-6">
				<AppLogo className="text-4xl" />
				<Card className="w-full">
					<CardHeader className="text-center">
						<CardTitle>Convite para Organização</CardTitle>
						<CardDescription>Você foi convidado para participar de uma organização</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-3">
							<div className="flex items-center gap-3">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<LucideUser size={20} />
								</div>
								<div className="flex flex-col gap-1">
									<p className="text-sm font-medium">Convidado por</p>
									<p className="text-sm text-muted-foreground">{invite.inviter?.name || invite.inviter?.email || 'Usuário'}</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<LucideMail size={20} />
								</div>
								<div className="flex flex-col gap-1">
									<p className="text-sm font-medium">Organização</p>
									<p className="text-sm text-muted-foreground">{invite.organization?.name || 'Organização'}</p>
								</div>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Button className="w-full" disabled={isAcceptingInvite} onClick={() => handleAcceptInvite()}>
							{isAcceptingInvite ? (
								<>
									<Spinner />
									Aceitando...
								</>
							) : (
								<>
									<LucideCheckCircle2 size={18} />
									Aceitar e Participar
								</>
							)}
						</Button>
					</CardFooter>
				</Card>
			</div>
		</main>
	);
}
