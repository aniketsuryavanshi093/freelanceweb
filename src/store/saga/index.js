/* eslint-disable no-unused-vars */
import { all, takeLatest } from 'redux-saga/effects';

import {
  authenticationValidatorAction,
  loginAction,
  logoutAction,
  forgotPasswordAction,
  resetPasswordAction,
  refreshTokenAction,
  getCurrentUserProfileAction,
  getOtherUserProfileAction,
  editUserProfileAction,
  uploadUserProfilePicAction,
  updateAccountSettingAction,
  getUserBidsAction,
  registerfreelancerAction,
  createuserstep3Action
} from '../sagaActions';

import {
  authenticationValidatorSaga,
  loginSaga,
  registerfreelancerSaga,
  logoutSaga,
  forgotPasswordSaga,
  resetPasswordSaga,
  refreshTokenSaga,
  createuserstep3Saga
} from './auth/auth';

import {
  editUserProfileSaga,
  getCurrentUserProfileSaga,
  updateAccountSettingSaga,
  getUserBidsSaga,
  getOtherUserProfileSaga,
  uploadProfilePicSaga
} from './profile/profile';

function* watchAuthentication() {
  yield takeLatest(loginAction.type, loginSaga);
  yield takeLatest(refreshTokenAction.type, refreshTokenSaga);
  yield takeLatest(logoutAction.type, logoutSaga);
  yield takeLatest(authenticationValidatorAction.type, authenticationValidatorSaga);
  yield takeLatest(registerfreelancerAction.type, registerfreelancerSaga);
  yield takeLatest(forgotPasswordAction.type, forgotPasswordSaga);
  yield takeLatest(resetPasswordAction.type, resetPasswordSaga);
  yield takeLatest(createuserstep3Action.type, createuserstep3Saga);
}
function* watchUser() {
  yield takeLatest(getCurrentUserProfileAction.type, getCurrentUserProfileSaga);
  yield takeLatest(getOtherUserProfileAction.type, getOtherUserProfileSaga);
  yield takeLatest(editUserProfileAction.type, editUserProfileSaga);
  yield takeLatest(uploadUserProfilePicAction.type, uploadProfilePicSaga);
  yield takeLatest(updateAccountSettingAction.type, updateAccountSettingSaga);
  yield takeLatest(getUserBidsAction.type, getUserBidsSaga);
}

export default function* rootSaga() {
  yield all([watchAuthentication(), watchUser()]);
}
