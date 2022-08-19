import axios from "axios";
import { put, call, takeEvery } from "redux-saga/effects";
import { LOAD_DATA } from "../actionTypes";
import { setData, setErrorData } from "../actions/index";

export function* handleLoadData() {
  try {
    const res = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );

    yield put(setData(res.data));
    // console.log(res.data);
  } catch (error) {
    yield put(setErrorData(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(LOAD_DATA, handleLoadData);
}
