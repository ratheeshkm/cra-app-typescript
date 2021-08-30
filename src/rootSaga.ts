import { all } from 'redux-saga/effects';

import { userSaga } from 'src/pages/Login/saga';

export default function* rootSaga() {
  yield all([userSaga()]);
}
