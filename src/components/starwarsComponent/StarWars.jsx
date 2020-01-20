import React, { Component } from "react";
import { connect } from "react-redux";

class StarWars extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>i am star wars</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    state:state 
});

export default connect(mapStateToProps)(StarWars);
