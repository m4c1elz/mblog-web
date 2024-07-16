import { useQuery } from "@tanstack/react-query"
import { useParams, Link } from "react-router-dom"
import { api } from "../../lib/axios"
import { Loading } from "../../components/loading"
import { CheckCheck } from "lucide-react"
import { Logo } from "../../components/logo"

export function VerifyAccount() {
    const { token } = useParams()

    const {
        data: successMessage,
        isPending,
        isSuccess,
    } = useQuery({
        queryKey: ["verify-email", token],
        queryFn: async () => {
            const response = await api.get(`/auth/confirm/${token}`)
            if (response.status === 401) throw new Error("token expirado")

            return "E-mail verificado com sucesso!"
        },
    })

    if (isPending) return <Loading />
    if (isSuccess)
        return (
            <div className="grid h-screen w-screen place-content-center space-y-6">
                <Logo />
                <section className="space-y-2 border border-black/20 bg-primary px-6 py-4 text-center">
                    <CheckCheck className="m-auto aspect-square rounded-full text-xl text-emerald-500" />
                    <h1>{successMessage}</h1>
                    <Link to="/login" className="font-medium text-accent">
                        Logar na sua nova conta
                    </Link>
                </section>
            </div>
        )
}
