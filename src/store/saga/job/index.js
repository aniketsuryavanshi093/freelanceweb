import { put } from "redux-saga/effects";
import errorHandler from "../../../utils/errorHandler";
import { getJobRecommenSuccess,  getJobRecommendActionFailed } from "../../sagaActions";

export function* createJobSaga(action) {
    const { payload } = action;
    yield errorHandler({
      endpoint: '/job/createjob',
      successHandler: yield function* (response) {
      yield  console.log(response);
      },
      failHandler: yield function* (response) {
        yield console.log(response);
      },
      failHandlerType: 'CUSTOM',
      apiType: 'post',
      payload
    });
}

export function* recommendJobSaga(action) {
  const { payload } = action;
  yield errorHandler({
    endpoint: `/job/getjobposts?jobtype=${payload?.type}`,
    successHandler: yield function* (response) {
      yield put(getJobRecommenSuccess({data:response?.data , type: payload?.type}));
    },
    failHandler: yield function* (response) {
      yield put(getJobRecommendActionFailed(response));
    },
    failHandlerType: 'CUSTOM',
    apiType: 'post',
    payload
  });
}

export function* setWishlistSaga(action) {
  const { payload } = action;
  yield errorHandler({
    endpoint: `/user/wishlist`,
    successHandler: yield function* () {
      yield console.log("hey")
    },
    failHandler: yield function* (response) {
      yield put(getJobRecommendActionFailed(response));
    },
    failHandlerType: 'CUSTOM',
    apiType: 'post',
    payload: {
      jobid: payload
    }
  });
}
export function* removewishlistSaga(action) {
  const { payload } = action;
  yield errorHandler({
    endpoint: `/user/removewishlist`,
    successHandler: yield function* () {
      yield payload?.onSuccess()
    },
    failHandler: yield function* (response) {
      yield put(getJobRecommendActionFailed(response));
    },
    failHandlerType: 'CUSTOM',
    apiType: 'post',
    payload: {
      wishlistid: payload?.id
    }
  });
}


