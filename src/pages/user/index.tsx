import { useParams } from "react-router-dom"
import { UserLayout } from "./layout"
import { Loading } from "../../components/loading"
import { ReturnedUserType, useAuth } from "../../providers/auth-provider"
import { useGetUserPosts } from "../../hooks/use-get-user-posts"
import { UserPostList } from "./post-list"
import { MainUserSection } from "./main-user-section"
import { UserDetailsSection } from "./user-details-section"
import { useGetUser } from "../../hooks/use-get-user"

export function User() {
    const { atsign } = useParams()
    const { user: currentUser } = useAuth() as {
        user: NonNullable<ReturnedUserType>
    }

    const { data: user, isPending } = useGetUser({ atsign: atsign! })

    const { data: userPosts } = useGetUserPosts({
        userId: user?.id ?? 0, // defining default value to 0, so it will skip the query if there's no user
    })

    if (isPending)
        return (
            <UserLayout>
                <Loading />
            </UserLayout>
        )

    if (user) {
        return (
            <UserLayout>
                <main className="flex h-screen flex-1 flex-col items-center overflow-auto px-6 py-11 md:items-start xl:flex-row">
                    <div className="m-auto space-y-4 lg:max-w-[50%] xl:m-0">
                        <MainUserSection
                            user={user}
                            currentUser={currentUser}
                        />
                        <UserDetailsSection user={user} />
                    </div>
                    <div className="w-screen space-y-4 pt-4 md:w-full md:flex-1 xl:pt-0">
                        <h1 className="text-medium text-center text-xl">
                            Postagens
                        </h1>
                        <div className="h-auto pb-16">
                            <UserPostList userPosts={userPosts} />
                        </div>
                    </div>
                </main>
            </UserLayout>
        )
    }
}
