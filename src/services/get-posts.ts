import { api } from "../lib/axios"

export async function getPosts({ page }: { page: number }) {
    const response = await api.get(`/posts?page=${page}`)
    return response.data as any
}
