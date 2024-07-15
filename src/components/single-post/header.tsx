import { SinglePostProps } from "."

export function Header({ children }: Pick<SinglePostProps, "children">) {
    return (
        <section className="flex items-center justify-between">
            {children}
        </section>
    )
}
