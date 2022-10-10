import React, { useState } from "react";
import { useEffect, useRef } from "react";
import classes from "./Calculators.module.scss";
import Navigation from "../navigation/Navigation";

const Calculators = () => {
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [height, setHeight] = useState("");

  const myRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [res, setRes] = useState({
    weight: 0,
    waist: 0,
    height: 0,
  });
  const [isShown, setIsShown] = useState(false);

  const [indicators, setIndicators] = useState({
    bf: 0,
    bmi: 0,
  });

  useEffect(() => {
    const newBf =
      ((1.634 * res.waist - 0.1804 * res.weight - 98.42) * 100) /
      (res.weight * 2.2);
    const newBmi = res.weight / (res.height * res.height);

    setIndicators({
      bf: newBf,
      bmi: newBmi,
    });
  }, [res]);

  //let BF =
  // ((1.634 * res.waist - 0.1804 * res.weight - 98.42) * 100) /
  //  (res.weight * 2.2);
  //let BMI = res.weight / (res.height * res.height);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsShown(true);
    setRes({
      weight: weight,
      waist: waist,
      height: height,
    });
    myRef.current.scrollIntoView();
  };

  const Results = () => {
    return (
      <div>
        <div className={classes.results}>
          <h2>Twój wskaźnik poziomu tkanki tłuszczowej wynosi:</h2>
          <h4 className={classes.result}>{indicators.bf.toFixed(2)}</h4>
          <h2>Twój wskaźnik masy ciała wynosi:</h2>
          <h4 className={classes.result}>{indicators.bmi.toFixed(2)}</h4>
        </div>
        <div className={classes.conclusions}>
          <h2>WNIOSKI:</h2>
          <p>
            {indicators.bf < 10 ? (
              <p>
                Masz mniej niz 10% tkanki tłuszczowej, możesz przybierać na
                wadze
              </p>
            ) : null}
            {indicators.bf >= 10 && indicators.bf < 15 ? (
              <p>
                Masz odpowiedni poziom tkanki tłuszczowej pomiedzy 10% BF a
                15%BF. Możesz redukować do 10% lub masować do 15%
              </p>
            ) : null}
            {indicators.bf >= 15 ? (
              <p>
                Masz za wysoką tkankę tłuszczową. Musisz zredukować conajmniej
                poniżej 15%
              </p>
            ) : null}
          </p>
          <br />
          <br />
          <p>
            {indicators.bmi < 18.5 ? (
              <p>Masz niedowage. Przybieraj na wadze</p>
            ) : null}
            {indicators.bmi >= 18.5 ? (
              <p>
                Masz odpowiedni poziom masy ciała jednak możesz redukować do
                18,5 BMI
              </p>
            ) : null}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div class="app">
      <div class="BG"></div>
      <Navigation />
      <div className={classes.header}>
        <h2 className={classes.calc__header}>
          Wypełnij trzy pola aby obliczyc swój wskaźnik masy ciała BMI i poziom
          swojej tkanki tłuszczowej BF
        </h2>
      </div>
      <div className={classes.inputs}>
        <form onSubmit={(e) => handleSubmit(e)} className={classes.form__grid}>
          <p>Twoja masa ciała w kilogramach: </p>
          <input
            step="0.1"
            type="number"
            placeholder="kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />

          <p>Twój obwód pasa w centymatrach: </p>
          <input
            step="0.1"
            type="number"
            placeholder="cm"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            required
          />

          <p>Twój wzrost w metrach: </p>
          <input
            step="0.1"
            type="number"
            placeholder="m"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />

          <button type="submit" className={classes.calc__button}>
            OBLICZ
          </button>
        </form>
      </div>
      <div ref={myRef}>{isShown && <Results />}</div>
    </div>
  );
};

export default Calculators;
