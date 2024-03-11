import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = (props) => {
  let [cartContext, setCartContext] = useState({
    items: {},
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  });

  function addItemToCartHandler(item) {
    if (!item.noOfItems) {
      alert("Amount field is empty!!");
      return;
    }
    setCartContext((prevCartContext) => {
      const newCartContext = { ...prevCartContext };

      if (!newCartContext.items[item.name]) {
        newCartContext.items[item.name] = {
          price: item.price,
          amount: item.noOfItems,
        };
      } else {
        newCartContext.items[item.name].amount += item.noOfItems;
      }

      Object.keys(cartContext.items).forEach((ele) => {
        const price = cartContext.items[ele].price;
        const amount = cartContext.items[ele].amount;
        newCartContext.totalAmount += price * amount;
      });
      return newCartContext;
    });
  }

  function removeItemFromCartHandler(id) {}

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
