import { PropsWithChildren } from "react"
import { dayjs } from "../../lib/dayjs"

type DateProps = PropsWithChildren

export function Date({ children }: DateProps) {
    return (
        <p className="text-xs text-black/30 sm:text-sm">
            {dayjs(
                children?.toString().replace("T", " ").substring(0, 19),
            ).fromNow()}
        </p>
    )
}
