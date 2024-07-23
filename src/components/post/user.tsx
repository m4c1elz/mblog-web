import { PropsWithChildren } from "react"
import { useNavigate } from "react-router-dom"

type UserProps = PropsWithChildren & {
    atsign: string
}

export function User({ children, atsign }: UserProps) {
    const navigate = useNavigate()

    return (
        <div
            onClick={e => {
                e.stopPropagation()
                navigate(`/users/${atsign}`)
            }}
            className="flex items-center justify-between gap-3"
        >
            <div className="aspect-square w-8 rounded-full bg-slate-400"></div>
            <div>
                <p className="text-sm font-bold sm:text-base">{children}</p>
                <p className="text-xs text-black/40 sm:text-sm">@{atsign}</p>
            </div>
        </div>
    )
}
