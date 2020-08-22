import React from "react";
import Aux from "../../../hoc/Aux";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>The burger includes the following ingredients:</p>
      <ul className={classes.OrderSummary}>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType={"Danger"} clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType={"Success"} clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
