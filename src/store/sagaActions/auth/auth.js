import { createAction } from '@reduxjs/toolkit';

export const forgotPasswordAction = createAction('FORGOT_PASSWORD_ACTION');
export const refreshTokenAction = createAction('REFRESH_TOKEN_ACTION');

export const loginAction = createAction('LOGIN_ACTION');
export const logoutAction = createAction('LOGOUT_ACTION');
export const authenticationValidatorAction = createAction('AUTHENTICATION_VALIDATOR_ACTION');

export const registerfreelancerAction = createAction('REGISTER_LANCER_ACTION');
export const resetPasswordAction = createAction('REST_PASSWORD_ACTION');

export const createuserstep2Action = createAction('CREATE_USER_STEP2');
export const createuserstep3Action = createAction('CREATE_USER_STEP3');
export const createuserstep4Action = createAction('CREATE_USER_STEP4');
export const createuserstep5Action = createAction('CREATE_USER_STEP5');
export const createuserstep6Action = createAction('CREATE_USER_STEP6');
export const createuserstep7Action = createAction('CREATE_USER_STEP7');
