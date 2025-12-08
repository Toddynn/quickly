import { LucideCalendar, LucideCalendarCheck, LucideImage, LucideLayoutDashboard, LucideLock, LucideUser } from 'lucide-react';

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
		WITH_SUB_ROUTES: {
			SCHEDULING: {
				name: 'Scheduling',
				path: '/scheduling',
				icon: LucideCalendar,
				sub_routes: [
					{
						name: 'My Schedules',
						path: '/scheduling/my-schedules',
						icon: LucideCalendarCheck,
					},
				],
			},
		},
		WITHOUT_SUB_ROUTES: {
			DASHBOARD: {
				name: 'Dashboard',
				path: '/dashboard',
				icon: LucideLayoutDashboard,
			},
		},
	},
} as const;
