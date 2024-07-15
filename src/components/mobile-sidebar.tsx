import { List } from "lucide-react"
import { useState } from "react"
import { SidebarContent } from "./sidebar-content"

export function MobileSidebar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="absolute left-2 top-2 rounded bg-white p-1 md:hidden"
            >
                <List className="text-accent" />
            </button>
            <div
                onClick={() => setOpen(false)}
                className={`${open ? "visible bg-black/50" : "invisible"} fixed h-screen w-screen transition-all`}
            >
                <aside
                    onClick={e => e.stopPropagation()}
                    className={`relative flex h-full transition-all duration-300 ${open ? "left-0" : "-left-full"} w-80 flex-col justify-between border-r border-black/20 bg-primary px-6 py-4 text-black`}
                >
                    <SidebarContent />
                </aside>
            </div>
        </>
    )
}
