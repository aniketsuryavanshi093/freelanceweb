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
  createuserstep3Action,
  createuserstep2Action,
  createuserstep4Action,
  createuserstep5Action,
  createuserstep6Action,
  createuserstep7Action,
  registerclientAction,
  createClientStepAction,
  createJobPostAction
} from '../sagaActions';
import {
  authenticationValidatorSaga,
  loginSaga,
  registerfreelancerSaga,
  logoutSaga,
  forgotPasswordSaga,
  resetPasswordSaga,
  refreshTokenSaga,
  createuserstep3Saga,
  createuserstep4Saga,
  createuserstep5Saga,
  createuserstep6Saga,
  createuserstep7Saga,
  createuserstep2Saga,
  registerclientSaga,
  createClientStepSaga
} from './auth/auth';
import {
  editUserProfileSaga,
  getCurrentUserProfileSaga,
  updateAccountSettingSaga,
  getUserBidsSaga,
  getOtherUserProfileSaga,
  uploadProfilePicSaga
} from './profile/profile';
import { createJobSaga } from './job';
function* watchAuthentication() {
  yield takeLatest(loginAction.type, loginSaga);
  yield takeLatest(refreshTokenAction.type, refreshTokenSaga);
  yield takeLatest(createClientStepAction.type, createClientStepSaga);
  yield takeLatest(logoutAction.type, logoutSaga);
  yield takeLatest(authenticationValidatorAction.type, authenticationValidatorSaga);
  yield takeLatest(registerfreelancerAction.type, registerfreelancerSaga);
  yield takeLatest(registerclientAction.type, registerclientSaga);
  yield takeLatest(forgotPasswordAction.type, forgotPasswordSaga);
  yield takeLatest(resetPasswordAction.type, resetPasswordSaga);
  yield takeLatest(createuserstep2Action.type, createuserstep2Saga);
  yield takeLatest(createuserstep3Action.type, createuserstep3Saga);
  yield takeLatest(createuserstep4Action.type, createuserstep4Saga);
  yield takeLatest(createuserstep5Action.type, createuserstep5Saga);
  yield takeLatest(createuserstep6Action.type, createuserstep6Saga);
  yield takeLatest(createuserstep7Action.type, createuserstep7Saga);
}

function* watchUser() {
  yield takeLatest(getCurrentUserProfileAction.type, getCurrentUserProfileSaga);
  yield takeLatest(getOtherUserProfileAction.type, getOtherUserProfileSaga);
  yield takeLatest(editUserProfileAction.type, editUserProfileSaga);
  yield takeLatest(uploadUserProfilePicAction.type, uploadProfilePicSaga);
  yield takeLatest(updateAccountSettingAction.type, updateAccountSettingSaga);
  yield takeLatest(getUserBidsAction.type, getUserBidsSaga);
}
function* watchJob(){
  yield takeLatest(createJobPostAction.type, createJobSaga)
}
export default function* rootSaga() {
  yield all([watchAuthentication(), watchUser() , watchJob()]);
}
