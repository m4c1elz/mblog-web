import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios"

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

export const refreshResponseInterceptor = async (err: AxiosError) => {
    const originalRequest = err.config as InternalAxiosRequestConfig
    if (err.response?.status === 403) {
        const response = await api.get("/auth/refresh")
        if (response.status === 403) {
            return (window.location.href = "/login")
        }
        const { token } = response.data as { token: string }
        originalRequest.headers["Authorization"] = `Bearer ${token}`
        api.defaults.headers["Authorization"] = `Bearer ${token}`
        return api(originalRequest)
    }
    return Promise.reject(err)
}
