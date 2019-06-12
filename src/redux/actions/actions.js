import { WEATHER_API, GET_CITY, DELETE_TAG } from "./actionsType";

export const getCity = () => dispatch => {
  const URL = "http://ip-api.com/json/";
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_CITY,
        payload: data.country
      });
    });
};

export const weatherApi = city => (dispatch, getState) => {
  const API = "92778bae3963f4ad63101cedc4b61656";
  const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API}`;
  fetch(weather)
    .then(result => result.json())
    .then(dataWeather => {
      if (dataWeather.cod === "404") {
        let data = { warning: true };
        dispatch({
          type: WEATHER_API,
          payload: data
        });
      } else {
        let state = getState();
        let arrayTags = state.tags;
        if (arrayTags.indexOf(dataWeather.name) === -1) {
          arrayTags.push(dataWeather.name);
        }
        let data = {
          city: dataWeather.name,
          speedWind: dataWeather.wind.speed,
          temp: Math.floor(dataWeather.main.temp - 273),
          humidity: dataWeather.main.humidity,
          clouds: dataWeather.clouds.all,
          warning: false,
          tags: arrayTags
        };
        dispatch({
          type: WEATHER_API,
          payload: data
        });
      }
    });
};

export const enterClick = e => dispatch => {
  if (e.key === "Enter") {
    if (e.target.value === "") {
      return;
    } else {
      dispatch(weatherApi(e.target.value));
    }
  }
};

export const handleClick = () => (dispatch, getState) => {
  dispatch(getCity());
  setTimeout(() => {
    const state = getState();
    dispatch(weatherApi(state.city));
  }, 400);
};

export const handleClickTag = e => dispatch => {
  dispatch(weatherApi(e.target.textContent));
};

export const deleteTag = e => (dispatch, getState) => {
  e.stopPropagation();
  let city = e.target.attributes.getNamedItem("data-city").value;
  let state = getState();
  let arrayTags = state.tags;
  arrayTags.splice(arrayTags.indexOf(city), 1);
  dispatch({
    type: DELETE_TAG,
    payload: arrayTags
  });
};
