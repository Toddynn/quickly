export const API_ROUTES = {
	GET: {
		PRIVATE: {
			GET_ORGANIZATION_BY_ID: '/organizations/:organization_id',
			VERIFY_ORGANIZATION_SLUG_AVAILABILITY: '/organizations/check-slug-availability/:slug',
			GET_ALL_ORGANIZATIONS_PAGINATED: '/organizations/:user_id/paginated',
			GET_ALL_ORGANIZATION_INVITES_PAGINATED: '/organization-invites/:organization_id/paginated',
		},
		PUBLIC: {
			GET_EXISTING_PASSWORD_RESET: '/password-reset/email/current',
			GET_PASSWORD_RESET_BY_ID: '/password-reset/:password_reset_id',
		},
		PROTECTED: {},
		AUTH: {},
	},
	POST: {
		PRIVATE: {
			CREATE_ORGANIZATION: '/organizations',
			CREATE_ORGANIZATION_INVITE: '/organization-invites',
		},
		PUBLIC: {
			CREATE_USER: '/users',

			REQUEST_PASSWORD_RESET: '/password-reset/request',
			VALIDATE_PASSWORD_RESET_OTP: '/password-reset/verify-otp',
			RESET_PASSWORD: '/password-reset/reset',
		},
		PROTECTED: {},
		AUTH: {},
	},
	PUT: {
		PRIVATE: {},
	},
	PATCH: {
		PRIVATE: {
			EDIT_ORGANIZATION: '/organizations/:organization_id',
		},
		PUBLIC: {},
		PROTECTED: {},
	},
	DELETE: {
		PRIVATE: {},
		PUBLIC: {},
		PROTECTED: {},
		AUTH: {},
	},
} as const;
