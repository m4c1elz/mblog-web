import { api } from "../lib/axios"

export async function getUserPosts({ userId }: { userId: number }) {
    const response = await api.get(`/users/${userId}/posts`)
    return response
}
