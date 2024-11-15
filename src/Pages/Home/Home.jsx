

import HeadLine from "./HeadLine";
import HomePage from "./HomePage";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <div className="p-8">
        <HeadLine/>
        <HomePage/>
      </div>
    </div>
  );
};
export default Home;
