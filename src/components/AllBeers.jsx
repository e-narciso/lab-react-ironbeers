import React, { Component } from "react";

class AllBeers extends Component {
  getAllBeers = () => {
    return this.props.beers.map((each, i) => {
      return (
        <div className="row each-beer" key={i}>
          <div className="col-2">
            <img src={each.image_url} alt="" className="thumbnail"/>
          </div>
          <div className="col-8">
            <h2>{each.name}</h2>
            <h4>{each.tagline}</h4>
            <p>First brewed: {each.first_brewed}</p>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.getAllBeers()}</div>;
  }
}

export default AllBeers;
