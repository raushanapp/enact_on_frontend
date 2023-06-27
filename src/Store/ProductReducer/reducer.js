import * as types from "./action.type";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = initialState, { type, action }) => {
  switch (types) {
    default: {
      return state;
    }
  }
};
