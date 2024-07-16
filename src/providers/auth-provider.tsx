import {
    createContext,
    useContext,
    PropsWithChildren,
    useState,
    useEffect,
} from "react"
import { api } from "../lib/axios"
import { jwtDecode } from "jwt-decode"
import { UserPayload } from "../types/user-payload"
import { Loading } from "../components/loading"
import { refreshResponseInterceptor } from "../lib/axios"

const AuthContext = createContext<AuthProviderValueType | null>(null)

export type ReturnedUserType = {
    name: string
    atsign: string
    email: string
    description: string
}

export type LoginResponse = {
    token: string
    user: ReturnedUserType
}

export type AuthProviderValueType = {
    user: ReturnedUserType | null
    login: (data: { email: string; password: string }) => Promise<void>
    logout: () => Promise<void>
    register: (data: {
        email: string
        password: string
    }) => Promise<{ status: number; msg: string }>
    isAuthenticated: boolean
}

export function AuthProvider({ children }: PropsWithChildren) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState<ReturnedUserType | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ;(async () => {
            if (!isAuthenticated) {
                try {
                    const response = await api.get("/auth/refresh")
                    const { token } = response.data as { token: string }
                    api.defaults.headers["Authorization"] = `Bearer ${token}`

                    const { userId } = jwtDecode(token) as UserPayload
                    const {
                        data: { name, atsign, email, description },
                    } = await api.get(`/users/${userId}`)
                    setUser({ name, atsign, email, description })

                    setIsAuthenticated(true)
                    api.interceptors.response.use(
                        response => response,
                        refreshResponseInterceptor,
                    )
                } finally {
                    setLoading(false)
                }
            }
        })()
    }, [])

    async function login(data: { email: string; password: string }) {
        const response = await api.post("/auth/login", data)
        const { token, user } = response.data as LoginResponse
        api.defaults.headers["Authorization"] = `Bearer ${token}`
        api.interceptors.response.use(
            response => response,
            refreshResponseInterceptor,
        )
        setUser(user)
        setIsAuthenticated(true)
    }

    async function register(data: { email: string; password: string }) {
        try {
            const response = await api.post("/auth/register", data)
            if (response.status === 409) throw new Error("conflito de usuário")
            return {
                status: response.status,
                msg: `Um e-mail de verificação foi enviado para ${data.email}. Por favor, verifique seu e-mail.`,
            }
        } catch (error) {
            return {
                status: 409,
                msg: "Este usuário já existe!",
            }
        }
    }

    async function logout() {
        await api.get("/auth/logout")
        api.interceptors.response.clear()
        setIsAuthenticated(false)
        setUser(null)
    }

    const value = { user, login, register, logout, isAuthenticated }

    if (loading) return <Loading />
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    if (!AuthContext)
        throw new Error("Este componente está fora do escopo do AuthProvider.")
    return useContext(AuthContext) as AuthProviderValueType
}
