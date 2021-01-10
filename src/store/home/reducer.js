import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS
} from './constants.js'

const initialHomeInState = {
  banners: [],
  recommends: []
}

function homeReducer(state = initialHomeInState, action) {
  switch(action.type) {
    case CHANGE_BANNERS:
      return {...state, banners: action.banners}
    case CHANGE_RECOMMENDS:
      return {...state, recommends: action.recommends}
    default:
      return state
  }
}


export default homeReducer