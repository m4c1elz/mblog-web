import { api } from "../lib/axios"

export async function getPost({ postId }: { postId: number | string }) {
    const response = await api.get(`/posts/${postId}?comments=true`)
    return response
}
