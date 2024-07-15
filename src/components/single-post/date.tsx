import { SinglePostProps } from "."
import { dayjs } from "../../lib/dayjs"

export function Date({ children }: Pick<SinglePostProps, "children">) {
    return (
        <p className="text-sm text-black/40">
            Postado {dayjs(children as string).fromNow()}
        </p>
    )
}
