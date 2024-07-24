import { PropsWithChildren } from "react"

type StatsProps = PropsWithChildren

export function Stats({ children }: StatsProps) {
    return (
        <div className="flex w-full justify-evenly sm:justify-normal sm:gap-4">
            {children}
        </div>
    )
}
