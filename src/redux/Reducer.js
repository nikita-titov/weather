import { WEATHER_API, GET_CITY, DELETE_TAG } from "./actions/actionsType";

const initialState = {
  city: "",
  speedWind: "",
  temp: "",
  humidity: "",
  clouds: "",
  warning: false,
  tags: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY:
      return {
        ...state,
        city: action.payload
      };

    case WEATHER_API:
      return {
        ...state,
        ...action.payload
      };

    case DELETE_TAG:
      return {
        ...state,
        tags: [...action.payload]
      };

    default:
      return state;
  }
};

export default Reducer;
