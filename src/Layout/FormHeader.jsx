
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/FormHeader";

const Main = () => {
  const location = useLocation();
  const noHeader =
    location.pathname.includes("/login") ||
    location.pathname.includes("/SignUp");
  return (
    <div>
      {noHeader || <Header />}
      <Outlet />
    </div>
  );
};
export default Main;
