// App Router setup
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Addmodel from "../pages/Addmodel";
import Viewmodels from "../pages/Viewmodels";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";
import Modelpurchaes from "../pages/Modelpurchaes";
import Mymodelpage from "../pages/Mymodelpage";
import Deatilspage from "../pages/Deatilspage";
import Loader from "../features/Loader";
import UpdataModelpage from "../pages/UpdataModelpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/addmodel',
        element: <PrivateRoute>
          <Addmodel></Addmodel>
        </PrivateRoute>
      },
      {
        path: '/viewmodels',
        Component: Viewmodels
      },
      {
        path:'/purchase',
        Component:Modelpurchaes
      },
      {
        path:'/mymodel',
        Component:Mymodelpage
      },
      {
        path:'/viewmodels/:id',
        Component:Deatilspage,
        loader:({params})=>fetch(`http://localhost:5000/allmodels/${params.id}`),
        hydrateFallbackElement:<Loader></Loader>

      },
      {
        path:'/updatemodel/:id',
        Component:UpdataModelpage,
      }
    ]
  },
  {
    path: '/login',
    Component: Login
  },
  {
    path: '/register',
    Component: Registration
  }
]);