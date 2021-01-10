import axios from 'axios';

import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
  FETCH_HOME_MULTIDATA
} from './constants.js'

// 輪播圖和推薦的action
export const changeBannersAction = banners => ({
  type: CHANGE_BANNERS,
  banners
})

export const changeRecommendAction = recommends => ({
  type: CHANGE_RECOMMENDS,
  recommends
})

// redux-thunk中定義action函數
export const getHomeMultidataAction = (dispatch, getState) => {
  console.log("action函數中", dispatch)

    axios({
      url: "http://123.207.32.32:8000/home/multidata"
    }).then(res => {
      console.log(res.data.data)
      const data = res.data.data
      dispatch(changeBannersAction(data.banner.list))
      dispatch(changeRecommendAction(data.recommend.list))
    })
}


// redux-saga攔截的action
export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA
}