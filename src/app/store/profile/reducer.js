import * as types from './types';

const initialState = {
  name: 'Goga',
  checked: false
}

export const profileReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        name: payload
      }
    case types.CHANGE_CHECKBOX:
      return {
        ...state,
        checked: payload
      }
    default:
      return state
  }
}
