import classes from "./Header.module.css";
import cart from "./cartIcon.svg";
import img from "./meals.jpg"

const Header = () => {
  return (
    <>
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
    <img className={classes.image} src={img} ></img>
    </>
  );
};

export default Header;
