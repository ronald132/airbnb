import { FETCH_RENTALS, FETCH_RENTAL_BY_ID_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  rentals: {
    data: []
  },
  rental: {
    data: {}
  }
};

export const rentalReducer = (
  previousState = INITIAL_STATE.rentals,
  action
) => {
  switch (action.type) {
    case FETCH_RENTALS:
      return { ...previousState, data: action.payloads };
    default:
      return previousState;
  }
};

export const selectedRentalReducer = (
  previousState = INITIAL_STATE.rental,
  action
) => {
  switch (action.type) {
    case FETCH_RENTAL_BY_ID_SUCCESS:
      return { ...previousState, data: action.payloads };
    default:
      return previousState;
  }
};
