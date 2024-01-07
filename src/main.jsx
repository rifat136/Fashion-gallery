import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Order from './Component/Order/Order.jsx';
import Shop from './Component/Shop/Shop.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      
      {
        path: "/",
        element: <Shop></Shop>,
        loader: ()=> fetch('shirts.json')
      },

      {
        path: "/order",
        element: <Order></Order>,
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
