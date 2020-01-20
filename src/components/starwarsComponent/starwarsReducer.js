const initalState = {
  starWarsData: []
};

export const starWarsReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_STARWARS":
      return {
        ...state,
        starWarsData: action.payload
      };
    default:
      return state;
  }
};
