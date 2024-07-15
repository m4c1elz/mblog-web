import { PostProps } from "."

export function User({
    children,
    atsign,
}: Pick<PostProps, "children" | "atsign">) {
    return (
        <div className="flex items-center justify-between gap-3">
            <div className="aspect-square w-8 rounded-full bg-slate-400"></div>
            <div>
                <p className="text-md font-bold">{children}</p>
                <p className="text-sm text-black/40">@{atsign}</p>
            </div>
        </div>
    )
}
