import { createBrowserRouter, Navigate } from "react-router"
import HomeLayout from "../Layouts/HomeLayout"
import CategoryNews from "../Components/Pages/CategoryNews"
import AuthLayout from "../Layouts/AuthLayout"
import Login from "../Components/Pages/Login"
import Register from "../Components/Pages/Register"
import NewsDetails from "../Components/Pages/NewsDetails"
import PrivateRoute from "./PrivateRoute"


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [

            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>,
            },

            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) =>
                    fetch(
                        `https://openapi.programming-hero.com/api/news/category/${params.id}`
                    ),
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            }
        ]
    },
    {
        path: "/news/:id",
        element: (
            <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>
        ),
        loader: ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    },
    {
        path: "/*",
        element: <h1>this is Error</h1>
    },
])

export default Routes