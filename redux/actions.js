import * as actions from "./actionTypes";

export const login_in = (data) => ({
  type: actions.LOGIN_IN,
  value: data,
});

export const login_out = (data) => ({
  type: actions.LOGIN_OUT,
  value: data,
});
