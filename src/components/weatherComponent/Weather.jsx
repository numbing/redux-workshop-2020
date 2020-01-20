import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeather } from "./weatherAction";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      city: e.target.value
    });
  };

  componentDidMount() {
    this.props.getWeather();
  }
  clickHandler = () => {
    this.props.getWeather(this.state.city);
  };
  render() {
    if (!this.props.weatherData) {
      return <div>Loading...</div>;
    }
    return (
      <div className="weatherAppWrapper">
        <h1>Weather In berlin</h1>
        <input
          onChange={this.handleInputChange}
          type="text"
          value={this.state.city}
        />
        <button onClick={this.clickHandler}> city </button>
        <div className="weatherApp">
          <h3>pressure: {this.props.weatherData.pressure}</h3>
          <h3>humidity: {this.props.weatherData.humidity}</h3>
          <h3>temp_min: {this.props.weatherData.temp_min}</h3>
          <h3>temp_max: {this.props.weatherData.temp_max}</h3>
        </div>
      </div>
    );
  }
}

const mapStateToPtops = state => ({
  weatherData: state.weatherReducer.weather.main
});

export default connect(mapStateToPtops, { getWeather })(Weather);
