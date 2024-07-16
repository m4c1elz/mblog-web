import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/react-query.ts"
import { AuthProvider } from "./providers/auth-provider.tsx"
import { ProtectedRoute } from "./components/protected-route.tsx"
import { Loading } from "./components/loading.tsx"
import "./index.css"

const Discover = lazy(() =>
    import("./pages/discover").then(module => ({
        default: module.Discover,
    })),
)
const Login = lazy(() =>
    import("./pages/login").then(module => ({
        default: module.Login,
    })),
)

const Post = lazy(() =>
    import("./pages/post-page").then(module => ({
        default: module.PostPage,
    })),
)

const User = lazy(() =>
    import("./pages/user").then(module => ({
        default: module.User,
    })),
)

const Register = lazy(() =>
    import("./pages/register").then(module => ({
        default: module.Register,
    })),
)

const VerifyAccount = lazy(() =>
    import("./pages/verify-account").then(module => ({
        default: module.VerifyAccount,
    })),
)

const EditUser = lazy(() =>
    import("./pages/edit-user").then(module => ({
        default: module.EditUser,
    })),
)

const router = createBrowserRouter([
    {
        path: "/login",
        element: (
            <Suspense fallback={<Loading />}>
                <Login />
            </Suspense>
        ),
    },
    {
        path: "/register",
        element: (
            <Suspense fallback={<Loading />}>
                <Register />
            </Suspense>
        ),
    },
    {
        path: "/verify/:token",
        element: (
            <Suspense fallback={<Loading />}>
                <VerifyAccount />
            </Suspense>
        ),
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                    <Discover />
                </Suspense>
            </ProtectedRoute>
        ),
    },
    {
        path: "/posts/:id",
        element: (
            <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                    <Post />
                </Suspense>
            </ProtectedRoute>
        ),
    },
    {
        path: "/users/:atsign",
        element: (
            <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                    <User />
                </Suspense>
            </ProtectedRoute>
        ),
    },
    {
        path: "/users/edit",
        element: (
            <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                    <EditUser />
                </Suspense>
            </ProtectedRoute>
        ),
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>,
)
