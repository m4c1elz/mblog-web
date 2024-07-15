import { SinglePostProps } from "."

export function Root({ children }: Pick<SinglePostProps, "children">) {
    return (
        <div className="m-auto mt-6 w-[80%] space-y-6 border border-black/20 bg-primary px-4 py-2 md:mt-0 md:w-[50%]">
            {children}
        </div>
    )
}
