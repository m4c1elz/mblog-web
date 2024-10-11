import { api } from "../lib/axios"

type LoginResponse = {
    token: string
    user: ReturnedUserType
}

type ReturnedUserType = {
    id: number
    name: string
    atsign: string
    email: string
    description: string
}

export async function logUserIn(data: { email: string; password: string }) {
    const response = await api.post("/auth/login", data)
    return response.data as LoginResponse
}
