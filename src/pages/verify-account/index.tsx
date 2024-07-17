import { useParams, Link } from "react-router-dom"
import { Loading } from "../../components/loading"
import { CheckCheck, X } from "lucide-react"
import { Logo } from "../../components/logo"
import { useVerifyAccount } from "../../hooks/use-verify-account"

export function VerifyAccount() {
    const { token } = useParams()

    const {
        data: successMessage,
        isPending,
        isSuccess,
        isError,
    } = useVerifyAccount({ token: token! })

    if (isError)
        return (
            <div className="grid h-screen w-screen place-content-center space-y-6 p-2">
                <Logo />
                <section className="space-y-2 border border-black/20 bg-primary px-6 py-4 text-center">
                    <X className="m-auto aspect-square rounded-full text-xl text-red-500" />
                    <h1 className="text-xl font-bold">
                        Houve um erro ao realizar o cadastro.
                    </h1>
                    <p>
                        É possível que isso tenha ocorrido pois o link expirou.
                        Tente novamente realizando outro cadastro.
                    </p>
                </section>
            </div>
        )
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
