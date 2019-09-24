import React, { Component } from "react";
import { authenticationPageStyles } from "../Components/Styles/authenticationPageStyles";
import FormField from "../Components/Widgets/FormField/FormField";
import validate from "../utility/validate";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Layout from "../hoc/layout/layout";
import {
  baseURL,
  loginApi,
  googleClientId,
  facebookAppId,
  loginApiOAuth
} from "../utility/config";
import Router from "next/router";
import { connect } from 'react-redux';
import { logIn } from '../store/actions/authActions';
import Snackbar from '../Components/Widgets/Snackbar';
import { CircularProgress } from '@material-ui/core';

class Login extends Component {
  state = {
    formData: {
      email: {
        element: "input",
        value: "",
        placeholder: "email@gmail.com",
        errorMessage: "",
        valid: false,
        touched: false,
        validationRules: {
          required: true,
          isEmail: true
        },
        name: "email"
      },
      password: {
        element: "input",
        value: "",
        placeholder: "Enter your password",
        errorMessage: "",
        valid: false,
        touched: false,
        validationRules: {
          required: true
        },
        name: "password"
      }
    },
    isLoading: false,
    isUnauthorized: false,
    showSnackbar: false,
    showSnackbar: false,
    variant: "success",
    snackbarMsg: ""
  };

  componentDidMount() {
    // ? This will redirect the user to login page with email prefilled in case of already registered.
    // const { auth } = this.props
    // const { formData } = this.state
    // if (auth.type == "REDIRECT_TO_LOGIN_WITH_EMAIL") {
    //   const emailPrefill = _get(auth, 'tempEmail.emailPrefill', false)
    //   const email = _get(auth, 'tempEmail.email', '')
    //   if (emailPrefill) {
    //     this.setState({
    //       formData: {
    //         ...formData,
    //         email: { ...formData.email, value: email }
    //       }
    //     })
    //   }
    // }
  }

  componentClicked = (res) => {
    console.log(res, 'res')
  }

  handleChange = (e, id) => {
    const { value } = e.target;
    const { formData } = this.state;
    this.setState({
      formData: {
        ...formData,
        [id]: {
          ...formData[id],
          value: value,
          valid: validate(value, formData[id].validationRules),
          touched: true
        }
      }
    });
  };

  createReqBody = formData => {
    let reqBody = {};
    if (!_isEmpty(formData)) {
      let ObjectKeysArray = Object.keys(formData);
      if (!_isEmpty(ObjectKeysArray) && Array.isArray(ObjectKeysArray)) {
        ObjectKeysArray.map(key => {
          if (formData.hasOwnProperty([key])) {
            reqBody[key] = formData[key].value;
          }
        });
      }
    }
    return reqBody;
  };

  handleLoginClick = () => {
    const { formData } = this.state;
    const { logIn } = this.props
    let reqBody = this.createReqBody(formData);
    logIn(reqBody, loginApi, 1)
  };

  OAuthSignIn = (response, name) => {
    console.log(response, "res");
    const { logIn } = this.props
    let reqBody = {}
    let loginType = 0
    if (name === 'google') {
      reqBody = {
        provider: name,
        data: {
          id_token: _get(response, "Zi.id_token", "")
        }
      }
      logIn(reqBody, loginApiOAuth, 3)
    } else if (name === 'facebook') {
      reqBody = {
        provider: name,
        data: {
          accessToken: response.accessToken
        }
      }
      logIn(reqBody, loginApiOAuth, 2)
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { logIn, logInTemp } = this.props.auth
    const { formData } = this.state
    if (this.props !== prevProps) {
      let isWrongCredentials = _get(this.props, 'auth.logInTemp.isWrongCredentials', false)
      if (isWrongCredentials) {
        this.setState({
          formData: { ...formData, password: { ...formData.password, value: "" } }
        })
      }
    }
    if (this.props.auth !== prevProps.auth) {
      const isWrongCredentials = _get(logInTemp, 'isWrongCredentials', false)
      const isLoginFailed = _get(logInTemp, 'isLoginFailed', false)
      const authorized = _get(logIn, 'authorized', false)
      if (isLoginFailed) {
        this.setState({ showSnackbar: true, variant: "error", snackbarMsg: "Some Error Occured!" })
      } else if (isWrongCredentials) {
        this.setState({ showSnackbar: true, variant: "error", snackbarMsg: "Please enter correct credentials!" })
      } else if (authorized) {
        this.setState({ showSnackbar: true, variant: "success", snackbarMsg: "Logged in successfully!" })
        setTimeout(() => {
          this.setState({ showSnackbar: true, variant: "success", snackbarMsg: "Redirecting..." })
          setTimeout(() => {
            Router.push('/')
          }, 1000)
        }, 1000)
      }
    }
  }

  render() {
    const { formData } = this.state;
    const { logIn, logInTemp } = this.props.auth
    return (
      <Layout>
        <div className="mainContainer">
          <div className="container">
            <div className="col-md-6 offset-md-3">
              <style jsx> {authenticationPageStyles} </style>{" "}
              <div className="card">
                <div className="cardHeading">
                  <h4> Login to read and write reviews </h4>{" "}
                </div>{" "}
                <FormField
                  {...formData.email}
                  handleChange={this.handleChange}
                  id="email"
                  rows="5"
                  col="5"
                />
                <FormField
                  {...formData.password}
                  handleChange={this.handleChange}
                  type="password"
                  id="password"
                  rows="5"
                  col="5"
                />
                <a className="forgotPasswordLink" href="/forgot-password">
                  Forgot password?
                </a>
                {_get(logInTemp, 'isLoggingIn', false) ? (
                  <div style={{ textAlign: "center" }}>
                    <CircularProgress size={30} color="secondary" />
                  </div>
                ) : (
                    <button
                      disabled={
                        !(formData.email.valid && formData.password.valid)
                      }
                      className="registerBtn"
                      onClick={this.handleLoginClick}
                    >
                      Login
                  </button>
                  )}
                <GoogleLogin
                  clientId={googleClientId}
                  render={renderProps => (
                    <button
                      className="loginBtn loginBtn--google"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Login with Google
                    </button>
                  )}
                  onSuccess={response => this.OAuthSignIn(response, "google")}
                  onFailure={response => this.OAuthSignIn(response, "google")}
                  cookiePolicy={"single_host_origin"}
                />
                <FacebookLogin
                  appId={facebookAppId}
                  // autoLoad={true}
                  fields="name,email,picture"
                  onClick={this.componentClicked}
                  callback={response => this.OAuthSignIn(response, "facebook")}
                  render={renderProps => (
                    <button
                      className="loginBtn loginBtn--facebook"
                      onClick={renderProps.onClick}
                    >
                      Login with Facebook
                    </button>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Snackbar
          open={this.state.showSnackbar}
          variant={this.state.variant}
          handleClose={() => this.setState({ showSnackbar: false })}
          message={this.state.snackbarMsg}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state
  return { auth }
}

export default connect(mapStateToProps, { logIn })(Login);
