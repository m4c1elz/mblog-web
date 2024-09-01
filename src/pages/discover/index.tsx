import { DiscoverLayout } from "./layout"
import { Loading } from "../../components/loading"
import { useGetPosts } from "../../hooks/use-get-posts"
import { DiscoverPostList } from "./discover-post-list"
import { useSearchParams } from "react-router-dom"
import { Pagination } from "../../components/pagination"

export function Discover() {
    const [searchParams] = useSearchParams()

    const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1

    const { data, isPending, isError, error } = useGetPosts({ page })

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

    if (data)
        return (
            <DiscoverLayout>
                <div className="flex-1">
                    <div className="mt-6 h-screen overflow-auto md:mt-0">
                        <DiscoverPostList postList={data.posts} />
                        <Pagination page={page} maxPages={data.pages} />
                    </div>
                </div>
            </DiscoverLayout>
        )
}
