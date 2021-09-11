import { takeEvery, put } from 'redux-saga/effects';
//import Axios from 'axios';

import { login /*loginSuccess */ } from 'src/pages/Login/slice';
//import { API_BASE_URL } from 'src/apiConfig';
/*
const callAPI = async ({ url, method, data }: any) => {
  return await Axios({
    url,
    method,
    data,
  });
};
*/

function* userLogin(): any {
  try {
    //const result = yield call(() => callAPI({ url: `${API_BASE_URL}/login` }));
    //yield put(loginSuccess({ isLogin: true }));
    yield put({ type: 'TODO_FETCH_FAILED' });
  } catch (e) {
    yield put({ type: 'TODO_FETCH_FAILED' });
  }
}

export function* userSaga(): any {
  yield takeEvery(login, userLogin);
}
