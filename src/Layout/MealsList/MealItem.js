import classes from "./MealItem.module.css"

const MealItem = (props) => {
  return (
  <div className={classes.list}>
    <p className={classes.name}>{props.name}</p>
    <p className={classes.description}>{props.description}</p>
    <p className={classes.price}>${props.price}</p>
    <hr></hr>
  </div>
  )
};

export default MealItem;
