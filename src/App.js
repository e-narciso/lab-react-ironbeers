import React, { Component } from "react";
import "./App.css";
import axios from "axios";
// import Splash from "./components/Splash";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";

class App extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then(response => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Home /> */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/beers" component={() => <AllBeers beers={this.state.beers} />}></Route>
          <Route path="/random-beer" component={RandomBeer}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
