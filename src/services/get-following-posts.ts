import { api } from "../lib/axios"

export interface PostType {
    id: number
    name: string
    atsign: string
    post: string
    likes: number
    comments: number
    createdAt: string
    updatedAt: string | null
    isFollowing: boolean
}

export async function getFollowingPosts() {
    const response = await api.get("/posts/following")
    return response.data as PostType[]
}
