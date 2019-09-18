import {
  SIGNUP_INIT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "./actionTypes";
import _get from "lodash/get";
import { baseURL } from "../../utility/config";
import axios from "axios";

export const signUp = (userData, registerApi) => {
  return async (dispatch, getState) => {
    dispatch({ type: SIGNUP_INIT, payload: { signUpSuccess: false, status: -1, isSigningUp: true, isSignupFailed: false } });
    try {
      const res = await axios.post(`${baseURL}${registerApi}`, userData);
      let success = _get(res, "data.success", false);
      let status = _get(res, "status", 0);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { signUpSuccess: success, status: status, isSigningUp: false, isSignUpFailed: false }
      });
    } catch (error) {
      let success = _get(error, "response.data.success", false);
      let status = _get(error, "response.status", 0);
      dispatch({
        type: SIGNUP_FAILURE,
        payload: { signUpSuccess: success, status: status, isSigningUp: false, isSignUpFailed: true }
      });
    }
  };
};

export const logIn = (userData, loginApi) => {
  return async dispatch => {
    dispatch({
      type: LOGIN_INIT,
      payload: {
        authorized: false,
        status: -1,
        isLoggingIn: true,
        isLoginFailed: false,
        loginType: 0,
        token: ""
      }
    });
    try {
      const res = await axios.post(`${baseURL}${loginApi}`, userData);
      let success = _get(res, "data.success", false);
      let status = _get(res, "status", 0);
      let token = _get(result, "data.token", "");
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          authorized: success,
          status: status,
          isLoggingIn: false,
          isLoginFailed: success,
          loginType: 1,
          token: token
        }
      });
    } catch (error) {
      let success = _get(error, "response.data.success", false);
      let status = _get(error, "response.status", 0);
      let message = _get(error, "response.data.message", "") === "Unauthorized";
      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          authorized: message,
          status: status,
          isLoggingIn: false,
          isLoginFailed: success,
          loginType: 1,
          token: ""
        }
      });
    }
  };
};