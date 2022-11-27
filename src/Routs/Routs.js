import { createBrowserRouter } from "react-router-dom";
import Dashbord from "../Dashbord/Dashbord/Dashbord";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import ProductsDeatils from "../Pages/ProductsDeatils/ProductsDeatils";
import Errorpage from "../Sheard/Errorpage";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
     {
          path: '/',
          element:<Main></Main>,
          errorElement:<Errorpage></Errorpage>,
          children:[
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                   path: '/productsdeatils/:id',
                   loader: ({params}) => fetch(`http://localhost:5000/productscatagory/${params.id}`),
                   element: <ProductsDeatils></ProductsDeatils>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/signup',
                    element:<SignUp></SignUp>
               },
               {
                    path:'/dashboard',
                    element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>
               }
          ]
     }
])