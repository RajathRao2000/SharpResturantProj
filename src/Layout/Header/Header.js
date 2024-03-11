import classes from "./Header.module.css";
import cart from "./cartIcon.svg";
import img from "./meals.jpg"
import Cart from "../Cart/Cart";
import { createPortal } from "react-dom";
import { useState,useContext } from "react";
import CartContext from "../../store/cart-context";
const Header = () => {
  const [cartOpen,setCartOpen] = useState(false)
  const cartContext = useContext(CartContext)

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
          <span className={classes.counter}>{Object.keys(cartContext.items).length}</span>
        </button>
      </span>
      {cartOpen?createPortal(<Cart cartDetails={cartContext} closeCart={closeCartList} setCart/>, document.getElementById("cart")): null}

    </header>
    <img className={classes.image} src={img} ></img>

    </>
  );
};

export default Header;
