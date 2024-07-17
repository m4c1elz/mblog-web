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
import { logUserIn } from "../services/log-user-in"
import { registerUser } from "../services/register-user"
import { logUserOut } from "../services/log-user-out"

const AuthContext = createContext<AuthProviderValueType | null>(null)

export type ReturnedUserType = {
    id: number
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
            try {
                const response = await api.get("/auth/refresh")
                const { token } = response.data as { token: string }
                api.defaults.headers["Authorization"] = `Bearer ${token}`

                const { userId } = jwtDecode(token) as UserPayload
                const {
                    data: { id, name, atsign, email, description },
                } = await api.get(`/users/${userId}`)
                setUser({ id, name, atsign, email, description })

                setIsAuthenticated(true)
                api.interceptors.response.use(
                    response => response,
                    refreshResponseInterceptor,
                )
            } catch {
                /*
                 * this means we don't have the refresh token cookie.
                 * no need to console.log() the error, we are just redirected to the login
                 * page by the ProtectedRoute component.
                 */
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    async function login(data: { email: string; password: string }) {
        const response = await logUserIn(data)
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
            const response = await registerUser(data)
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
        await logUserOut()
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
