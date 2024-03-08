import classes from "./Cart.module.css";

const Cart = (props) => {
  const closeHandler = () => {
    props.closeCart()
  };

  return (
    <div className={classes.cart}>
      <div className={classes.cartlist}>
        <div className={classes.itemDetails}>Sushi</div>
        <div className={classes.amountDisp}>
          Total Amount<span>35.62</span>
        </div>
        <div className={classes.buttonGroup}>
          <button className={classes.close} onClick={closeHandler}>
            Close
          </button>
          <button className={classes.order}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
