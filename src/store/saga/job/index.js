import { put } from "redux-saga/effects";
import errorHandler from "../../../utils/errorHandler";

export function* createJobSaga(action) {
    console.log('👌👌👌👌');
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