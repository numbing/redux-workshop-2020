import React, { Component } from "react";
import { connect } from "react-redux";
import { getStarWarsData } from "./starwarsAction";
import StarWarsCard from './StarWarsCard'

class StarWars extends Component {
  componentDidMount() {
    this.props.getStarWarsData();
  }
  render() {
    console.log(this.props);
    return (
      <div className="starWarsMain">
        <h1>
          all charechter of startwars counted and they are :
          {this.props.charechterCount}
        </h1>
        <StarWarsCard/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  charechterCount: state.starWarsReducer.starWarsData.count
});

export default connect(mapStateToProps, { getStarWarsData })(StarWars);
