import { put } from 'redux-saga/effects';

import {
  LOGIN_URL,
  REGISTER_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD_URL,
  REFRESH_TOKEN_URL,
  CLIENTREGISTER_URL
} from '../../../apis';
import errorHandler from '../../../utils/errorHandler/index';
import { axios } from '../../../http';
import {
  loginFail,
  loginStart,
  loginSuccess,
  logoutAction,
  showModal,
  hideModal,
  forgotPasswordStart,
  forgotPasswordSuccess,
  forgotPasswordFail,
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFail,
  refreshTokenStart,
  refreshTokenSuccess,
  refreshTokenFail,
  registerlancerStart,
  registerlancerFail
} from '../../sagaActions';
import { toast } from 'react-toastify';

export function* loginSaga(action) {
  yield put(loginStart());
  const { payload } = action;
  yield errorHandler({
    endpoint: LOGIN_URL,
    successHandler: yield function* (response) {
      const authToken = response?.data?.token;
      const roleType = response?.data?.userType;
      yield localStorage.setItem('userType', roleType);

      if (response?.data?.isAllStepComppleted || response.data?.profileSetupComplete) {
        yield localStorage.setItem('authToken', authToken);
        payload.navigate('/');
        // window.location.reload();
        yield put(loginSuccess({ data: response.data, authToken, roleType }));
      } else {
        yield put(loginSuccess({ data: response.data, authToken, roleType }));
        yield localStorage.setItem('createUserauthToken', authToken);
        // window.location.reload();
      }
    },
    failHandlerType: 'CUSTOM',
    failHandler: yield function* (response) {
      toast.error(response);
      yield put(loginFail(response?.data?.msg));
    },
    payload: payload,
    apiType: 'post'
  });
}

export function* logoutSaga() {
  yield localStorage.clear();
  yield sessionStorage.clear();
  // window.location.reload();
}

export function* refreshTokenSaga() {
  yield put(refreshTokenStart());
  const refreshToken = yield localStorage.getItem('refreshToken');

  try {
    const response = yield axios.post(REFRESH_TOKEN_URL, { refreshToken });
    if (
      response.status === 200 &&
      response?.data?.data?.freshCustomToken &&
      response.data?.data?.refresh_token
    ) {
      const authToken = response?.data?.data?.freshCustomToken;
      const refreshToken = response?.data?.data?.refresh_token;
      yield localStorage.setItem('authToken', authToken);
      yield localStorage.setItem('refreshToken', refreshToken);
      // window.location.reload();
      yield put(refreshTokenSuccess({ authToken, refreshToken }));
    } else {
      yield put(logoutAction({ forceLogout: true }));
      yield put(refreshTokenFail(response));
    }
  } catch (err) {
    yield put(logoutAction({ forceLogout: true }));
    yield put(refreshTokenFail(err));
  }
}

export function* authenticationValidatorSaga() {
  yield put(loginStart());
  const authToken = yield localStorage.getItem('authToken');
  const roleType = yield localStorage.getItem('roleType');
  if (authToken && roleType) {
    yield put(loginSuccess({ authToken, roleType }));
  } else {
    yield put(logoutAction({ forceLogout: true }));
  }
}

// Register registerfreelancerSaga Saga
export function* registerfreelancerSaga(action) {
  try {
    yield put(registerlancerStart());
    yield errorHandler({
      endpoint: REGISTER_URL,
      successHandler: yield function* (response) {
        console.log(response);
        action.payload?.handleSuccess(response);
        yield put(loginSuccess({ data: response.data }));
        localStorage.setItem('createUserauthToken', response?.data?.token);
        localStorage.setItem('userType', response?.data?.userType);
      },
      failHandler: yield function* (response) {
        // toast.error(response)
        yield put(registerlancerFail(response));
      },
      payload: { ...action.payload },
      apiType: 'post',
      failHandlerType: 'CUSTOM'
    });
  } catch (error) {
    console.log(error);
  }
}

export function* createClientStepSaga(action) {
  try {
    yield errorHandler({
      endpoint: 'client/createuser',
      successHandler: yield function* (response) {
        console.log(response);
        yield put(loginSuccess({ data: response.data }));
        const TEMPTOKEN = localStorage.getItem('createUserauthToken');
        localStorage.removeItem('createUserauthToken');
        localStorage.setItem('authToken', TEMPTOKEN);
        toast.success('Client profile Created Successfull!');
        yield put(loginSuccess({ data: response.data }));
      },
      failHandler: yield function* (response) {
        yield put(registerlancerFail(response?.data?.msg));
      },
      payload: { ...action.payload },
      apiType: 'post',
      failHandlerType: 'CUSTOM'
    });
  } catch (error) {
    console.log(error);
  }
}
export function* registerclientSaga(action) {
  try {
    yield put(registerlancerStart());
    yield errorHandler({
      endpoint: CLIENTREGISTER_URL,
      successHandler: yield function* (response) {
        console.log(response);
        action.payload?.handleSuccess(response);
        yield put(loginSuccess({ data: response.data }));
        localStorage.setItem('createUserauthToken', response?.data?.token);
        localStorage.setItem('userType', response?.data?.userType);
        // window.location.reload();
      },
      failHandler: yield function* (response) {
        toast.error(response)
        yield put(registerlancerFail(response?.data?.msg));
      },
      payload: { ...action.payload },
      apiType: 'post',
      failHandlerType: 'CUSTOM'
    });
  } catch (error) {
    console.log(error);
  }
}

// forgot-password Saga
export function* forgotPasswordSaga(action) {
  yield put(forgotPasswordStart());
  const { data, dispatch, openLoginModal } = action.payload;
  yield errorHandler({
    endpoint: FORGOT_PASSWORD_URL,
    successHandler: yield function* (response) {
      yield put(forgotPasswordSuccess(response.data));
      yield put(
        showModal({
          message: response.msg,
          notifyType: 1,
          showPrimaryButton: false,
          showCloseButton: true,
          handleClick: () => {
            dispatch(hideModal());
            openLoginModal();
          }
        })
      );
      yield setTimeout(() => {
        dispatch(hideModal());
        openLoginModal();
      }, 2000);
    },
    failHandler: yield function* (response) {
      yield put(forgotPasswordFail(response));
    },
    failHandlerType: 'CUSTOM',
    payload: data,
    apiType: 'post'
  });
}

export function* createuserstep2Saga(action) {
  const { Role } = action.payload;
  yield errorHandler({
    endpoint: 'user/createuser?step=step2&type=freelancer',
    successHandler: yield function* (response) {
      yield put(loginSuccess({ data: response.data }));
    },
    failHandler: resetPasswordFail,
    payload: { title: Role },
    apiType: 'post'
  });
}

export function* createuserstep3Saga(action) {
  const { handlesuccess, ExperienceData } = action.payload;
  yield errorHandler({
    endpoint: 'user/createuser?step=step3&type=freelancer',
    successHandler: yield function* (response) {
      handlesuccess();
      yield put(loginSuccess({ data: response.data }));
    },
    failHandler: resetPasswordFail,
    payload: ExperienceData,
    apiType: 'post'
  });
}

export function* createuserstep4Saga(action) {
  const { handlesuccess, languageData } = action.payload;
  yield errorHandler({
    endpoint: 'user/createuser?step=step4&type=freelancer',
    successHandler: yield function* (response) {
      handlesuccess();
      yield put(loginSuccess({ data: response.data }));
    },
    failHandler: resetPasswordFail,
    payload: languageData.languages,
    apiType: 'post'
  });
}

export function* createuserstep5Saga(action) {
  const { handlesuccess, Skills } = action.payload;
  yield errorHandler({
    endpoint: 'user/createuser?step=step5&type=freelancer',
    successHandler: yield function* (response) {
      handlesuccess();
      yield put(loginSuccess({ data: response.data }));
    },
    failHandler: resetPasswordFail,
    payload: { Skills },
    apiType: 'post'
  });
}

export function* createuserstep6Saga(action) {
  const { handlesuccess, bio } = action.payload;
  yield errorHandler({
    endpoint: 'user/createuser?step=step6&type=freelancer',
    successHandler: yield function* (response) {
      handlesuccess();
      yield put(loginSuccess({ data: response.data }));
    },
    failHandler: resetPasswordFail,
    payload: { bio },
    apiType: 'post'
  });
}

export function* createuserstep7Saga(action) {
  try {
    const { phoneNumber, profilePic } = action.payload;
    yield errorHandler({
      endpoint: 'user/createuser?step=step7&type=freelancer',
      successHandler: yield function* (response) {
        console.log(response);
        const TEMPTOKEN = localStorage.getItem('createUserauthToken');
        localStorage.removeItem('createUserauthToken');
        localStorage.setItem('authToken', TEMPTOKEN);
        yield put(loginSuccess({ data: response.data }));
        window.location.reload();
      },
      payload: {
        phoneNumber,
        profilePic
      },
      failHandler: yield function* (response) {
        yield console.log(response);
      },
      failHandlerType: 'CUSTOM',
      apiType: 'post'
    });
  } catch (error) {
    console.log(error);
  }
}
// forgot-password Saga
export function* resetPasswordSaga(action) {
  yield put(resetPasswordStart());
  const { data, dispatch, openLoginModal } = action.payload;
  yield errorHandler({
    endpoint: RESET_PASSWORD_URL,
    successHandler: yield function* (response) {
      yield put(resetPasswordSuccess(response.data));
      yield put(
        showModal({
          message: response.msg,
          notifyType: 1,
          showPrimaryButton: false,
          showCloseButton: true,
          handleClick: () => {
            dispatch(hideModal());
            openLoginModal();
          }
        })
      );
      yield setTimeout(() => {
        dispatch(hideModal());
        openLoginModal();
      }, 2000);
    },
    failHandler: resetPasswordFail,
    payload: data,
    apiType: 'post'
  });
}
