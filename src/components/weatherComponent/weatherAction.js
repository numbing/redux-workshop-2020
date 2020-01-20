import axios from "axios";

export const getWeather = (city = "berlin") => dispatch => {
  const API_KEY = "e5ced403947117877134523bd0915d32\n";
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},de&appid=${API_KEY}&units=metric`
    )
    .then(res =>
      dispatch({
        type: "GET_WEATHER",
        payload: res.data
      })
    );
};


// export const getWeatherCity = (city) => dispatch => {
//     const API_KEY = "e5ced403947117877134523bd0915d32\n";
//     axios
//       .get(
//         `http://api.openweathermap.org/data/2.5/weather?q=${city},de&appid=${API_KEY}&units=metric`
//       )
//       .then(res =>
//         dispatch({
//           type: "GET_WEATHER",
//           payload: res.data
//         })
//       );
//   };
  
