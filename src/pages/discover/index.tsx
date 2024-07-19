import { DiscoverLayout } from "./layout"
import { Loading } from "../../components/loading"
import { useGetPosts } from "../../hooks/use-get-posts"
import { DiscoverPostList } from "./discover-post-list"

export function Discover() {
    let page = 1

    const { data: posts, isPending, isError, error } = useGetPosts({ page })

    if (isError) {
        console.log(error)
        return (
            <DiscoverLayout>
                <div className="grid flex-1 place-items-center">
                    <h1 className="text-red-500">
                        Houve um erro ao pegar os dados!
                    </h1>
                </div>
            </DiscoverLayout>
        )
    }

    if (isPending)
        return (
            <DiscoverLayout>
                <Loading />
            </DiscoverLayout>
        )

    if (posts)
        return (
            <DiscoverLayout>
                <div className="flex-1">
                    <div className="mt-6 h-screen overflow-auto md:mt-0">
                        <DiscoverPostList postList={posts} />
                    </div>
                </div>
            </DiscoverLayout>
        )
}
