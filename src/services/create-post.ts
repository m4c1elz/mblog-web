import { api } from "../lib/axios"

export async function createPost(data: { post: string }) {
    const response = await api.post("/posts", data)
    return response
}
