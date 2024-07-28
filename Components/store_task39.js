import { createStore } from 'redux';

const initialState = {
  text: ''
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

const store = createStore(textReducer);

export default store;