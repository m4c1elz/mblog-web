import { useState } from "react"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Logo } from "../../components/logo"
import { RegisterLayout } from "./layout"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useAuth } from "../../providers/auth-provider"

type RegisterFormType = {
    email: string
    password: string
}

export function Register() {
    const { register: registerUserFn } = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const { register, handleSubmit } = useForm<RegisterFormType>()

    async function onSubmit(data: RegisterFormType) {
        try {
            setLoading(true)

            setSuccess(null)
            setError(null)
            const result = await registerUserFn(data)
            if (result.status !== 200) {
                console.log("chegou no erro")
                setError(result.msg)
            } else {
                setSuccess(result.msg)
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <RegisterLayout>
            <div className="p-6 md:w-1/2">
                <img
                    src="/register-image.png"
                    className="mb-6 ml-auto h-64 object-contain md:mb-0 md:h-auto"
                />
            </div>
            <section className="mb-6 space-y-6 md:mb-0">
                <Logo />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="m-auto min-h-64 w-11/12 rounded-xl border border-black/20 bg-primary py-4 md:w-96"
                >
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Registrar</h1>
                        <p className="text-black/40">Crie uma conta nova.</p>
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
                            loading={loading}
                            type="submit"
                            className="w-full"
                        >
                            Cadastrar
                        </Button>
                        {error && (
                            <h1 className="text-center font-medium text-red-400">
                                {error}
                            </h1>
                        )}
                        {success && (
                            <h1 className="text-center font-medium text-emerald-400">
                                {success}
                            </h1>
                        )}
                    </div>
                    <p className="mt-4 text-center">
                        Já possui uma conta?{" "}
                        <Link to="/login" className="font-medium text-accent">
                            Faça login
                        </Link>
                    </p>
                </form>
            </section>
        </RegisterLayout>
    )
}
