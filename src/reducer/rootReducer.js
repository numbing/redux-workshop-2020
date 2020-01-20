import { combineReducers } from "redux";
import { starWarsReducer } from "../components/starwarsComponent/starwarsReducer";

export default combineReducers({
    starWarsReducer: starWarsReducer
});
