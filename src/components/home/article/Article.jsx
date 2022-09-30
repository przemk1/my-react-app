import React from "react";
import classes from "./Article.module.scss";
import fit from "../../.././images/fit.jpg";
import skinnyfat from "../../.././images/skinnyfat.jpg";
import fat from "../../.././images/fat.jpg";
import cm from "../../.././images/cm.jpg";

const Article = () => {
  return (
    <div>
      <article>
        <h2>W czym rzecz?</h2>
        <div className={classes.articles2}>
          <p>
            Wielu zna problem wylewania potów na siłowni, trzymania michy,
            skurpulatnego liczenia kalorii a efektów zero lub... ciągła budowa
            masy bo i tak wygladam szczupło. Gdzie w takim razie jest szczegół
            do sylwetki idealnej?
          </p>

          <img src={fit} alt="fit boy" />
        </div>
      </article>

      <article>
        <h2>
          Jaki jest problem większości ludzi na siłowni którzy porzucają ją po
          kilku latach gdyż nie osiągają sukcesu?
        </h2>
        <div className={classes.articles}>
          <img src={skinnyfat} alt="skinny fat" />
          <p>
            Wiekszość ludzi posiadają sylwetkę "chudotłusty" z ang. "skinny-fat"
            czyli wąskie barki, szczupłe ramiona, chude nogi a lekko odstający
            brzuch. Z jednej strony tacy ludzie dostają uwagi "ty szczupły
            jesteś" a z drugiej "zrzucił byś ten brzuch". Pierwsza myśl o
            siłowni i decyzja MASA bo gdzie redukcja z takimi ramionami? BŁĄD!!!
          </p>
        </div>
      </article>

      <article>
        <h2>Jaki tego rezultat?</h2>
        <div className={classes.articles2}>
          <p>
            Taki uczestnik siłowni waży pomiedzy 70 kg a 80 kg. Wie że "nabici"
            koledzy ważą znacznie więcej. Widzi w tym rozwiązanie. Oczywiście
            aby przybrać na masie oblicza swoje zapotrzebowanie kaloryczne i
            ustawia nadwyżkę kaloryczną którą sukcesywnie podnosi. Mimo
            jeedzenia 4000 kcal dziennie waga przybiera powoli. Gdy osiąga wagę
            ponad 80kg na siłownię najpierw wchodzi jego brzuch a póżniej on.
            Gdy osiąga 90 kg widzi że powoli zbliża się do celu jednak widzi że
            jego ciało składa się głónie z tłuszczu.
          </p>
          <img src={fat} alt="fat boy" />
        </div>
      </article>

      <article>
        <h2>
          Jaki jest rozwiązanie? Jaki jest klucz do sukcesu? Odpowiedź:
          DOPROWADZENIE DO WRAŻLIWOŚCI INSULINOWEJ czyli redukcja!!!
        </h2>
        <div className={classes.articles}>
          <img src={cm} alt="cm" />

          <p>
            Człowiek może wyglądać szczupło, ważyć 75kg a posiadać tkankę
            tłuszczową na poziomie 20%. Przy takim poziomie organizm nie będzie
            z pokarmu budował mięśni tylko magazynował w tłuszcz. Na nic się
            zdadzą ciężkie treningi. Aby doprowadzić do wysokiej wrażliwości
            insulinowej trzeba zredukować tkankę tłuszczową do 10%. Po
            osiągnięciu tego poziomu dopiero można rozpocząć budowanie
            jakościowej masy. Wtedy organizm ma wysoką wrażliwość insulinową i
            całe kalorie magazynuje głwnie w mięśnie. Przyjmuje się że ta
            wrażliwość zaczyna spadać przy 15% tkanki tłuszczowej. Wtedy znowu
            należy zbić do 10% i znowu zacząć masę aż do osiągnięcia sylwetki
            idelanej.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Article;
