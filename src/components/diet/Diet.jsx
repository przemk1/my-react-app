import React, { useState, createContext } from "react";
import classes from "./Diet.module.scss";
import Navigation from "../navigation/Navigation";
import Meal from "./meal/Meal";

export const DietContext = createContext();

const Diet = () => {
  const [macros, setMacros] = useState({});
  const provided = {
    value: macros,
    setValue: (value) => setMacros(value),
  };
  const [components, setComponents] = useState([1]);

  const addComponent = () => {
    const number = components.length + 1;
    setComponents([...components, number]);
  };

  const totalValues = (value) => {
    let sum = 0;
    Object.values(macros).forEach((e) => {
      sum += e[value];
    });
    return sum;
  };

  return (
    <DietContext.Provider value={provided}>
      <div className="app">
        <div className="BG"></div>
        <Navigation />
        <div className={classes.header}>
          <h2 className={classes.diet__header}>
            Ułóż swoją przykładową dietę
            <br />
            zgodnie ze swoim zapotrzebowaniem
          </h2>
        </div>
        <div>
          <div className={classes.line__1}>
            <div>
              <ul className={classes.rows1}>
                <li>Wybierz produkt</li>
                <li>Ilość gram</li>
              </ul>
            </div>
            <div>
              <ul className={classes.rows2}>
                <li>Białko</li>
                <li>Tłuszcze</li>
                <li>Węglowodany</li>
                <li>Kalorie</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <ul>
            {components.map((item) => (
              <Meal key={item} products={products} item={item} />
            ))}
          </ul>
        </div>
        <div>
          <div className={classes.line__1}>
            <div>
              <ul className={classes.rows1}>
                <li>Wybierz produkt</li>
                <li>Ilość gram</li>
              </ul>
            </div>
            <div>
              <ul className={classes.rows2}>
                <li>{totalValues("protein").toFixed(1)} g</li>
                <li>{totalValues("fat").toFixed(1)} g</li>
                <li>{totalValues("carbo").toFixed(1)} g </li>
                <li>{totalValues("kcal").toFixed()} kcal</li>
              </ul>
            </div>
          </div>
        </div>

        <button className={classes.diet__button} onClick={addComponent}>
          Dodaj produkt
        </button>
      </div>
    </DietContext.Provider>
  );
};

export default Diet;

const products = [
  {
    name: "Wybierz produkt...",
    protein: 0,
    fat: 0,
    carbo: 0,
    kcal: 0,
  },
  {
    name: "Pierś z Kurczaka",
    protein: 22,
    fat: 1,
    carbo: 0,
    kcal: 99,
  },
  {
    name: "Jaja kurze",
    protein: 11,
    fat: 8,
    carbo: 1,
    kcal: 121,
    tip: "Jedno jajko waży 60g.",
  },
  {
    name: "Chleb Graham",
    protein: 10,
    fat: 1.7,
    carbo: 62,
    kcal: 332,
    tip: "Jedna kromka waży 7g.",
  },
  {
    name: "Platki Owsiane",
    protein: 12,
    fat: 7,
    carbo: 62,
    kcal: 366,
  },
  {
    name: "Banan",
    protein: 1,
    fat: 0,
    carbo: 22,
    kcal: 95,
    tip: "Jeden średni obrany banan waży 110g.",
  },
  {
    name: "Kakao",
    protein: 20,
    fat: 11,
    carbo: 15,
    kcal: 307,
  },
  {
    name: "Mleko 1.5%",
    protein: 3,
    fat: 2,
    carbo: 5,
    kcal: 47,
  },
  {
    name: "Bialko WPC",
    protein: 79,
    fat: 7,
    carbo: 9,
    kcal: 415,
  },
  {
    name: "Węglowodany",
    protein: 0,
    fat: 0,
    carbo: 96,
    kcal: 384,
  },
  {
    name: "Olej Kokosowy",
    protein: 0,
    fat: 100,
    carbo: 0,
    kcal: 900,
  },
  {
    name: "Fasola Czerwona",
    protein: 8.1,
    fat: 0.8,
    carbo: 14,
    kcal: 111,
    opis: "Nasza Spizarnia",
  },
  {
    name: "Mieszanka Warzyw Meksykańska",
    protein: 3.9,
    fat: 0.6,
    carbo: 14,
    kcal: 87,
  },
  {
    name: "Koncentrat Pomidorowy 30%",
    protein: 5.6,
    fat: 1.5,
    carbo: 13.9,
    kcal: 92,
    opis: "30%",
  },
  {
    name: "Pomidory z puszki krojone",
    protein: 1.2,
    fat: 0,
    carbo: 7.5,
    kcal: 35,
    opis: "Nasza spizarnia z biedry",
  },
  {
    name: "Mięso mielone wieprzowo-wołowe",
    protein: 19,
    fat: 13,
    carbo: 0.2,
    kcal: 191,
    opis: "Biedra",
  },
  {
    name: "Mięso mielone z indyka",
    protein: 18,
    fat: 10,
    carbo: 0.5,
    kcal: 162,
    opis: "mielone z Indyka - lidl",
  },
  {
    name: "Makaron Razowy",
    protein: 12,
    fat: 2,
    carbo: 64,
    kcal: 336,
  },
  {
    name: "Kasza pęczak",
    protein: 12,
    fat: 7,
    carbo: 63,
    kcal: 380,
  },
  {
    name: "Ziemniaki",
    protein: 2,
    fat: 0,
    carbo: 13,
    kcal: 60,
  },
  {
    name: "Warzywa na patelnie",
    protein: 2,
    fat: 1,
    carbo: 10,
    kcal: 57,
  },
  {
    name: "Styropian",
    protein: 8,
    fat: 2,
    carbo: 80,
    kcal: 378,
    tip: "Jeden listek waży 7g.",
  },
  {
    name: "Kabanosy Drobiowe",
    protein: 28,
    fat: 35,
    carbo: 3,
    kcal: 439,
  },
  {
    name: "Schab Pieczony",
    protein: 30,
    fat: 19,
    carbo: 1,
    kcal: 291,
  },
  {
    name: "Żywiecka Krakus",
    protein: 22,
    fat: 14,
    carbo: 1,
    kcal: 216,
  },
  {
    name: "Pieczona pierś z indyka",
    protein: 28.5,
    fat: 1,
    carbo: 0,
    kcal: 123,
  },
  {
    name: "Makrela Wędzona",
    protein: 21,
    fat: 16,
    carbo: 0,
    kcal: 221,
  },
  {
    name: "Maslo Orzechowe",
    protein: 26,
    fat: 54,
    carbo: 4,
    kcal: 630,
  },
  {
    name: "Serek Wiejski",
    protein: 11,
    fat: 5,
    carbo: 2,
    kcal: 97,
  },
  {
    name: "Serek wiejski lekki",
    protein: 11,
    fat: 3,
    carbo: 2,
    kcal: 81,
  },
  {
    name: "Twaróg Chudy",
    protein: 20,
    fat: 1,
    carbo: 4,
    kcal: 99,
  },
  {
    name: "Dżem truskawkowy",
    protein: 0.2,
    fat: 0.1,
    carbo: 62.4,
    kcal: 252,
  },
  {
    name: "Lay's z Pieca",
    protein: 6,
    fat: 10,
    carbo: 74,
    kcal: 416,
  },
  {
    name: "Krakersy",
    protein: 9.9,
    fat: 17,
    carbo: 63,
    kcal: 452,
  },
];
