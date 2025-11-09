// App Router setup
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Addmodel from "../pages/Addmodel";
import Viewmodels from "../pages/Viewmodels";

export  const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/addmodel',
            Component: Addmodel
        },
        {
            path:'/viewmodels',
            Component: Viewmodels
        }
    ]
  },
]);