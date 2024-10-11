import { api } from "../lib/axios"

interface TokenResponse {
    token: string
}

export async function refreshToken() {
    const response = await api.get("/auth/refresh")
    return response.data as TokenResponse
}
