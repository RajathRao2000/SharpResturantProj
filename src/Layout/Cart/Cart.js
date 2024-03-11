import classes from "./Cart.module.css";
import CartItem from "./CartItems/CartItem";

const Cart = (props) => {
  console.log(props.cartDetails)
  const closeHandler = () => {
    props.closeCart()
  };

  return (
    <div className={classes.cart}>
      <div className={classes.cartlist}>
        <div className={classes.itemDetails}>{
          Object.keys(props.cartDetails.items).map((itemname)=>{
            return <CartItem itemDetails={props.cartDetails.items[itemname]} itemName={itemname}/>
          })
        }</div>
        <div className={classes.amountDisp}>
          Total Amount<span>{props.cartDetails.totalAmount}</span>
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
