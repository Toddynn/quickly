'use client';

import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { useMutation } from '@tanstack/react-query';
import { LucideGlobe, LucidePencilRuler, LucideUser } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel, FieldLabelRequired } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group';
import { Spinner } from '@/components/ui/spinner';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { generateSlugFromInput } from '@/shared/functions/generate-slug-from-input';
import type { Organization } from '@/shared/functions/zustand/get-organization-by-id';
import { get_organization_by_id_query_key } from '@/shared/functions/zustand/get-organization-by-id/query-key';
import { type EditOrganizationArgs, useOrganizationActions } from '../../../shared/functions/use-organization-actions';
import { type EditOrganizationForm, EditOrganizationSchema } from '../../../shared/schemas/edit-organization-schema';
//TODO:  validation of slug and rest of fields.

export function EditOrganizationFormulary({ organization }: { organization: Organization }) {
	const { editOrganization } = useOrganizationActions();
	//const { clearAll: clearAllFiles, files } = useFiles();

	const { control, reset, handleSubmit, getValues, formState, setError, clearErrors, setValue } = useForm<EditOrganizationForm>({
		defaultValues: {
			name: organization.name,
			description: organization.description || '',
			slug: organization.slug,
			//file: [],
		},
		resolver: standardSchemaResolver(EditOrganizationSchema),
	});

	const handleReset = () => {
		reset();
		//clearAllFiles();
	};

	const handleGenerateSlug = () => {
		clearErrors('slug');

		const name = getValues('name');
		if (!name) return setError('slug', { type: 'manual', message: 'Por favor, insira o nome da organização para gerar o domínio.' });

		const generatedSlug = generateSlugFromInput(name);
		return setValue('slug', generatedSlug);
	};

	const { mutateAsync: handleEditOrganization, isPending: isCreatingOrganization } = useMutation({
		mutationFn: async (args: EditOrganizationArgs) => await editOrganization(args),
	});

	const handleSuccess = (updated_data: EditOrganizationForm) => {
		toast.success('Organização editada com sucesso!');
		reset(updated_data);
	};
	const onSubmit = async (form_data: EditOrganizationForm) => {
		await handleEditOrganization({
			organization_id: organization.id,
			form_data,
			query_keys_to_invalidate: get_organization_by_id_query_key({ organization_id: organization.id }),
			on_success: () => handleSuccess(form_data),
		});
	};

	return (
		<form id="edit-organization-form" onSubmit={handleSubmit(onSubmit)} onReset={handleReset} className="flex flex-col gap-7">
			<FieldGroup>
				<Controller
					name="name"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Nome
									<FieldLabelRequired />
								</FieldLabel>
								<FieldContent>
									<InputGroup className="h-10">
										<InputGroupAddon align={'inline-start'}>
											<LucideUser size={18} />
										</InputGroupAddon>
										<InputGroupInput
											{...field}
											id={field.name}
											name={field.name}
											aria-invalid={fieldState.invalid}
											type="text"
											placeholder="Digite o nome da organização"
										/>
									</InputGroup>
								</FieldContent>
								<FieldError errors={[fieldState.error]} />
							</Field>
						);
					}}
				/>

				<Controller
					name="slug"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Domínio
									<FieldLabelRequired />
								</FieldLabel>
								<FieldContent className="flex-row">
									<InputGroup className="h-10">
										<InputGroupAddon align="inline-start">
											<LucideGlobe size={18} />
										</InputGroupAddon>
										<InputGroupInput {...field} id={field.name} name={field.name} type="text" placeholder="seu-dominio" />
										<InputGroupAddon align="inline-end">
											<InputGroupText className="text-foreground">.quickly.app</InputGroupText>
										</InputGroupAddon>
									</InputGroup>
									<Tooltip>
										<TooltipTrigger>
											<Button
												type="button"
												onClick={handleGenerateSlug}
												variant={'secondary'}
												size={'icon-lg'}
												aria-label="Gerar domínio"
											>
												<LucidePencilRuler size={18} />
											</Button>
										</TooltipTrigger>
										<TooltipContent>Clique para gerar um domínio a partir do nome da organização</TooltipContent>
									</Tooltip>
								</FieldContent>
								<FieldError errors={[fieldState.error]} />
							</Field>
						);
					}}
				/>

				<Controller
					name="description"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>Sobre</FieldLabel>
								<FieldContent>
									<InputGroup>
										<InputGroupTextarea
											{...field}
											id={field.name}
											name={field.name}
											aria-invalid={fieldState.invalid}
											rows={6}
											placeholder="Conte aos seus clientes sobre a organização"
											className="min-h-24"
										/>
									</InputGroup>
								</FieldContent>
								<FieldError errors={[fieldState.error]} />
							</Field>
						);
					}}
				/>

				{/* <Controller
					name="file"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Logo
									<FieldLabelRequired />
								</FieldLabel>
								<FieldContent>
									<FileUploader {...field} max_files={1} onChange={(_, files) => field.onChange(files)} />
									<UploadedFiles files={files} />
								</FieldContent>
								<FieldError errors={[fieldState.error]} />
							</Field>
						);
					}}
				/> */}
			</FieldGroup>

			<Field orientation="horizontal" className="justify-end">
				<Button disabled={isCreatingOrganization || !formState.isDirty} size="lg" type="reset" variant="ghost">
					Resetar
				</Button>
				<Button disabled={isCreatingOrganization || !formState.isDirty} size="lg" type="submit" form="edit-organization-form">
					{isCreatingOrganization && <Spinner />} Finalizar Edição
				</Button>
			</Field>
		</form>
	);
}
