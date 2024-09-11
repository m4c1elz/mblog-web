import { api } from "../lib/axios"

interface DeletePostProps {
    postId: number
}

export async function deletePost({ postId }: DeletePostProps) {
    await api.delete(`/posts/${postId}`)
}
