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
import Errorpage from "../pages/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Errorpage></Errorpage>,
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
        path: '/purchase',
        element: <PrivateRoute>
          <Modelpurchaes></Modelpurchaes>
        </PrivateRoute>
      },
      {
        path: '/mymodel',
        element: <PrivateRoute>
          <Mymodelpage></Mymodelpage>
        </PrivateRoute>
      },
      {
        path: '/viewmodels/:id',
        element: <PrivateRoute>
          <Deatilspage></Deatilspage>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://ai-model-server-ashen.vercel.app/allmodels/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>

      },
      {
        path: '/updatemodel/:id',
        element: <PrivateRoute>
          <UpdataModelpage></UpdataModelpage>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://ai-model-server-ashen.vercel.app/allmodels/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>

      },

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