import { api } from "../lib/axios"

type SinglePostType = {
    id: number
    username: string
    atsign: string
    post: string
    commentCount: number
    likes: number
    createdAt: string
    updatedAt: any
    comments: Comment[]
}

type Comment = {
    user: string
    comment: string
    createdAt: string
    updatedAt: any
}

export async function getPost({ postId }: { postId: number | string }) {
    const response = await api.get(`/posts/${postId}?comments=true`)
    return response.data as SinglePostType
}
