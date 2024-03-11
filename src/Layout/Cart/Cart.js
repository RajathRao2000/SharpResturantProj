import classes from "./Cart.module.css";
import CartItem from "./CartItems/CartItem";

const Cart = (props) => {
  console.log(props.cartDetails);
  const closeHandler = () => {
    props.closeCart();
  };
  return (
    <div className={classes.cart}>
      <div className={classes.cartlist}>
        <div className={classes.itemDetails}>
          {Object.keys(props.cartDetails.items).map((itemname) => {
            return (
              <CartItem
                key={Math.random()}
                itemDetails={props.cartDetails.items[itemname]}
                itemName={itemname}
              />
            );
          })}
        </div>
        <div className={classes.amountDisp}>
          Total Amount
          <span>
            {(Math.round(props.cartDetails.totalAmount * 100) / 100).toFixed(2)}
          </span>
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
