import { createAction } from "@reduxjs/toolkit";

export const createJobPostAction = createAction('CREATE_JOB_ACTION');
export const getJobRecommendAction = createAction('RECOMEND_JOB_ACTION');
export const getJobRecommendActionSuccess = createAction('RECOMEND_JOB_ACTION_SUCC');
export const getJobRecommendActionFailed = createAction('RECOMEND_JOB_ACTION_FAIL');
export const setWishlistAction = createAction('SET_WISHLIST_ACTION');
export const removeWishlistAction = createAction('REMOVE_WISHLIST_ACTION');

