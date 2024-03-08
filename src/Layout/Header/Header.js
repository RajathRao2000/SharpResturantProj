import classes from "./Header.module.css";
import cart from "./cartIcon.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <p className={classes.heading}>ReactMeals</p>
      <span className="Cart-btn">
        <button className={classes["cart-btn"]}>
          <img src={cart} className={classes.cart} alt="cart image" />
          <span>Your Cart</span>
          <span className={classes.counter}>0</span>
        </button>
      </span>
    </header>
  );
};

export default Header;
