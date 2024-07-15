import { Link } from "react-router-dom"
import { PostProps } from "."

export function Root({ id, children }: Pick<PostProps, "id" | "children">) {
    return (
        <Link
            to={`/posts/${id}`}
            className="m-auto my-4 flex min-h-32 w-[80%] flex-col justify-between border border-black/20 bg-primary px-4 py-2 transition-colors hover:bg-black/5 lg:w-[60%]"
        >
            {children}
        </Link>
    )
}
