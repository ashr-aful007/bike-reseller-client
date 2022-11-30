import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../Dashbord/AddProducts/AddProducts";
import AllByer from "../Dashbord/AllByer/AllByer";
import AllSeller from "../Dashbord/AllSeller/AllSeller";
import Dashbord from "../Dashbord/Dashbord/Dashbord";
import MyOrders from "../Dashbord/MyOrders/MyOrders";
import MyProducts from "../Dashbord/MyProducts/MyProducts";
import ReportedItems from "../Dashbord/ReportedItems/ReportedItems";
import DashbordLayout from "../Layout/DashbordLayout";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import ProductsDeatils from "../Pages/ProductsDeatils/ProductsDeatils";
import Errorpage from "../Sheard/Errorpage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";



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
               }
            
          ]
     },
     {
          path:'/dashboard',
          element: <PrivateRoute><DashbordLayout></DashbordLayout></PrivateRoute>,
          children: [
               {
                    path: '/dashboard/addproducts',
                    element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
               },
               {
                    path: '/dashboard/myproducts',
                    element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
               },
               {
                    path: '/dashboard/allseller',
                    element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
               },
               {
                    path: '/dashboard/allbyer',
                    element:<AdminRoute><AllByer></AllByer></AdminRoute>
               },
               {
                    path: '/dashboard/reporteditem',
                    element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
               },
               {
                    path: '/dashboard/myorders',
                    element: <MyOrders></MyOrders>
               }

          ]
     }
])