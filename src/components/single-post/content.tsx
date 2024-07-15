import { SinglePostProps } from "."

export function Content({ children }: Pick<SinglePostProps, "children">) {
    return (
        <section>
            <h3 className="text-xl font-medium">{children}</h3>
        </section>
    )
}
