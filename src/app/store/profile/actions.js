import * as types from '../profile/types';

export const changeName = (data) => ({
  type: types.CHANGE_NAME,
  payload: data
})

export const checkedCheckbox = (data) => ({
  type: types.CHANGE_CHECKBOX,
  payload: data
})
