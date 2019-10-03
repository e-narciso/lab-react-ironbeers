import React, { Component } from "react";
import Splash from "./Splash";
import allBeersImg from "../images/beers.png";
import randomBeerImg from "../images/random-beer.png";

class Home extends Component {
  render() {
    return (
      <div>
        <Splash image={allBeersImg} name="Beers" />
        <Splash image={randomBeerImg} name="Random Beer" />
      </div>
    );
  }
}

export default Home;
