import * as types from "./action.type";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError:false
      }
    }
    case types.GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data:payload
      }
    }
    case types.GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError:true
      }
    }
    default: {
      return state;
    }
  }
};
