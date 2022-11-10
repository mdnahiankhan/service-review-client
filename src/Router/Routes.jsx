import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorElement/ErrorPage";
import Main from "../Layout/Main";
import Addservice from "../pages/AddService/Addservice";
import ServiceDetails from "../pages/AddService/ServiceDetails";
import ShowService from "../pages/AddService/ShowService";
import Home from "../pages/Home/Home";
import Login from "../Registration/Login";
import Register from "../Registration/Register";

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
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addService/:id',
                element: <Addservice></Addservice>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myorders',
                element: <ShowService></ShowService>
            }
        ]
    }
])
export default router;