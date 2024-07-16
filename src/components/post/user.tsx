import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"

type UserProps = PropsWithChildren & {
    atsign: string
}

export function User({ children, atsign }: UserProps) {
    return (
        <Link
            to={`/users/${atsign}`}
            className="flex items-center justify-between gap-3"
        >
            <div className="aspect-square w-8 rounded-full bg-slate-400"></div>
            <div>
                <p className="text-md font-bold">{children}</p>
                <p className="text-sm text-black/40">@{atsign}</p>
            </div>
        </Link>
    )
}
