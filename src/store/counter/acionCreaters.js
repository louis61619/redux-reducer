

import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
} from './constants.js'

// import * as actionTypes from './constants';

// export const addAcion = (num) => {
//   return {
//     type: "ADD_NUMBER",
//     num
//   }
// }

export const addAction = num => (
  {
    type: ADD_NUMBER,
    num
  }
)

export const subAction = num => ({
  type: SUB_NUMBER,
  num
})

export const inAction = () => ({
  type: INCREMENT,
})

export const deAction = () => ({
  type: DECREMENT,
})