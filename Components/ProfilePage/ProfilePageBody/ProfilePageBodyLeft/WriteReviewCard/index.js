import React, { Component } from "react";
import Paper from "../../../../MaterialComponents/Paper";
import styles from "../ProfilePageBodyLeftStyles";
import RatingIndicators from "../../../../Widgets/RatingIndicators/RatingIndicators";
import FormField from "../../../../Widgets/FormField/FormField";
import validate from "../../../../../utility/validate";
import _get from "lodash/get";
import { connect } from "react-redux";
import {
  sendTrustVote,
  sendTrustDataLater,
  clearTrustVoteData
} from "../../../../../store/actions/trustAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import Checkbox from "@material-ui/core/Checkbox";
import OAuthButtons from "../../../../Widgets/oAuthBtns";
import Snackbar from "../../../../../Components/Widgets/Snackbar";
import Router from "next/router";
import Button from "@material-ui/core/Button";
import { ratingColor } from "../../../../../utility/ratingTypeColor";

class WriteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        review: {
          element: "textarea",
          value: "",
          placeholder: "Please write few words about your experience .....",
          errorMessage: "",
          valid: false,
          touched: false,
          validationRules: {
            required: true,
            minLength: 70,
            maxLength: 280
          },
          name: "review"
        }
      },
      trust: false,
      rating: 0,
      review: "",
      starSize: 24,
      isLoading: false,
      showSnackbar: false,
      variant: "success",
      snackbarMsg: "",
      reviewCharsLeft: 0,
      reviewCharsMore: 0,
      authButtonLoading: false
    };
    this.windowSize = 0;
  }

  // componentDidMount() {
  //   this.windowSize = window.matchMedia("screen and (max-width: 991px)");
  //   this.changeStarSize(this.windowSize);
  //   this.windowSize.addEventListener("change", this.changeStarSize);
  // }

  // componentWillUnmount() {
  //   this.windowSize.removeEventListener("change", this.changeStarSize);
  // }

  changeStarSize = windowSize => {
    if (windowSize.matches) {
      // If media query matches
      this.setState({ starSize: 28 });
    } else {
      this.setState({ starSize: 35 });
    }
  };

  changeRating = data => {
    this.setState({ rating: data });
  };

  handleChange = (e, id) => {
    const { value } = e.target;
    const { formData } = this.state;
    let reviewCharsLeft = 0;
    let reviewCharsMore = 0;

    if (value.length < _get(formData[id], "validationRules.minLength", 0)) {
      if (reviewCharsLeft < 0) {
        reviewCharsLeft = 0;
      }
      reviewCharsLeft =
        _get(formData[id], "validationRules.minLength", 0) - value.length;
    } else if (
      value.length > _get(formData[id], "validationRules.maxLength", 0)
    ) {
      if (reviewCharsMore < 0) {
        reviewCharsMore = 0;
      }
      reviewCharsMore =
        value.length - _get(formData[id], "validationRules.maxLength", 0);
    }

    this.setState({
      formData: {
        ...formData,
        [id]: {
          ...formData[id],
          value: value,
          valid: validate(value, formData[id].validationRules),
          touched: true
        }
      },
      reviewCharsLeft,
      reviewCharsMore
    });
  };

  handlePostReview = () => {
    this.setState({ isLoading: true });
    const { value } = this.state.formData.review;
    const { rating } = this.state;
    const { sendTrustVote, auth, profileData, sendTrustDataLater } = this.props;
    const authorized = _get(auth, "logIn.authorized", false);
    const domain = _get(
      profileData,
      "domainProfileData.headerData.data.domain_name",
      ""
    );
    let parsed_domain = domain.replace(/https:\/\//gim, "");
    const reqBody = {
      rating,
      text: value,
      domain: parsed_domain
    };
    if (authorized) {
      sendTrustVote(reqBody);
    } else {
      sendTrustDataLater(reqBody);
      Router.push("/login");
    }
  };

  renderAuthButtons = (formData, isLoading, authButtonLoading, authorized) => {
    if (!authorized) {
      return (
        <>
          {authButtonLoading ? (
            <div style={{ textAlign: "center" }}>
              <CircularProgress />
            </div>
          ) : !isLoading ? (
            <>
              <OAuthButtons disabled={!_get(formData, "review.valid", false)} />
              <style jsx>{styles}</style>
              <div style={{ margin: "10px 0px" }}>
                <Button
                  style={{ width: "100%" }}
                  variant="contained"
                  color="primary"
                  disabled={!_get(formData, "review.valid", false)}
                  // className="postReviewButton"
                  onClick={this.handlePostReview}
                >
                  Login and Post Review
                </Button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", margin: "10px 0px" }}>
              <CircularProgress size={30} color="secondary" />
            </div>
          )}
        </>
      );
    } else if (authorized) {
      return (
        <>
          {isLoading ? (
            <div style={{ textAlign: "center", margin: "10px 0px" }}>
              <CircularProgress size={30} color="secondary" />
            </div>
          ) : (
            <>
              <style jsx>{styles}</style>
              <div style={{ width: "100%", margin: "10px 0px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!_get(formData, "review.valid", false)}
                  // className="postReviewButton"
                  onClick={this.handlePostReview}
                >
                  Post Review
                </Button>
              </div>
            </>
          )}
        </>
      );
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { trustVote, auth, clearTrustVoteData } = this.props;
    const { formData } = this.state;
    const isSuccess = _get(trustVote, "payload.success", false);
    const actionType = _get(trustVote, "type", "");
    const status = _get(trustVote, "payload.status", 0);
    if (this.props.trustVote !== prevProps.trustVote) {
      if (actionType === "TRUST_VOTE_SUCCESS") {
        if (isSuccess && status === 200) {
          this.setState({
            formData: {
              ...formData,
              review: {
                ...formData["review"],
                value: ""
              }
            },
            rating: 0,
            isLoading: false,
            showSnackbar: true,
            variant: "success",
            snackbarMsg: "Review Posted Successfully!"
          });
          setTimeout(() => {
            clearTrustVoteData();
          }, 3000);
        }
      } else if (actionType === "TRUST_VOTE_FAILURE") {
        if (!isSuccess) {
          this.setState({
            rating: 0,
            isLoading: false,
            showSnackbar: true,
            variant: "error",
            snackbarMsg: "Some Error Occured!"
          });
          setTimeout(() => {
            clearTrustVoteData();
          }, 3000);
        }
      }
    }
    if (this.props !== prevProps) {
      if (this.props.trustClicked === true) {
        this.setState({ rating: 5 });
      }
    }

    if (this.props.auth !== prevProps.auth) {
      const isLoginFailed = _get(auth, "logInTemp.isLoginFailed", false);
      const isWrongCredentials = _get(
        auth,
        "logInTemp.isWrongCredentials",
        false
      );
      const actionType = _get(auth, "type", "");
      const authorized = _get(auth, "logIn.authorized", false);
      if (isLoginFailed) {
        if (isWrongCredentials) {
          this.setState({
            showSnackbar: true,
            variant: "error",
            snackbarMsg: "Incorrect credentials!"
          });
        } else {
          this.setState({
            showSnackbar: true,
            variant: "error",
            snackbarMsg: "Some Error Occured!"
          });
        }
      } else if (authorized) {
        this.setState({
          showSnackbar: true,
          variant: "success",
          snackbarMsg: "Logged in successfully!"
        });
      }
      if (actionType === "LOGIN_INIT") {
        this.setState({ authButtonLoading: true });
      } else if (
        actionType === "LOGIN_SUCCESS" ||
        actionType === "LOGIN_FAILURE"
      ) {
        this.setState({ authButtonLoading: false });
      }
    }
  }

  // handleKeyDown = e => {
  //   if (e.keyCode == 13) {
  //     this.handlePostReview();
  //   }
  // };

  render() {
    const {
      formData,
      rating,
      starSize,
      isLoading,
      authButtonLoading,
      reviewCharsLeft,
      reviewCharsMore,
      trust
    } = this.state;
    const authorized = _get(this.props, "auth.logIn.authorized", false);
    return (
      <div className="writeReviewContainer">
        <style jsx>{styles}</style>
        <Paper>
          <div className="writeReviewBox">
            <div>
              <img
                src="/static/images/noProfileImg.jpg"
                alt="user-img"
                className="cardImg"
              />
              <span className="writeReviewTxt">Share your experience?</span>
            </div>
            <div className="reviewIndicator">
              <RatingIndicators
                rating={rating}
                typeOfWidget="star"
                widgetRatedColors={ratingColor[Math.round(Number(rating)) || 0]}
                widgetHoverColors="#4edf12"
                widgetDimensions="24px"
                widgetSpacings="1px"
                changeRating={this.changeRating}
              />
            </div>
          </div>
          {rating > 0 ? (
            <>
              <div className="mt-20">
                <FormField
                  {...formData.review}
                  handleChange={this.handleChange}
                  type="textarea"
                  id="review"
                  rows="5"
                  col="5"
                />

                {reviewCharsLeft > 0 ? (
                  <span style={{ color: "red" }}>
                    {reviewCharsLeft} characters left!
                  </span>
                ) : reviewCharsMore > 0 ? (
                  <span style={{ color: "red" }}>
                    {reviewCharsMore} characters exceeding!
                  </span>
                ) : (
                  ""
                )}
              </div>
              {/* <label style={{ fontWeight: "bold", fontSize: "18px" }}>
                <Checkbox
                  checked={trust}
                  onChange={e =>
                    this.setState({
                      trust: e.target.checked
                    })
                  }
                  value={trust}
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox"
                  }}
                />
                I trust this domain
              </label> */}
              {this.renderAuthButtons(
                formData,
                isLoading,
                authButtonLoading,
                authorized
              )}
              <br />
              <div className="pt-10">
                <span
                  className="cancelReviewBtn"
                  onClick={() => this.setState({ rating: 0 })}
                >
                  I don't want to give review
                </span>
              </div>
            </>
          ) : (
            ""
          )}
        </Paper>
        <Snackbar
          open={this.state.showSnackbar}
          variant={this.state.variant}
          handleClose={() => this.setState({ showSnackbar: false })}
          message={this.state.snackbarMsg}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth, profileData, trustVote } = state;
  return { auth, profileData, trustVote };
};

export default connect(
  mapStateToProps,
  { sendTrustVote, sendTrustDataLater, clearTrustVoteData }
)(WriteReview);
