import classes from "./CartItems.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
const CartItem = (props) => {
  const cartContext = useContext(CartContext);

  const AddAmount = () => {
    cartContext.addItem({ name: props.itemName, noOfItems: 1 });
  };

  const reduceAmount = () => {
    // console.log("here 1");
    // console.log(cartContext);
    cartContext.removeItem({
      name: props.itemName,
      noOfItems: 1,
      price: props.itemPrice
    });
  };

  // console.log("cartCon", cartContext);
  return (
    <div className={classes.cartItem}>
      <div>
        <div className={classes.title}>{props.itemName}</div>
        <div className={classes.itemPriceAndAmount}>
          <span className={classes.itemPrice}>{props.itemDetails.price}</span>
          <span className={classes.itemAmount}>
            x {props.itemDetails.amount}
          </span>
        </div>
      </div>
      <div className={classes.buttonGroup}>
        <button onClick={reduceAmount} className={classes.substract}>
          -
        </button>
        <button onClick={AddAmount} className={classes.add}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
