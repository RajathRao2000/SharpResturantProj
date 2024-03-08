import mealsList from "./dummy-meals";
import MealItem from "./MealItem";
import classes from "./MealsList.module.css";
const MealsList = () => {

  return (
    <div className={classes.MealsListCard}>
      {mealsList.map((item) => {
        return (
          <MealItem
            name={item.name}
            description={item.description}
            price={item.price}
            key={item.id}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default MealsList;
