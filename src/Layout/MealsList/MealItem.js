import { useContext } from "react";
import classes from "./MealItem.module.css";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cart = useContext(CartContext)
  const AddToCart=(e)=>{
    e.preventDefault()
    const numOfItems=Number(e.target[0].value)
    const obj={
      name: props.name,
      noOfItems: numOfItems,
      price: props.price
    }
    cart.addItem(obj)
  }
  return (
    <>
      <div className={classes.list}>
        <div className="details">
          <p className={classes.name}>{props.name}</p>
          <p className={classes.description}>{props.description}</p>
          <p className={classes.price}>${props.price}</p>
        </div>
        <form className={classes.itemform} onSubmit={(e)=>AddToCart(e)}>
          <label htmlFor={props.id}>
            Amount 
          <input id={props.id} min="0" type="number" />
          </label>
          <button className={classes.button} type="submit">+Add</button>
        </form>
      </div>
      <hr />
    </>
  );
};

export default MealItem;
