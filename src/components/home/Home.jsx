import React from "react";
import Article from "./article/Article";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Navigation from "../navigation/Navigation";

const Home = () => {
  return (
    <div class="app">
      <div class="BG"></div>
      <Navigation />
      <Header />
      <Article />
      <Footer />
    </div>
  );
};

export default Home;
