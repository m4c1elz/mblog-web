import { SinglePostProps } from "."

export function User({
    atsign,
    children,
}: Pick<SinglePostProps, "atsign" | "children">) {
    return (
        <div className="flex items-center gap-2">
            <div className="aspect-square h-8 rounded-full bg-slate-400"></div>
            <div>
                <h1 className="text-md font-bold">{children}</h1>
                <p className="text-sm text-black/40">@{atsign}</p>
            </div>
        </div>
    )
}
