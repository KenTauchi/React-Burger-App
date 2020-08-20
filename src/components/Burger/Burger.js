import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./Burgeringredient/Burgeringredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        console.log(props.ingredients[igKey]);
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  // or flat() works as well.

  // Object.keys(X) can extract the property of object X and convert it to array.
  // Next, creating an empty array which length corresponds with the value of igKey.
  //   At last, map the empty array and fill the empty array with the key prop and the type prop.
  //   Then flatten the array by the reduce/flat()

  console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
