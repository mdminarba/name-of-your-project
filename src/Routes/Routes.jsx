import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layuots/Roots/Roots";
import Home from "../Pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register";
import Error from "../components/Error";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement:<Error/>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=> fetch('news.json')
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        }
      ]
    },
  ]);
  export default routes;