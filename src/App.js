import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBarMain from './components/navbar/navbarMain'

import Weather from "./components/weatherComponent/Weather";
import StarWars from "./components/starwarsComponent/StarWars";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBarMain/>
            <Switch>
              <Route exact path="/" component={StarWars} />
              <Route exact path="/weather" component={Weather} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
