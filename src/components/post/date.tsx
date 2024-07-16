import { PropsWithChildren } from "react"
import { PostProps } from "."
import { dayjs } from "../../lib/dayjs"

type DateProps = PropsWithChildren

export function Date({ children }: DateProps) {
    return (
        <p className="text-sm text-black/30">
            {dayjs(
                children?.toString().replace("T", " ").substring(0, 19),
            ).fromNow()}
        </p>
    )
}
