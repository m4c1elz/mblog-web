import { SidebarContent } from "./sidebar-content"

export function DesktopSidebar() {
    return (
        <aside
            className={`flex h-screen w-80 shrink-0 flex-col justify-between border-r border-black/20 bg-primary px-6 py-4 text-black transition-all`}
        >
            <SidebarContent />
        </aside>
    )
}
