import { PropsWithChildren } from "react"
import { dayjs } from "../../lib/dayjs"

type DateProps = PropsWithChildren & {
    isEdited?: boolean
}

export function Date({ children, isEdited = false }: DateProps) {
    return (
        <p className="text-xs text-black/30 sm:text-sm">
            {dayjs(
                children?.toString().replace("T", " ").substring(0, 19),
            ).fromNow()}
            {isEdited && " (editado)"}
        </p>
    )
}
