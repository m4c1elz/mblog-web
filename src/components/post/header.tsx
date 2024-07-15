import { PostProps } from "."
import { dayjs } from "../../lib/dayjs"

export function Header({
    children,
    createdAt,
}: Pick<PostProps, "children" | "createdAt">) {
    return (
        <div className="flex w-full justify-between">
            {children}
            <p className="text-sm text-black/30">
                {dayjs(createdAt.replace("T", " ").substring(0, 19)).fromNow()}
            </p>
        </div>
    )
}
