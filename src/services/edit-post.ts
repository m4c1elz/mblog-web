import { api } from "../lib/axios"

export async function editPost({
    postId,
    post,
}: {
    postId: number
    post: string
}) {
    const response = await api.put(`/posts/${postId}`, { post })
    return response
}
