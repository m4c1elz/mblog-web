import { useNavigate } from "react-router-dom"
import { PropsWithChildren, createContext } from "react"

type RootProps = PropsWithChildren & {
    id: number
}

export const PostContext = createContext<{ id: number } | null>(null)

export function Root({ id, children }: RootProps) {
    const navigate = useNavigate()

    return (
        <PostContext.Provider value={{ id }}>
            <article
                onClick={() => navigate(`/posts/${id}`)}
                className="relative m-auto my-4 flex min-h-32 w-[80%] cursor-pointer flex-col justify-between border border-black/20 bg-primary px-4 py-2 transition-colors hover:bg-black/5 lg:w-[60%]"
            >
                {children}
            </article>
        </PostContext.Provider>
    )
}
