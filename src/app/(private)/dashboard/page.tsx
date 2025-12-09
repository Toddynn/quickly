import AppLogo from '@/components/logo';
import { SidebarInset, SidebarInsetNav, SidebarTrigger } from '@/components/ui/sidebar';

export default function Dashboard() {
	return (
		<SidebarInset>
			<SidebarInsetNav>
				<SidebarTrigger />
				<AppLogo />
			</SidebarInsetNav>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<div className="grid auto-rows-min gap-4 md:grid-cols-4">
					<div className="bg-muted/50 aspect-video rounded-xl" />
					<div className="bg-muted/50 aspect-video rounded-xl" />
					<div className="bg-muted/50 aspect-video rounded-xl" />
					<div className="bg-muted/50 aspect-video rounded-xl" />
				</div>
				<div className="bg-muted/50 min-h-100dvh flex-1 rounded-xl md:min-h-min" />
			</div>
		</SidebarInset>
	);
}
