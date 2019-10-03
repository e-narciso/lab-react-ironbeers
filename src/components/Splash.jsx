import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoremIpsum } from "react-lorem-ipsum";

class Splash extends Component {
  render() {
    return (
      <div className="col-12 text-justify">
        <div>
          <Link to="/beers">
            <img src={this.props.image} alt="" className="img-fluid" />
          </Link>
        </div>
        <div className="caption">
          <h4>{this.props.name}</h4>
          <LoremIpsum p={1} avgSentencesPerParagraph={3} />
        </div>
      </div>
    );
  }
}

export default Splash;
