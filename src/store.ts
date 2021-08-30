import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'src/rootReducer';
import rootSaga from 'src/rootSaga';

const sagaMiddleware = createSagaMiddleware({});
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), ...middlewares],
  devTools:
    /* istanbul ignore next line */
    process.env.NODE_ENV !== 'production' || process.env.PUBLIC_URL.length > 0,
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
