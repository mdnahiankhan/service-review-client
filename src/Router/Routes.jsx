import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorElement/ErrorPage";
import Main from "../Layout/Main";
import Addservice from "../pages/AddService/Addservice";
import ServiceDetails from "../pages/AddService/ServiceDetails";
import ShowService from "../pages/AddService/ShowService";
import Home from "../pages/Home/Home";
import Review from "../pages/Review/Review";
import Update from "../pages/Update";
import Login from "../Registration/Login";
import Register from "../Registration/Register";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <Register></Register>
            },
            {
                path: '/addService/:id',
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addService/:id',
                element: <Addservice></Addservice>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myorders',
                element: <ShowService></ShowService>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
            }
        ]
    }
])
export default router;