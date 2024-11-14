import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import FormHeader from "../Layout/FormHeader";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/News",
        element: <News/>,
      },
    ],
  },
  {
    path: "/",
    element: <FormHeader />,
    children: [
      {
        path: "/Register",
        element: <Register/>,
      },
      {
        path: "/Login",
        element: <Login/>,
      },
    ],
  },
]);

export default router;

