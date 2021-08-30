import { call, takeEvery, put } from 'redux-saga/effects';

import { login, loginSuccess } from 'src/pages/Login/slice';

// let callAPI = async ({ url, method, data }) => {
//   return await Axios({
//     url,
//     method,
//     data,
//   });
// };

function* userLogin() {
  try {
    // let result = yield call(() =>
    //   callAPI({ url: 'https://localhost:5000/login' }),
    // );
    yield put(loginSuccess({ isLogin: true }));
  } catch (e) {
    yield put({ type: 'TODO_FETCH_FAILED' });
  }
  console.log('Fetch login called');
}

export function* userSaga() {
  yield takeEvery(login, userLogin);
}
