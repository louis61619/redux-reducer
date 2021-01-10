import {
  ADD_NUMBER,
  DECREMENT,
  INCREMENT,
  SUB_NUMBER
} from './constants.js'

const initialCounterState = {
  counter: 0
}

function counterReducer(state = initialCounterState, action) {
  switch(action.type) {
    case ADD_NUMBER:
      return {...state, counter: state.counter + action.num};
    case SUB_NUMBER:
      return {...state, counter: state.counter - action.num};
    case INCREMENT:
      return {...state, counter: state.counter +1}
    case DECREMENT:
      return {...state, counter: state.counter -1}
    default:
      return state
  }
}

export default counterReducer