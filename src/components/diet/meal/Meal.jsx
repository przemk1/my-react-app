import React, { useState, useContext } from "react";
import { useEffect } from "react";
import classes from "./Meal.module.scss";
import { DietContext } from "../Diet";

const Meal = (props) => {
  const [meals, setMeals] = useState("");
  const [ammount, setAmmount] = useState("");
  const [res, setRes] = useState({
    ammount: 0,
    meals: 0,
  });

  const provided = useContext(DietContext);

  const totalProtein = meals.protein ? (meals.protein * ammount) / 100 : 0;
  const totalFat = meals.fat ? (meals.fat * ammount) / 100 : 0;
  const totalCarbo = meals.carbo ? (meals.carbo * ammount) / 100 : 0;
  const totalKcal = meals.kcal ? (meals.kcal * ammount) / 100 : 0;

  const ammountChange = (e) => {
    setAmmount(e.target.value);
  };

  const mealsChange = (e) => {
    setMeals(props.products.find((product) => product.name === e.target.value));
  };

  useEffect(() => {
    provided.setValue({
      ...provided.value,
      [props.item]: {
        protein: totalProtein,
        fat: totalFat,
        carbo: totalCarbo,
        kcal: totalKcal,
      },
    });
  }, [meals, ammount]);

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
            <li>{totalProtein.toFixed(1)} g</li>
            <li>{totalFat.toFixed(1)} g</li>
            <li>{totalCarbo.toFixed(1)} g</li>
            <li>{totalKcal.toFixed()} kcal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Meal;
