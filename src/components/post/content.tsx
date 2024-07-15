import { PostProps } from "."

export function Content({ children }: Pick<PostProps, "children">) {
    return <p className="font-medium">{children}</p>
}
