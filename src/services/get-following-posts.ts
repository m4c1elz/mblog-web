import { api } from "../lib/axios"

export async function getFollowingPosts() {
    const response = await api.get("/posts/following")
    return response
}
