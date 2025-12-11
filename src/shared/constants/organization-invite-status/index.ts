import type { DeepValueOf } from '@/shared/interfaces/deep-value-of';

export type OrganizationInviteStatus = DeepValueOf<typeof ORGANIZATION_INVITE_STATUS>;

export const ORGANIZATION_INVITE_STATUS = {
	PENDING: 'PENDING',
	ACCEPTED: 'ACCEPTED',
	EXPIRED: 'EXPIRED',
	REJECTED: 'REJECTED',
	CANCELED: 'CANCELED',
} as const;
