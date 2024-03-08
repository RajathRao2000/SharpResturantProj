import classes from "./MealItem.module.css";

const MealItem = (props) => {
  console.log(props)
  return (
    <>
      <div className={classes.list}>
        <div className="details">
          <p className={classes.name}>{props.name}</p>
          <p className={classes.description}>{props.description}</p>
          <p className={classes.price}>${props.price}</p>
        </div>
        <form className={classes.itemform}>
          <label htmlFor={props.id}>
            Amount 
          <input id={props.id} type="number"/>
          </label>
          <button className={classes.button}>+Add</button>
        </form>
      </div>
      <hr />
    </>
  );
};

export default MealItem;
