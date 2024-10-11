import { api } from "../lib/axios"
import { PostResponse } from "../types/post-response"

export async function getPosts({ page }: { page: number }) {
    const response = await api.get(`/posts?page=${page}`)
    return response.data as PostResponse
}
