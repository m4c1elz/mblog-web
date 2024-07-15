import { PropsWithChildren, useEffect, useState } from "react"
import { useAuth } from "../providers/auth-provider"
import { useNavigate } from "react-router-dom"
import { Loading } from "./loading"

export function ProtectedRoute({ children }: PropsWithChildren) {
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login", { replace: true })
        }
        setLoading(false)
    }, [])

    if (loading) return <Loading />

    return children
}
