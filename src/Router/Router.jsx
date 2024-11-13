import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Login from "../Pages/LoginPage/Login";

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
      {
        path: "/LoginPage",
        element: <Login/>,
      },
    ],
  },
]);

export default router;

