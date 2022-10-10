import React from "react";
import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h2 className={classes.footer__header}>
        Dowiedz się co musisz zrobić w swoim przypadku
      </h2>
      <div className={classes.footer}>
        <div>
          <h3>Przejdź do kalkulatorów i oblicz swoje dane:</h3>
        </div>

        <div>
          <Link to="/calculators">
            <button className={classes.footer__button}>KALKULATORY</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
