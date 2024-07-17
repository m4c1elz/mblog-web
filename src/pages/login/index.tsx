import { useForm } from "react-hook-form"
import { Input } from "../../components/input"
import { useAuth } from "../../providers/auth-provider"
import { Link, useNavigate } from "react-router-dom"
import { Logo } from "../../components/logo"
import { useEffect, useState } from "react"
import { Button } from "../../components/button"
import { LoginLayout } from "./layout"

type LoginType = {
    email: string
    password: string
}

export function Login() {
    const { handleSubmit, register } = useForm<LoginType>()
    const navigate = useNavigate()
    const { login, isAuthenticated } = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (isAuthenticated) navigate("/")
    }, [])

    async function onSubmit(data: LoginType) {
        try {
            setError(false)
            setLoading(true)
            await login(data)
            navigate("/")
        } catch (error) {
            console.error(error)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <LoginLayout>
            <div className="w-1/2">
                <img
                    src="/login-image.png"
                    className="mb-6 h-64 object-contain md:mb-0 md:h-auto"
                />
            </div>
            <section className="space-y-6">
                <Logo />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="m-auto min-h-64 w-11/12 rounded-xl border border-black/20 bg-primary py-4 md:w-96"
                >
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Entrar</h1>
                        <p className="text-black/40">
                            Cadastre-se com seu usuário.
                        </p>
                    </div>
                    <div className="space-y-8 px-4">
                        <section className="space-y-2">
                            <label htmlFor="email">E-mail</label>
                            <Input
                                type="email"
                                placeholder="E-mail"
                                {...register("email")}
                            />
                        </section>
                        <section className="space-y-2">
                            <label htmlFor="password">Senha</label>
                            <Input
                                type="password"
                                placeholder="Senha"
                                {...register("password")}
                            />
                        </section>
                        <Button
                            type="submit"
                            className="w-full"
                            loading={loading}
                        >
                            Enviar
                        </Button>
                        {error && (
                            <h1 className="text-center font-medium text-red-400">
                                Houve um erro ao realizar login.
                            </h1>
                        )}
                    </div>
                    <p className="mt-4 flex flex-col text-center">
                        Ainda não possui uma conta?{" "}
                        <Link
                            to="/register"
                            className="font-medium text-accent"
                        >
                            Cadastre-se agora
                        </Link>
                    </p>
                </form>
            </section>
        </LoginLayout>
    )
}
