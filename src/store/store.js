import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import { modalRootReducer, authRootReducer } from './reducer';

// setup saga middleware
const sagaMiddleware = createSagaMiddleware();

// create root reducer
const rootReducer = {
  auth: authRootReducer,
  modal: modalRootReducer
};

// setup store
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
