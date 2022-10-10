import React, { useState } from "react";
import { useEffect, useRef } from "react";
import Navigation from "../navigation/Navigation";
import classes from "./Demand.module.scss";

const Training = (props) => {
  return (
    <div id="hidden-training">
      <div className={classes.form__group}>
        <label
          className={classes.title__small}
          //class="col-sm-4 control-label"
          //for="form-user-training-time"
        >
          Czas treningu
        </label>
        <div>
          <div>
            <input
              min="0"
              type="number"
              placeholder="Czas treningu"
              value={props.trainingTime}
              onChange={(e) => props.setTrainingTime(Number(e.target.value))}
              required
            />
            <span>minut</span>
          </div>
        </div>
      </div>
      <div className={classes.form__group}>
        <label
          className={classes.title__small}
          //class="col-sm-4 control-label"
          //for="form-user-training-count"
        >
          Ilość treningów w tygodniu
        </label>
        <div>
          <div>
            <select
              title="Ilość treningów w tygodniu"
              value={props.trainingWeeklyCount}
              onChange={(e) =>
                props.setTrainingWeeklyCount(Number(e.target.value))
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <span>razy w tygodniu</span>
          </div>
        </div>
      </div>
      <div className={classes.form__group}>
        <label
          className={classes.title__small}
          //class="col-sm-4 control-label"
        >
          Intensywność treningu
        </label>
        <div className={classes.inp}>
          <label>
            <input
              name="trainingEffortType"
              type="radio"
              value={1}
              onChange={(e) =>
                props.setTrainingEffortType(Number(e.target.value))
              }
            />
            Mała
          </label>
          <label>
            <input
              name="trainingEffortType"
              type="radio"
              value={2}
              onChange={(e) =>
                props.setTrainingEffortType(Number(e.target.value))
              }
            />
            Średnia
          </label>
          <label>
            <input
              name="trainingEffortType"
              type="radio"
              value={3}
              onChange={(e) =>
                props.setTrainingEffortType(Number(e.target.value))
              }
            />
            Duża
          </label>
        </div>
      </div>
    </div>
  );
};

const Cardio = (props) => {
  return (
    <div id="hidden-cardio">
      <div className={classes.form__group}>
        <label
          className={classes.title__small}
          //class="col-sm-4 control-label"
          //for="form-user-cardio-time"
        >
          Czas treningu
        </label>
        <div>
          <div>
            <input
              step="0.1"
              min="0"
              type="number"
              placeholder="Czas treningu"
              value={props.cardioTime}
              onChange={(e) => props.setCardioTime(Number(e.target.value))}
              required
            />
            <span>minut</span>
          </div>
        </div>
      </div>
      <div className={classes.form__group}>
        <label
          className={classes.title__small}
          //class="col-sm-4 control-label"
          //for="form-user-cardio-count"
        >
          Ilość treningów w tygodniu
        </label>
        <div>
          <div>
            <select
              title="Ilość treningów w tygodniu"
              value={props.cardioWeeklyCount}
              onChange={(e) =>
                props.setCardioWeeklyCount(Number(e.target.value))
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <span>razy w tygodniu</span>
          </div>
        </div>
      </div>
      <div className={classes.form__group}>
        <label
          className={classes.title__small}
          //class="col-sm-4 control-label"
        >
          Intensywność treningu
        </label>
        <div className={classes.inp}>
          <label>
            <input
              name="cardioEffortType"
              type="radio"
              value={1}
              onChange={(e) =>
                props.setCardioEffortType(Number(e.target.value))
              }
            />
            Mała
          </label>
          <label>
            <input
              name="cardioEffortType"
              type="radio"
              value={2}
              onChange={(e) =>
                props.setCardioEffortType(Number(e.target.value))
              }
            />
            Średnia
          </label>
          <label>
            <input
              name="cardioEffortType"
              type="radio"
              value={3}
              onChange={(e) =>
                props.setCardioEffortType(Number(e.target.value))
              }
            />
            Duża
          </label>
        </div>
      </div>
    </div>
  );
};

const Kcal = (props) => {
  return (
    <div className={classes.kcal}>
      <div className={classes.form__group}>
        <label
          className={classes.title__small}
          //class="col-sm-4 control-label"
          //for="form-calories-amount"
        >
          Twoja ilość kalorii
        </label>
        <div>
          <div>
            {typeof props.indicators.countedCalories === "number"
              ? props.indicators.countedCalories.toFixed()
              : 0}
            <span>kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Demand = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [activityType, setActivityType] = useState("");
  const [caloriesDiff, setCaloriesDiff] = useState("");
  const [trainingTime, setTrainingTime] = useState("");
  const [trainingWeeklyCount, setTrainingWeeklyCount] = useState("");
  const [trainingEffortType, setTrainingEffortType] = useState("");
  const [cardioTime, setCardioTime] = useState("");
  const [cardioWeeklyCount, setCardioWeeklyCount] = useState("");
  const [cardioEffortType, setCardioEffortType] = useState("");

  const myRef = useRef(null);

  const [isShown, setIsShown] = useState(false);

  const [showTraining, setShowTraining] = useState(false);
  const [showCardio, setShowCardio] = useState(false);

  const [res, setRes] = useState({
    gender: 0,
    weight: 0,
    height: 0,
    age: 0,
    bodyType: 0,
    activityType: 0,
    caloriesDiff: 0,
    trainingTime: 0,
    trainingWeeklyCount: 0,
    trainingEffortType: 0,
    cardioTime: 0,
    cardioWeeklyCount: 1,
    cardioEffortType: 1,
    showTraining: false,
    showCardio: false,
  });

  const [indicators, setIndicators] = useState({
    cardioCaloriesBurned: 0,
    trainingCaloriesBurned: 0,
    countedCalories: 0,
    countActivity: 0,
    trainingEffort: 0,
    trainingEffortSecond: 0,
    cardioEffort: 0,
    cardioEffortSecond: 0,
    bmr: 0,
    totalCaloriesBurned: 0,
    rawBalance: 0,
    balance: 0,
  });

  useEffect(() => {
    const newCountActivity = () => {
      if (res.bodyType === 0.1 && res.activityType === 1) {
        return 700;
      } else if (res.bodyType === 0.1 && res.activityType === 2) {
        return 800;
      } else if (res.bodyType === 0.1 && res.activityType === 3) {
        return 900;
      } else if (res.bodyType === 0.075 && res.activityType === 1) {
        return 400;
      } else if (res.bodyType === 0.075 && res.activityType === 2) {
        return 450;
      } else if (res.bodyType === 0.075 && res.activityType === 3) {
        return 500;
      } else if (res.bodyType === 0.06 && res.activityType === 1) {
        return 200;
      } else if (res.bodyType === 0.06 && res.activityType === 2) {
        return 350;
      } else if (res.bodyType === 0.06 && res.activityType === 3) {
        return 400;
      }
    };

    const newTrainingEffort = () => {
      if (res.bodyType === 0.1 && res.trainingEffortType === 1) {
        return 8;
      } else if (res.bodyType === 0.1 && res.trainingEffortType === 2) {
        return 8.5;
      } else if (res.bodyType === 0.1 && res.trainingEffortType === 3) {
        return 9;
      } else if (res.bodyType === 0.075 && res.trainingEffortType === 1) {
        return 7.5;
      } else if (res.bodyType === 0.075 && res.trainingEffortType === 2) {
        return 8;
      } else if (res.bodyType === 0.075 && res.trainingEffortType === 3) {
        return 8.5;
      } else if (res.bodyType === 0.06 && res.trainingEffortType === 1) {
        return 7;
      } else if (res.bodyType === 0.06 && res.trainingEffortType === 2) {
        return 7.5;
      } else if (res.bodyType === 0.06 && res.trainingEffortType === 3) {
        return 8;
      }
    };

    const newTrainingEffortSecond = () => {
      if (res.bodyType === 0.1 && res.trainingEffortType === 1) {
        return 0.05;
      } else if (res.bodyType === 0.1 && res.trainingEffortType === 2) {
        return 0.06;
      } else if (res.bodyType === 0.1 && res.trainingEffortType === 3) {
        return 0.07;
      } else if (res.bodyType === 0.075 && res.trainingEffortType === 1) {
        return 0.05;
      } else if (res.bodyType === 0.075 && res.trainingEffortType === 2) {
        return 0.055;
      } else if (res.bodyType === 0.075 && res.trainingEffortType === 3) {
        return 0.065;
      } else if (res.bodyType === 0.06 && res.trainingEffortType === 1) {
        return 0.04;
      } else if (res.bodyType === 0.06 && res.trainingEffortType === 2) {
        return 0.05;
      } else if (res.bodyType === 0.06 && res.trainingEffortType === 3) {
        return 0.06;
      }
    };

    const newCardioEffort = () => {
      if (res.bodyType === 0.1 && res.cardioEffortType === 1) {
        return 6;
      } else if (res.bodyType === 0.1 && res.cardioEffortType === 2) {
        return 8;
      } else if (res.bodyType === 0.1 && res.cardioEffortType === 3) {
        return 10;
      } else if (res.bodyType === 0.075 && res.cardioEffortType === 1) {
        return 6;
      } else if (res.bodyType === 0.075 && res.cardioEffortType === 2) {
        return 7;
      } else if (res.bodyType === 0.075 && res.cardioEffortType === 3) {
        return 9;
      } else if (res.bodyType === 0.06 && res.cardioEffortType === 1) {
        return 5;
      } else if (res.bodyType === 0.06 && res.cardioEffortType === 2) {
        return 6;
      } else if (res.bodyType === 0.06 && res.cardioEffortType === 3) {
        return 8;
      }
    };

    const newCardioEffortSecond = () => {
      if (res.cardioEffortType === 1) {
        return 5;
      } else if (res.cardioEffortType === 2) {
        return 35;
      } else if (res.cardioEffortType === 3) {
        return 180;
      }
    };
    const newBmr = () =>
      9.99 * res.weight + 6.25 * res.height - 4.92 * res.age + res.gender;
    const newCardioCaloriesBurned = () => {
      if (res.showCardio === true) {
        return (
          res.cardioTime * res.cardioWeeklyCount * newCardioEffort() +
          newCardioEffortSecond()
        );
      } else return 0;
    };

    const newTrainingCaloriesBurned = () => {
      if (res.showTraining === true) {
        return (
          res.trainingTime * res.trainingWeeklyCount * newTrainingEffort() +
          newBmr() * newTrainingEffortSecond()
        );
      } else return 0;
    };

    const newTotalCaloriesBurned =
      (newTrainingCaloriesBurned() + newCardioCaloriesBurned()) / 7;
    const newRawBalance =
      newBmr() + (newTotalCaloriesBurned + newCountActivity());
    console.log(newBmr());
    console.log(newTotalCaloriesBurned);
    console.log(newCountActivity());
    const newBalance = newRawBalance + newRawBalance * res.bodyType;

    // const newBalance = parseInt(
    //   indicators.rawBalance + indicators.rawBalance * res.bodyType
    // );
    const newCountedCalories = newBalance + res.caloriesDiff;

    // console.log(indicators.rawBalance);
    // console.log(indicators.balance);

    setIndicators({
      countActivity: newCountActivity(),
      trainingEffort: newTrainingEffort(),
      trainingEffortSecond: newTrainingEffortSecond(),
      cardioEffort: newCardioEffort(),
      cardioEffortSecond: newCardioEffortSecond(),
      totalCaloriesBurned: newTotalCaloriesBurned,
      rawBalance: newRawBalance,
      balance: newBalance,
      cardioCaloriesBurned: newCardioCaloriesBurned(),
      trainingCaloriesBurned: newTrainingCaloriesBurned(),
      countedCalories: newCountedCalories,
      bmr: newBmr(),
    });
    console.log(indicators);
  }, [res]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsShown(true);
    setRes({
      gender: gender,
      weight: weight,
      height: height,
      age: age,
      bodyType: bodyType,
      activityType: activityType,
      caloriesDiff: caloriesDiff,
      trainingTime: trainingTime,
      trainingWeeklyCount: trainingWeeklyCount,
      trainingEffortType: trainingEffortType,
      cardioTime: cardioTime,
      cardioWeeklyCount: cardioWeeklyCount,
      cardioEffortType: cardioEffortType,
      showTraining: showTraining,
      showCardio: showCardio,
    });
    myRef.current.scrollIntoView();
    console.log(res);
  };

  // const setTrainingEnabled1 = (event) => {
  //   event.preventDefault();
  //   setIsShownTraining(true);
  //   setRes({
  //     gender: gender,
  //     weight: weight,
  //     height: height,
  //     age: age,
  //     bodyType: bodyType,
  //     activityType: activityType,
  //     caloriesDiff: caloriesDiff,
  //     trainingTime: trainingTime,
  //     trainingWeeklyCount: trainingWeeklyCount,
  //     trainingEffortType: trainingEffortType,
  //     cardioTime: cardioTime,
  //     cardioWeeklyCount: cardioWeeklyCount,
  //     cardioEffortType: cardioEffortType,
  //     trainingEnabled: trainingEnabled,
  //     cardioEnabled: cardioEnabled,
  //   });
  // };

  // const setCardioEnabled1 = (event) => {
  //   event.preventDefault();
  //   setIsShownCardio(true);
  //   setRes({
  //     gender: gender,
  //     weight: weight,
  //     height: height,
  //     age: age,
  //     bodyType: bodyType,
  //     activityType: activityType,
  //     caloriesDiff: caloriesDiff,
  //     trainingTime: trainingTime,
  //     trainingWeeklyCount: trainingWeeklyCount,
  //     trainingEffortType: trainingEffortType,
  //     cardioTime: cardioTime,
  //     cardioWeeklyCount: cardioWeeklyCount,
  //     cardioEffortType: cardioEffortType,
  //     trainingEnabled: trainingEnabled,
  //     cardioEnabled: cardioEnabled,
  //   });
  // };

  return (
    <div className="app">
      <div className="BG"></div>
      <Navigation />
      <div className={classes.header}>
        <h2 className={classes.demand__header}>
          Oblicz swoje zapotrzebowanie kaloryczne
        </h2>
      </div>
      <form
        className={classes.form}
        //class="form-horizontal"
        //id="user-demand-form"
      >
        <div role="document">
          <div>
            <div>
              {/* Tu jest wnetrze modal */}
              <div>
                <div className={classes.form__group}>
                  <label
                    className={classes.title__small}
                    //class="col-sm-4 control-label"
                  >
                    Płeć
                  </label>
                  <div className={classes.inp}>
                    <label>
                      <input
                        name="gender"
                        type="radio"
                        value={5}
                        onChange={(e) => setGender(Number(e.target.value))}
                        //checked={gender === 5}
                      />
                      Mężczyzna
                    </label>
                    <label>
                      <input
                        name="gender"
                        type="radio"
                        value={-161}
                        //checked={gender === -161}
                        onChange={(e) => setGender(Number(e.target.value))}
                      />
                      Kobieta
                    </label>
                  </div>
                </div>
                <div className={classes.form__group}>
                  <label
                    className={classes.title__small}
                    //class="col-sm-4 control-label"
                    //for="form-user-age"
                  >
                    Twój wiek
                  </label>
                  <div>
                    <div>
                      <input
                        step="0.1"
                        min="0"
                        type="number"
                        placeholder="Twój wiek"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        required
                      />
                      <span>lat</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.form__group}>
                <label
                  className={classes.title__small}
                  //class="col-sm-4 control-label"
                  //for="form-user-weight"
                >
                  Twoja waga
                </label>
                <div>
                  <div>
                    <input
                      step="0.1"
                      min="0"
                      type="number"
                      placeholder="Waga w kilogramach"
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      required
                    />
                    <span>kg</span>
                  </div>
                </div>
              </div>
              <div>
                <div className={classes.form__group}>
                  <label
                    className={classes.title__small}
                    //class="col-sm-4 control-label"
                    //for="form-user-height"
                  >
                    Twój wzrost
                  </label>
                  <div>
                    <div>
                      <input
                        step="0.1"
                        min="0"
                        type="number"
                        placeholder="Wzrost w centymetrach"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        required
                      />
                      <span>cm</span>
                    </div>
                  </div>
                </div>
                <div className={classes.form__group}>
                  <label
                    className={classes.title__small}
                    //class="col-sm-4 control-label"
                  >
                    Typ budowy
                  </label>
                  <div className={classes.inp}>
                    <label>
                      <input
                        name="bodyType"
                        type="radio"
                        value={0.1}
                        onChange={(e) => setBodyType(Number(e.target.value))}
                      />
                      Ektomorfik
                    </label>
                    <label>
                      <input
                        name="bodyType"
                        type="radio"
                        value={0.075}
                        onChange={(e) => setBodyType(Number(e.target.value))}
                      />
                      Mezomorfik
                    </label>
                    <label>
                      <input
                        name="bodyType"
                        type="radio"
                        value={0.06}
                        onChange={(e) => setBodyType(Number(e.target.value))}
                      />
                      Endomorfik
                    </label>
                  </div>
                </div>
                <div className={classes.form__group}>
                  <label
                    className={classes.title__small}
                    //class="col-sm-4 control-label"
                  >
                    Dzienna aktywność (poza treningami)
                  </label>
                  <div className={classes.inp}>
                    <label>
                      <input
                        name="activityType"
                        type="radio"
                        value={1}
                        onChange={(e) =>
                          setActivityType(Number(e.target.value))
                        }
                      />
                      Mała
                    </label>
                    <label>
                      <input
                        name="activityType"
                        type="radio"
                        value={2}
                        onChange={(e) =>
                          setActivityType(Number(e.target.value))
                        }
                      />
                      Średnia
                    </label>
                    <label>
                      <input
                        name="activityType"
                        type="radio"
                        value={3}
                        onChange={(e) =>
                          setActivityType(Number(e.target.value))
                        }
                      />
                      Duża
                    </label>
                  </div>
                </div>

                <div className={classes.form__group}>
                  <div
                    className={classes.training}
                    //class="col-sm-offset-4 col-sm-8 checkbox"
                  >
                    <label className={classes.checkbox}>
                      <input
                        value="showTraining"
                        //onChange={(e) => setTrainingEnabled1(e.target.checked)}
                        onChange={() => setShowTraining(!showTraining)}
                        type="checkbox"
                        id="training-checkbox"
                      />
                      <p>Trening siłowy</p>
                    </label>
                  </div>
                </div>
                {showTraining ? (
                  <Training
                    trainingTime={trainingTime}
                    setTrainingTime={setTrainingTime}
                    setTrainingEffortType={setTrainingEffortType}
                    setTrainingWeeklyCount={setTrainingWeeklyCount}
                    trainingWeeklyCount={trainingWeeklyCount}
                  />
                ) : null}
                {/* <div ref={myRef}>{isShownTraining && <Training />}</div> */}

                <div className={classes.form__group}>
                  <div
                    className={classes.training}
                    //class="col-sm-offset-4 col-sm-8 checkbox"
                  >
                    <label className={classes.checkbox}>
                      <input
                        value="showCardio"
                        //onChange={(e) => setCardioEnabled1(e.target.checked)}
                        onChange={() => setShowCardio((prev) => !prev)}
                        type="checkbox"
                        id="cardio-checkbox"
                      />
                      <p>Trening aerobowy</p>
                    </label>
                  </div>
                </div>
                {showCardio ? (
                  <Cardio
                    cardioTime={cardioTime}
                    setCardioTime={setCardioTime}
                    setCardioEffortType={setCardioEffortType}
                    setCardioWeeklyCount={setCardioWeeklyCount}
                    cardioWeeklyCount={cardioWeeklyCount}
                  />
                ) : null}
                {/* <div ref={myRef}>{showCardio && <Cardio />}</div> */}
                <div className={classes.paragraph}>
                  Jeżeli chcesz zrzucić wagę ustal deficyt kaloryczny np. na
                  poziomie -300kcal. <br /> Jeżeli chcesz przybierać na wadzę
                  dodaj do zapotrzebowania np 300kcal.
                </div>
                <div className={classes.form__group}>
                  <div
                    className={classes.title__small__kcal}
                    //class="col-sm-4 control-label"
                    //for="form-user-calories-difference"
                  >
                    Różnica kaloryczna
                  </div>
                  <div>
                    <div>
                      <input
                        id="form-user-calories-difference"
                        placeholder="Różnica kaloryczna"
                        step="0.1"
                        min="0"
                        type="number"
                        value={caloriesDiff}
                        onChange={(e) =>
                          setCaloriesDiff(Number(e.target.value))
                        }
                        required
                      />
                      <span>kcal</span>
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className={classes.demand__button}
                      >
                        OBLICZ
                      </button>
                      <span>
                        <a
                          href="#"
                          data-toggle="popover"
                          data-placement="auto top"
                          data-trigger="focus"
                          title="Zalecana różnica w przypadku redukcji: -300kcal."
                          data-content="Zalecana różnica w przypadku zwiększenia masy: +300kcal."
                        ></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div ref={myRef}>
                {isShown && <Kcal indicators={indicators} />}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Demand;
