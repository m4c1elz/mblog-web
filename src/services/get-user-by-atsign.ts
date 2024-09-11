import { api } from "../lib/axios"

export interface UserType {
    id: number
    name: string
    atsign: string
    email: string
    followers: number
    description: any
    createdAt: string
    updatedAt: any
    postCount: number
    isFollowing: boolean
}

export async function getUserByAtsign({ atsign }: { atsign: string }) {
    const response = await api.get(`/users/atsign/${atsign}`)
    return response.data as UserType
}
