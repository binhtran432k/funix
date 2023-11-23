import { Navbar } from "../../components";

const Default = (props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Default;
