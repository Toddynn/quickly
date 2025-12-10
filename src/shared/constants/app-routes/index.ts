import { LucideBuilding, LucideCalendar, LucideImage, LucideLayoutDashboard, LucideLock, LucideUser } from 'lucide-react';

export const APP_ROUTES = {
	PUBLIC: {
		LOGIN: {
			name: 'Login',
			path: '/login',
			icon: LucideLock,
		},
		REGISTER: {
			name: 'Register',
			path: '/register',
			icon: LucideUser,
		},
		RECOVER_PASSWORD: {
			name: 'Recover Password',
			path: '/recover-password',
			icon: LucideLock,
		},
		RECOVER_PASSWORD_OTP: {
			name: 'Recover Password OTP',
			path: '/recover-password/otp',
			icon: LucideLock,
		},
		RECOVER_PASSWORD_RESET: {
			name: 'Recover Password Reset',
			path: '/recover-password/reset',
			icon: LucideLock,
		},
		SCHEDULING: {
			name: 'Scheduling',
			path: '/scheduling',
			icon: LucideCalendar,
		},
		LANDING_PAGE: {
			name: 'Landing Page',
			path: '/',
			icon: LucideImage,
		},
	},
	PRIVATE: {
		DASHBOARD: {
			name: 'Dashboard',
			path: '/dashboard',
			icon: LucideLayoutDashboard,
		},
		MY_ORGANIZATIONS: {
			name: 'Minhas Organizações',
			path: '/my-organizations',
			icon: LucideBuilding,
		},
	},
} as const;
