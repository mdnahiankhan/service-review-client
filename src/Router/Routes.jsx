import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Addservice from "../pages/AddService/Addservice";
import Home from "../pages/Home/Home";
import Login from "../Registration/Login";
import Register from "../Registration/Register";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
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
                element: <Addservice></Addservice>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])
export default router;