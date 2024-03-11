import Header from "./Layout/Header/Header";
import Summary from "./Layout/summaryCard/Summary";
import classes from "./App.module.css";
import MealsList from "./Layout/MealsList/MealsList";
import CartProvider from "./store/cart-provider";

function App() {
  return (
    <CartProvider>
      <Header />
      <div className={classes.pagebody}>
        <Summary />
        <MealsList />
      </div>
    </CartProvider>
  );
}

export default App;
