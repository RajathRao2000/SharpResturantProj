import mealsList from "./dummy-meals";
import MealItem from "./MealItem";
import classes from "./MealsList.module.css";
const MealsList = () => {
  let arr = mealsList.map((item) => {
    return (
      <MealItem
        name={item.name}
        description={item.description}
        price={item.price}
        key={item.id}
      />
    );
  });
  console.log(arr);

  return <div className={classes.MealsListCard}>{arr}</div>;
};

export default MealsList;
