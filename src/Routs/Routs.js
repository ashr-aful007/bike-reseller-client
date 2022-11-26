import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProductsDeatils from "../Pages/ProductsDeatils/ProductsDeatils";
import Errorpage from "../Sheard/Errorpage";



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
               }
          ]
     }
])