import { api } from "../lib/axios"
import { Post } from "../types/post"

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
    return response.data as Post[]
}
