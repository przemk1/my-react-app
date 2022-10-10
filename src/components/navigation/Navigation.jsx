import React from "react";
import classes from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={classes.nav}>
      <Link to="/">
        <nav> STRONA GŁÓWNA </nav>
      </Link>

      <Link to="/calculators">
        <nav> KALKULATORY </nav>
      </Link>

      <Link to="/demand">
        <nav> ZAPOTRZEBOWANIE </nav>
      </Link>

      <Link to="/diet">
        <nav> DIETA </nav>
      </Link>
    </div>
  );
};

export default Navigation;
