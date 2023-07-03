import { createBrowserRouter } from "react-router-dom";

import Main from "../Layerr/Main";
import Home from "../Layerr/Home/Home";
import Login from "../Layerr/Pages/Login";
import Signup from "../Layerr/Pages/Signup";
import Alltoy from "../Layerr/Pages/Alltoy";
import Details from "../Layerr/Pages/Details";
import Update from "../Layerr/Pages/Update";
import Mytoy from "../Layerr/Pages/Mytoy";
import Updatemytoy from "../Layerr/Pages/Updatemytoy";
import PrivateRoute from "./PrivateRoute";
import Error from "../Layerr/Pages/Error";
import Blog from "../Layerr/Pages/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {  
             path: '/',
            element:<Home></Home>   
        },
        {
           path: "login",
           element: <Login></Login>
        },
        {
          path: "signup",
          element: <Signup></Signup>
        },
        {
          path: "alltoy",
          element: <PrivateRoute>
                      <Alltoy></Alltoy>
                    </PrivateRoute>,
          
        },
        {
          path: "mytoy",
          element: <PrivateRoute>
            <Mytoy></Mytoy>
          </PrivateRoute>,
          loader: () => fetch('https://honey-toy-db.up.railway.app/mytoy')
        },
        {
           path: 'update/:id',
           element: <Updatemytoy></Updatemytoy>,
           loader: ({params}) => fetch(`https://honey-toy-db.up.railway.app/mytoy/${params.id}`)
        },
        {
          path: 'details/:id',
          element: <PrivateRoute>
            <Details></Details>
          </PrivateRoute>,
          loader: ({params}) => fetch(`https://honey-toy-db.up.railway.app/alltoy/${params.id}`)
        },
        {
          path: 'addtoy',
          element: <PrivateRoute>
             <Update></Update>
          </PrivateRoute>
        },
        {
          path: 'blog',
          element: <PrivateRoute><Blog></Blog></PrivateRoute>
        }
]},
{
  path: '*',
  element:<Error></Error>
}
  ]);

export default router;