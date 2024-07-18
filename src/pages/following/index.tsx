import { Loading } from "../../components/loading"
import { useGetFollowingPosts } from "../../hooks/use-get-following-posts"
import { useAuth } from "../../providers/auth-provider"
import { FollowingPostList } from "./following-post-list"
import { FollowingLayout } from "./layout"

export function Following() {
    const { user } = useAuth()
    const { data: posts, isPending } = useGetFollowingPosts({
        userId: user!.id,
    })

    if (isPending)
        return (
            <FollowingLayout>
                <Loading />
            </FollowingLayout>
        )

    if (posts)
        return (
            <FollowingLayout>
                <div className="flex-1">
                    <h1 className="mt-4 text-center text-2xl font-medium">
                        Seguindo
                    </h1>
                    <div className="mt-6 h-screen overflow-auto md:mt-0">
                        <FollowingPostList postList={posts} />
                    </div>
                </div>
            </FollowingLayout>
        )
}
