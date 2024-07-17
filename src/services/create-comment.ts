import { api } from "../lib/axios"

export async function createComment({
    postId,
    data,
}: {
    postId: number | string
    data: { comment: string }
}) {
    const response = await api.post(`/posts/${postId}/comments`, data)
    return response
}
