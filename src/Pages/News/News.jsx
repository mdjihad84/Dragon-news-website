
import Paper from "./Paper";
import Card from "./CardSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Paper/>
      <div className="p-8">
        <Card/>
  
      </div>
    </div>
  );
};
export default Home;
