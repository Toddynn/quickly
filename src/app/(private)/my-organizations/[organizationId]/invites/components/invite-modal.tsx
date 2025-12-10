'use client';

import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { useMutation } from '@tanstack/react-query';
import { LucideMail } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel, FieldLabelRequired } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Spinner } from '@/components/ui/spinner';
import { private_get_all_organization_invites_query_key } from '@/shared/functions/tanstack/get/private/organization-invites/get-all-organization-invites/query-key';
import { useOrganizationInviteActions } from '../shared/functions/use-organization-invite-actions';
import { type CreateOrganizationInviteForm, CreateOrganizationInviteSchema } from '../shared/schemas/create-organization-invite-schema';

interface InviteModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	organization_id: string;
	// TODO: Trocar para pegar do current user quando tiver login implementado
	inviter_id: string;
}

export function InviteModal({ open, onOpenChange, organization_id, inviter_id }: InviteModalProps) {
	const { createOrganizationInvite } = useOrganizationInviteActions();

	const { control, reset, handleSubmit } = useForm<CreateOrganizationInviteForm>({
		defaultValues: {
			email: '',
		},
		resolver: standardSchemaResolver(CreateOrganizationInviteSchema),
	});

	const { mutateAsync: handleCreateInvite, isPending: isCreatingInvite } = useMutation({
		mutationFn: async (form_data: CreateOrganizationInviteForm) =>
			await createOrganizationInvite({
				form_data,
				organization_id,
				inviter_id,
				query_keys_to_invalidate: private_get_all_organization_invites_query_key({ organization_id, search: undefined }),
				on_success: () => {
					toast.success('Convite enviado com sucesso!');
					reset();
					onOpenChange(false);
				},
			}),
	});

	const onSubmit = async (data: CreateOrganizationInviteForm) => {
		await handleCreateInvite(data);
	};

	const handleOpenChange = (newOpen: boolean) => {
		if (!newOpen) {
			reset();
		}
		onOpenChange(newOpen);
	};

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Convidar para Organização</DialogTitle>
					<DialogDescription>Envie um convite por e-mail para adicionar um novo membro à organização.</DialogDescription>
				</DialogHeader>
				<form id="invite-organization-form" onSubmit={handleSubmit(onSubmit)}>
					<FieldGroup>
						<Controller
							name="email"
							control={control}
							render={({ field, fieldState }) => {
								return (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor={field.name}>
											E-mail
											<FieldLabelRequired />
										</FieldLabel>
										<FieldContent>
											<InputGroup className="h-10">
												<InputGroupAddon align={'inline-start'}>
													<LucideMail size={18} />
												</InputGroupAddon>
												<InputGroupInput
													{...field}
													id={field.name}
													name={field.name}
													aria-invalid={fieldState.invalid}
													type="email"
													placeholder="Digite o e-mail do convidado"
												/>
											</InputGroup>
										</FieldContent>
										<FieldError errors={[fieldState.error]} />
									</Field>
								);
							}}
						/>
					</FieldGroup>
				</form>
				<DialogFooter>
					<Button type="button" variant="outline" onClick={() => handleOpenChange(false)} disabled={isCreatingInvite}>
						Cancelar
					</Button>
					<Button type="submit" form="invite-organization-form" disabled={isCreatingInvite}>
						{isCreatingInvite ? (
							<>
								<Spinner className="mr-2 size-4" />
								Enviando...
							</>
						) : (
							'Enviar Convite'
						)}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
