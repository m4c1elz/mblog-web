import { PropsWithChildren } from "react"

type StatsProps = PropsWithChildren

export function Stats({ children }: StatsProps) {
    return <div className="flex items-center gap-2">{children}</div>
}
