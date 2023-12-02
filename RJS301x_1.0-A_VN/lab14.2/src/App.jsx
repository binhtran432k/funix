import Cart from "@/components/Cart/Cart";
import Header from "@/components/Layout/Header";
import Meals from "@/components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [isShowCard, setIsShowCard] = useState(false);

  const showCardHandler = () => {
    setIsShowCard(true);
  };

  const hideCardHandler = () => {
    setIsShowCard(false);
  };

  return (
    <CartProvider>
      {isShowCard && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
