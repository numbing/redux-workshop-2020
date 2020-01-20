import { combineReducers } from "redux";
import { starWarsReducer } from "../components/starwarsComponent/starwarsReducer";
import { weatherReducer } from "../components/weatherComponent/weatherReducer";

export default combineReducers({
  starWarsReducer: starWarsReducer,
  weatherReducer: weatherReducer
});
