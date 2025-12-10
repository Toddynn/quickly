'use client';

import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { useMutation } from '@tanstack/react-query';
import { LucideGlobe, LucidePencilRuler, LucideUser } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { type VerifySlugAvailabilityArgs, useOrganizationActions } from '@/app/(private)/my-organizations/create/shared/functions/use-organization-actions';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel, FieldLabelRequired } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group';
import { Spinner } from '@/components/ui/spinner';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { USER_ID_TEST } from '@/shared/constants/user-id-test';
import { generateSlugFromInput } from '@/shared/functions/generate-slug-from-input';
import { type CreateOrganizationForm, CreateOrganizationSchema } from '../../../shared/schemas/create-organization-schema';
//TODO:  validation of slug and rest of fields.

export function CreateOrganizationFormulary() {
	const { createOrganization, verifySlugAvailability } = useOrganizationActions();
	//const { clearAll: clearAllFiles, files } = useFiles();

	const { mutateAsync: handleCreateOrganization, isPending: isCreatingOrganization } = useMutation({
		mutationFn: async (form_data: CreateOrganizationForm) => await createOrganization({ form_data }),
	});

	const { mutateAsync: handleVerifySlugAvailability, isPending: isVerifyingSlugAvailability } = useMutation({
		mutationFn: async (args: VerifySlugAvailabilityArgs) => await verifySlugAvailability(args),
	});

	const { control, reset, handleSubmit, getValues, setError, clearErrors, setValue } = useForm<CreateOrganizationForm>({
		defaultValues: {
			name: '',
			description: '',
			slug: '',
			owner_id: USER_ID_TEST,
			//file: [],
		},
		disabled: isCreatingOrganization || isVerifyingSlugAvailability,
		resolver: standardSchemaResolver(CreateOrganizationSchema),
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

	const onSubmit = async (data: CreateOrganizationForm) => {
		await handleVerifySlugAvailability({
			form_data: { slug: data.slug },
			on_success: async () => {
				await handleCreateOrganization(data);
			},
		});
	};

	return (
		<form id="create-organization-form" onSubmit={handleSubmit(onSubmit)} onReset={handleReset} className="flex flex-col gap-7">
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
												disabled={isVerifyingSlugAvailability}
												onClick={handleGenerateSlug}
												variant={'secondary'}
												size={'icon-lg'}
												aria-label="Gerar domínio"
											>
												{isVerifyingSlugAvailability && <Spinner />}
												{!isVerifyingSlugAvailability && <LucidePencilRuler className="size-4" />}
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
				<Button disabled={isCreatingOrganization || isVerifyingSlugAvailability} size="lg" type="reset" variant="ghost">
					Resetar
				</Button>
				<Button disabled={isCreatingOrganization || isVerifyingSlugAvailability} size="lg" type="submit" form="create-organization-form">
					{(isCreatingOrganization || isVerifyingSlugAvailability) && <Spinner />}Criar Organização
				</Button>
			</Field>
		</form>
	);
}
