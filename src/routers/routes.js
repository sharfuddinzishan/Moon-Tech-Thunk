import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import ListProduct from "../pages/Dashboard/ListProduct/ListProduct";
import Cart from "../pages/Main/Cart/Cart";
import Features from "../pages/Main/Features/Features";
import Home from "../pages/Main/Home/Home";
import Main from "../layout/Main/Main";
import Dashboard from "../layout/Dasboard/Dashboard"
import DashboardHome from "../layout/Dasboard/DashboardHome";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/features',
                element: <Features></Features>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/add-product',
                element: <AddProduct></AddProduct>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome></DashboardHome>
            },
            {
                path: "list-product",
                element: <ListProduct></ListProduct>
            },
            {
                path: "add-product",
                element: <AddProduct></AddProduct>
            },
        ],
    }

    // {
    //     path: '/dashboard',
    //     element: <Dashboard></Dashboard>,
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: <ListProduct></ListProduct>
    //         },
    //         {
    //             path: '/add-product',
    //             element: <AddProduct></AddProduct>
    //         }
    //     ]
    // }
])

export default routes;