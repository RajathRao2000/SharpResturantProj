import classes from "./Header.module.css";
import cart from "./cartIcon.svg";
import img from "./meals.jpg"
import Cart from "../Cart/Cart";
import { createPortal } from "react-dom";
import { useState } from "react";
const Header = () => {
  const [cartOpen,setCartOpen] = useState(false)

  const openCartList=()=>{
    setCartOpen(true)
  }

  const closeCartList=()=>{
    setCartOpen(false)
  }

  return (
    <>
    <header className={classes.header}>
      <p className={classes.heading}>ReactMeals</p>
      <span className="Cart-btn">
        <button className={classes["cart-btn"]} onClick={openCartList}>
          <img src={cart} className={classes.cart} alt="cart image" />
          <span>Your Cart</span>
          <span className={classes.counter}>0</span>
        </button>
      </span>
      {cartOpen?createPortal(<Cart closeCart={closeCartList} setCart/>, document.getElementById("cart")): null}

    </header>
    <img className={classes.image} src={img} ></img>

    </>
  );
};

export default Header;
