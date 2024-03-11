import classes from "./CartItems.module.css";

const CartItem = (props) => {
  console.log(props);
  return (
    <div className={classes.cartItem}>
      <div>
      <div className={classes.title}>{props.itemName}</div>
      <div className={classes.itemPriceAndAmount}>
        <span className={classes.itemPrice}>{props.itemDetails.price}</span>
        <span className={classes.itemAmount}>x {props.itemDetails.amount}</span>
      </div>
      </div>
      <div className={classes.buttonGroup}>
        <button className={classes.add}>+</button>
        <button className={classes.substract}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
