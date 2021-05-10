import { DECREMENT_COUNT, INCREMENT_COUNT } from "./testContants";

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNT,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNT,
  };
};
