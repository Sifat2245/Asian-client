import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayot from "../layouts/AuthLayot";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";
import Forget from "../pages/Forget";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: '/user',
        Component: AuthLayot,
        children:[
            {
                path:'/user/signin',
                Component: SignIn
            },
            {
                path:'/user/signup',
                Component: Signup
            },
            {
                path:'/user/forgetpassword',
                Component: Forget
            }
        ]
    }
])