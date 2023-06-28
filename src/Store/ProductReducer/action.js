import * as types from "./action.type";

import axios from "axios";

export const getMoviesData = () => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  return axios
    .get("https://mocki.io/v1/a41f3039-4c21-42bb-a886-d9a342a02ae9")
    .then((res) =>
      dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_DATA_FAILURE, payload: err }));
};
