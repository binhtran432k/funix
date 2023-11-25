import { City, Header, Hotel, Type } from "../../components";
import { Default } from "../../layouts";

const Home = () => {
  return (
    <Default>
      <Header />
      <City />
      <Type />
      <Hotel />
    </Default>
  );
};

export default Home;
