
import Form from "../Register/Form";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <div className="">
        <Form/>
      </div>
    </div>
  );
};
export default Home;
