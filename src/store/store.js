import { configureStore , combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import rootSaga from './saga';
import {persistReducer} from 'redux-persist'
import { modalRootReducer, authRootReducer, profileRootReducer, jobRootReducer } from './reducer';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

// setup saga middleware
const sagaMiddleware = createSagaMiddleware();
const presistconfg = {
  key: 'root'
,
stateReconciler: autoMergeLevel2,
version: 1, storage}
// create root reducer
const rootReducer = combineReducers({
  auth: authRootReducer,
  modal: modalRootReducer,
  job: jobRootReducer,
  profile: profileRootReducer
});
const persistedstate = persistReducer(presistconfg , rootReducer)
const store = configureStore({
  reducer: persistedstate,
  devTools: true,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
