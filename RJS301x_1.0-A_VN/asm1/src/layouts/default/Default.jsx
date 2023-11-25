import { Footer, Navbar, Subcribe } from "../../components";

const Default = (props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
      <footer>
        <Subcribe />
        <Footer />
      </footer>
    </>
  );
};

export default Default;
