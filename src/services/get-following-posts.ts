import { api } from "../lib/axios"
import { Post } from "../types/post"

export async function getFollowingPosts() {
    const response = await api.get("/posts/following")
    return response.data as Post[]
}
