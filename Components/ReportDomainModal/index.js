import React from "react";
import { reportDomainStyles } from "./reportDomainStyles";
import FormField from "../Widgets/FormField/FormField";
import { connect } from "react-redux";
import Router from "next/router";
import fraudTypeOptions from "../../utility/constants/reportDomainConstants";
import OAuthButtons from "../Widgets/oAuthBtns";
import CircularProgress from "@material-ui/core/CircularProgress";
import _get from "lodash/get";
import Button from "@material-ui/core/Button";
import {
  reportDomain,
  reportDomainAfterLogin
} from "../../store/actions/domainProfileActions";
import _isEmpty from "lodash/isEmpty";
import ReportIcon from "@material-ui/icons/Report";
import validate from "../../utility/validate";

class ReportDomainModal extends React.Component {
  state = {
    formData: {
      report_category_id: {
        element: "select",
        value: "",
        placeholder: "Select Fraud Type",
        errorMessage: "",
        options: fraudTypeOptions,
        valid: false,
        touched: false,
        validationRules: {
          required: true
        },
        name: "report_category_id"
      },
      title: {
        element: "input",
        value: "",
        placeholder: "Title(optional)",
        errorMessage: "Please enter the title",
        valid: true,
        touched: true,
        // validationRules: {
        //   required: false
        // },
        name: "title"
      },
      description: {
        element: "textarea",
        value: "",
        placeholder: "70 characters to 280",
        errorMessage: "",
        valid: false,
        touched: false,
        validationRules: {
          required: true,
          minLength: 70,
          maxLength: 280
        },
        name: "description"
      }
    },
    isLoading: false,
    showSnackbar: false,
    variant: "success",
    snackbarMsg: "",
    authButtonLoading: false,
    reviewCharsLeft: 0,
    reviewCharsMore: 0
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

  handleReportClick = () => {
    const { formData } = this.state;
    const { authorized, profileData } = this.props;
    const { reportDomain, reportDomainAfterLogin } = this.props;
    let domain = _get(
      profileData,
      "domainProfileData.headerData.data.domain_name",
      ""
    );
    let report_category_id = _get(formData, "report_category_id.value", 0);
    let reqBody = {
      data: {
        description: _get(formData, "description.value", ""),
        title: _get(formData, "title.value", "")
      },
      report_category_id: Number(report_category_id),
      url: domain
    };
    if (authorized) {
      reportDomain(reqBody);
    } else {
      reportDomainAfterLogin(reqBody, true);
      Router.push("/login");
    }
  };

  renderAuthButtons = valid => {
    const { reportDomainData, authorized } = this.props;
    const isLoadingReportDomain = _get(reportDomainData, "isLoading", false);
    const success = _get(reportDomainData, "success", "undefined");
    const errorMsg = _get(reportDomainData, "errorMsg", "Some Error Occured!");
    const { authButtonLoading } = this.state;
    if (!authorized) {
      return (
        <div className="container">
          {authButtonLoading ? (
            <div style={{ textAlign: "center" }}>
              <CircularProgress />
            </div>
          ) : !isLoadingReportDomain ? (
            <>
              <OAuthButtons disabled={!valid} />
              <div style={{ margin: "10px 0px" }}>
                <Button
                  style={{ width: "100%" }}
                  variant="contained"
                  color="primary"
                  disabled={!valid}
                  onClick={this.handleReportClick}
                >
                  Login and Report
                </Button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", margin: "10px 0px" }}>
              <CircularProgress size={30} color="secondary" />
            </div>
          )}
        </div>
      );
    } else if (authorized) {
      return (
        <div className="container">
          {isLoadingReportDomain ? (
            <div style={{ textAlign: "center", margin: "10px 0px" }}>
              <CircularProgress size={30} color="secondary" />
            </div>
          ) : (
            <>
              <Button
                style={{ width: "100%" }}
                variant="contained"
                color="primary"
                disabled={!valid}
                onClick={this.handleReportClick}
                endIcon={<ReportIcon />}
              >
                Report
              </Button>
            </>
          )}
        </div>
      );
    }
  };

  componentDidUpdate(prevProps, nextProps) {
    const { authType, reportDomainSuccess, closeModal } = this.props;
    if (reportDomainSuccess !== prevProps.reportDomainSuccess) {
      if (reportDomainSuccess === true) {
        closeModal();
      }
    }
    if (this.props !== prevProps) {
      if (authType === "LOGIN_INIT") {
        this.setState({ authButtonLoading: true });
      } else if (authType === "LOGIN_SUCCESS" || authType === "LOGIN_FAILURE") {
        this.setState({ authButtonLoading: false });
      }
    }
  }

  handleFormDataChange = (e, id) => {
    const { value } = e.target;
    const { formData } = this.state;
    let reviewCharsLeft = 0;
    let reviewCharsMore = 0;
    if (id === "description") {
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

  render() {
    const { formData, reviewCharsLeft, reviewCharsMore } = this.state;
    let valid = true;
    for (let item in formData) {
      valid = valid && formData[item].valid;
    }
    return (
      <div>
        <>
          <style jsx>{reportDomainStyles}</style>
          <div className="trustReviewModal">
            <h3 className="heading">Report Fraud Domain</h3>
            <div className="trustReviewModalForm">
              <FormField
                {...formData.report_category_id}
                handleChange={(e, id) => this.handleFormDataChange(e, id)}
                id="report_category_id"
                rows="5"
                col="5"
                styles={{ height: "38px" }}
              />
              <FormField
                {...formData.title}
                handleChange={(e, id) => this.handleFormDataChange(e, id)}
                id="title"
                rows="5"
                col="5"
              />
              <FormField
                {...formData.description}
                handleChange={(e, id) => this.handleFormDataChange(e, id)}
                id="description"
                rows="5"
                col="5"
              />
              <div style={{ marginBottom: "20px" }}>
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
              <div className="row">
                <div className="col-md-12"></div>
                {this.renderAuthButtons(valid)}
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth, profileData } = state;
  const authorized = _get(auth, "logIn.authorized", false);
  const authType = _get(auth, "type", "");
  const reportDomainData = _get(profileData, "reportDomain", {});
  const reportDomainSuccess = _get(
    profileData,
    "reportDomain.success",
    "undefined"
  );
  const reportDomainErrorMsg = _get(
    profileData,
    "reportDomain.errorMsg",
    "undefined"
  );
  return {
    authorized,
    reportDomainData,
    authType,
    profileData,
    reportDomainSuccess,
    reportDomainErrorMsg
  };
};

export default connect(
  mapStateToProps,
  { reportDomain, reportDomainAfterLogin }
)(ReportDomainModal);
