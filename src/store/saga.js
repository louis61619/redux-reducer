import { takeEvery, put, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_HOME_MULTIDATA
} from './home/constants';
import {
  changeBannersAction,
  changeRecommendAction
} from './home/acionCreaters';

function* fetchHomeMultidata(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  const data = res.data.data
  // yield put(changeBannersAction(data.banner.list))
  // yield put(changeRecommendAction(data.recommend.list))
  yield all([
    put(changeBannersAction(data.banner.list)),
    put(changeRecommendAction(data.recommend.list))
  ])
}

function* mySaga() {
  // takeLatest takeEvery 區別
  // takeLatest 每次只為監聽一個action
  // takeEvery 每一個都會執行
  // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
  yield all([
    takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
  ])
}

export default mySaga;