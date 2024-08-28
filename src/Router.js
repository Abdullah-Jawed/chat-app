import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Protectedrouter from "./auth/Protectedrouter";

const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

const Layout = lazy(() => import('./layout/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Chat = lazy(() => import('./pages/Chat'));
const user = true;

const router = createBrowserRouter(
    [
        {
            path: '/login',
            element: <Suspense fallback='Loading'>
                <Protectedrouter user={!user} redirect="/"><Login /></Protectedrouter>
            </Suspense >
        },
        {
            path: '/signup',
            element: <Suspense fallback='Loading'><Signup />
            </Suspense >
        },
        {
            path: '/',
            element: <Protectedrouter user={user}><Layout /></Protectedrouter>,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/chat/:user_id',
                    element: <Chat />
                }
            ]
        }
    ]
)

export default router;