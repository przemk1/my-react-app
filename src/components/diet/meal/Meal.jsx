import React, { useState } from "react";
import { useEffect, useRef } from "react";
import classes from "./Meal.module.scss";

const Meal = (props) => {
  const [meals, setMeals] = useState("");
  const [ammount, setAmmount] = useState("");
  console.log(props.protein);
  const [res, setRes] = useState({
    ammount: 0,
    meals: 0,
  });

  const emitMeals = () => {
    props.countMeals({
      protein: (meals.protein * ammount) / 100,
      fat: (meals.fat * ammount) / 100,
      carbo: (meals.carbo * ammount) / 100,
      kcal: (meals.kcal * ammount) / 100,
    });
  };

  const ammountChange = (e) => {
    setAmmount(e.target.value);
    setTimeout(() => {
      emitMeals();
    });
  };

  const mealsChange = (e) => {
    setMeals(props.products.find((product) => product.name === e.target.value));
    setTimeout(() => {
      emitMeals();
    });
    props.setProtein(totalProtein);
  };

  console.log(totalProtein);

  return (
    <div className={classes.line__1}>
      <div className={classes.rows1}>
        <div>
          <div>
            <span>
              <i></i>
            </span>
            <select value={meals.name} onChange={(e) => mealsChange(e)}>
              {props.products.map((product) => (
                <option value={product.name} key={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <input
            type="number"
            value={ammount}
            onChange={(e) => ammountChange(e)}
            step="10"
            min="0"
            max="1000"
            placeholder="ilość gram"
          />
        </div>
      </div>
      <div>
        <div>
          <ul className={classes.rows2}>
            <li>{totalProtein} g</li>
            <li>{(meals.fat * ammount) / 100} g</li>
            <li>{(meals.carbo * ammount) / 100} g</li>
            <li>{(meals.kcal * ammount) / 100} kcal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Meal;
