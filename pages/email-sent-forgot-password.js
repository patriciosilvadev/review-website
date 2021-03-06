import React, { useState } from "react";
import { authenticationPageStyles } from "../Components/Styles/authenticationPageStyles";
import Layout from "../hoc/layout/layout";
import CircularProgress from "@material-ui/core/CircularProgress";
import Router from "next/router";

const redirectToLogin = setLoading => {
  setLoading(true);
  Router.push("/login");
};

const EmailSentForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Layout>
      <div className="mainContainer">
        <div className="container">
          <div className="col-md-6 offset-md-3">
            <style jsx> {authenticationPageStyles} </style>{" "}
            <div className="card">
              <div className="cardHeading">
                <h3> We just sent you an email </h3>{" "}
              </div>
              <p>
                Please click on the link in your mail to reset your password.
              </p>
              <div style={{ display: "flex" }}>
                <p>
                  Didn't receive the email?&nbsp;
                  <a href="mailto:support@thetrustsearch.com">
                    support@thetrustsearch.com
                  </a>
                </p>
              </div>
              {loading ? (
                <div style={{ textAlign: "center" }}>
                  <CircularProgress size={30} color="secondary" />
                </div>
              ) : (
                <button
                  className="registerBtn"
                  onClick={() => redirectToLogin(setLoading)}
                >
                  Go to Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EmailSentForgotPassword;
