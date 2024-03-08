import Header from "./Layout/Header/Header";
import Summary from "./Layout/summaryCard/Summary";
import classes from "./App.module.css";
import MealsList from "./Layout/MealsList/MealsList";

function App() {
  return (
    <div>
      <Header />
      <div className={classes.pagebody}>
        <Summary />
        <MealsList />
      </div>
    </div>
  );
}

export default App;
