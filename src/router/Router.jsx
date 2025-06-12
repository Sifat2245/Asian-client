import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayot from "../layouts/AuthLayot";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";
import Forget from "../pages/Forget";
import FoodDetails from "../pages/FoodDetails";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/Gallery";
import MyFood from "../pages/MyFood";
import AddFood from "../pages/AddFood";
import MyOrders from "../pages/MyOrders";
import PrivateRoute from "./privateRoute";
import AboutUs from "../pages/AboutUs";
import Shop from "../pages/Shop";
import News from "../pages/News";
import ContactUs from "../pages/ContactUs";
import Checkout from "../pages/Checkout";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/foodDetails/:id',
                loader: ({params}) => fetch(`https://asian-server-mu.vercel.app/foods/${params.id}`),
                Component: FoodDetails
            },
            {
                path: '/allFoods',
                Component: AllFoods
            },
            {
               path: '/ourGallery',
               Component: Gallery 
            },
            {
                path:'/myFoods',
                element: <PrivateRoute>
                    <MyFood></MyFood>
                </PrivateRoute>
            },
            {
                path: '/addFood',
                element: <PrivateRoute>
                    <AddFood></AddFood>
                </PrivateRoute>
            },
            {
                path: '/myOrders',
                element: <PrivateRoute>
                    <MyOrders></MyOrders>
                </PrivateRoute>
            },
            {
                path:'/checkout',
                element: <PrivateRoute>
                    <Checkout></Checkout>
                </PrivateRoute>
            },
            {
                path:'/about',
                Component: AboutUs
            },
            {
                path:'/shop',
                Component: Shop
            },
            {
                path: '/news',
                Component: News
            },
            {
                path: '/contact',
                Component: ContactUs
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