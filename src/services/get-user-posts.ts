import { api } from "../lib/axios"

export interface PostResponse {
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

export async function getUserPosts({ userId }: { userId: number }) {
    const response = await api.get(`/users/${userId}/posts`)
    return response.data as PostResponse[]
}
