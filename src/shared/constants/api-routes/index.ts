export const API_ROUTES = {
	GET: {
		PRIVATE: {
			GET_ORGANIZATION_BY_ID: '/organizations/:organization_id',
			VERIFY_ORGANIZATION_SLUG_AVAILABILITY: '/organizations/check-slug-availability/:slug',
		},
		PUBLIC: {},
		PROTECTED: {},
		AUTH: {},
	},
	POST: {
		PRIVATE: { CREATE_ORGANIZATION: '/organizations' },
		PUBLIC: {},
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
