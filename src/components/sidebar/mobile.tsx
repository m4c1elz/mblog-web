import { List } from "lucide-react"
import { useState } from "react"
import { Content } from "./content"

export function Mobile() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="absolute left-2 top-2 rounded border border-black/20 bg-white p-1 transition-colors active:bg-black/20 md:hidden"
            >
                <List className="text-accent" />
            </button>
            <div
                onClick={() => setOpen(false)}
                className={`${open ? "visible bg-black/50" : "invisible"} fixed z-10 h-screen w-screen transition-all`}
            >
                <aside
                    onClick={e => e.stopPropagation()}
                    className={`relative flex h-full transition-all duration-300 ${open ? "left-0" : "-left-full"} w-80 flex-col justify-between border-r border-black/20 bg-primary px-6 py-4 text-black`}
                >
                    <Content />
                </aside>
            </div>
        </>
    )
}
