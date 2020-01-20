import React from "react";
import { connect } from "react-redux";

const StarWarsCard = props => {
  // if (!props.results) {
  //   return <div>Loading....</div>;
  // }
  return (
    <div className="starWarsCard">
      {props.results &&
        props.results.map((e, i) => {
          return (
            <ul key={i} className="dataWrapper">
              <li>name: {e.name}</li>
              <li>hair color: {e.hair_color}</li>
              <li>eye color: {e.eye_color}</li>
            </ul>
          );
        })}
    </div>
  );
};
const mapStateToProps = state => ({
  results: state.starWarsReducer.starWarsData.results
});

export default connect(mapStateToProps)(StarWarsCard);
