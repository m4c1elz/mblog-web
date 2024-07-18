import { api } from "../lib/axios"

export async function unfollowUser({ userId }: { userId: number }) {
    const response = await api.delete(`/users/${userId}/unfollow`)
    return response
}
