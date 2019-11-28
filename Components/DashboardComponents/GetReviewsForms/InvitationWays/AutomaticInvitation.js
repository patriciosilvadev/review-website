import React, { Component } from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NeedDeveloperSupport from "../../../Widgets/NeedDeveloperSupport/NeedDeveloperSupport";
import validate from "../../../../utility/validate";
import Languages from "../../../../utility/languages";
import Snackbar from "../../../Widgets/Snackbar";
import { sendConfigData } from "../../../../store/actions/dashboardActions";
import _get from "lodash/get";
import _find from "lodash/find";
import * as Forms from "./AutomaticInvitationForms";
import { connect } from "react-redux";
import _isEmpty from "lodash/isEmpty";

//! we'll get the values to prefill from props in availableformdata object with key similar to formname and then manually need to set the values of each individual key

class AutomaticInvitation extends Component {
  state = {
    selectedOption: "",
    formName: "",
    showSnackbar: false,
    variant: "success",
    snackbarMsg: "",
    disabledSaveButton: false,
    formData: {
      WooCommerce: {
        shopName: {
          element: "input",
          type: "text",
          value: _get(
            this.props,
            "availablePlatformsData.WooCommerce.name",
            ""
          ),
          placeholder: "Shop Name",
          touched: false,
          valid: false,
          errorMessage: "",
          name: "name",
          id: "shopName",
          labelText: "Enter shop name"
        },
        consumer_keys: {
          element: "input",
          type: "text",
          value: _get(
            this.props,
            "availablePlatformsData.auth_details.consumer_keys",
            ""
          ),
          placeholder: "Consumer keys",
          touched: false,
          valid: false,
          errorMessage: "",
          name: "consumer_keys",
          id: "consumer_keys",
          labelText: "Enter key"
        },
        consumer_secret: {
          element: "input",
          type: "text",
          value: _get(
            this.props,
            "availablePlatformsData.auth_details.consumer_secret",
            ""
          ),
          placeholder: "Consumer Secret",
          touched: false,
          valid: false,
          errorMessage: "",
          name: "consumer_secret",
          id: "consumer_secret",
          labelText: "Enter secret"
        },
        locale: {
          element: "select",
          name: "locale",
          value: _get(
            this.props,
            "availablePlatformsData.WooCommerce.locale",
            ""
          ),
          options: [...Languages],
          placeholder: "Select your language",
          valid: false,
          touched: false,
          errorMessage: "",
          id: "locale",
          labelText: "Select your locale"
        }
      },
      Generic: {
        shopName: {
          element: "input",
          type: "text",
          value: "",
          placeholder: "Shop Name",
          touched: false,
          valid: false,
          errorMessage: "",
          name: "name",
          id: "shopName",
          labelText: "Enter shop name"
        },
        consumer_keys: {
          element: "input",
          type: "text",
          value: "",
          placeholder: "Consumer keys",
          touched: false,
          valid: false,
          errorMessage: "",
          name: "consumer_keys",
          id: "consumer_keys",
          labelText: "Enter key"
        },
        consumer_secret: {
          element: "input",
          type: "text",
          value: "",
          placeholder: "Consumer Secret",
          touched: false,
          valid: false,
          errorMessage: "",
          name: "consumer_secret",
          id: "consumer_secret",
          labelText: "Enter secret"
        },
        locale: {
          element: "select",
          name: "locale",
          value: "",
          options: [...Languages],
          placeholder: "Select your language",
          valid: false,
          touched: false,
          errorMessage: "",
          id: "locale",
          labelText: "Select your locale"
        }
      },
      Magento: {
        shopName: {
          element: "input",
          type: "text",
          value: "",
          placeholder: "Shop Name",
          touched: false,
          valid: false,
          errorMessage: "",
          name: "name",
          id: "shopName",
          labelText: "Enter shop name"
        },
        consumer_keys: {
          element: "input",
          type: "text",
          value: "",
          placeholder: "Consumer keys",
          touched: false,
          valid: false,
          errorMessage: "",
          name: "consumer_keys",
          id: "consumer_keys",
          labelText: "Enter key"
        },
        consumer_secret: {
          element: "input",
          type: "text",
          value: "",
          placeholder: "Consumer Secret",
          touched: false,
          valid: false,
          errorMessage: "",
          name: "consumer_secret",
          id: "consumer_secret",
          labelText: "Enter secret"
        },
        locale: {
          element: "select",
          name: "locale",
          value: "",
          options: [...Languages],
          placeholder: "Select your language",
          valid: false,
          touched: false,
          errorMessage: "",
          id: "locale",
          labelText: "Select your locale"
        }
      }
    }
  };

  handleFormDataChange = (e, id, formName) => {
    const { formData } = this.state;
    const { value } = e.target;
    const specificFormData = formData[formName];
    this.setState({
      formData: {
        ...formData,
        [formName]: {
          ...specificFormData,
          [id]: {
            ...specificFormData[id],
            value: value,
            touched: true,
            valid: validate(value, specificFormData[id].validationRules)
          }
        }
      }
    });
  };

  //this is currently only for woocommerce make this generic when others are availble.
  handleSaveAndContinue = () => {
    const { WooCommerce } = this.state.formData;
    const { sendConfigData } = this.props;
    let reqBody = {
      type: 1,
      name: _get(WooCommerce, "shopName.value", ""),
      locale: "en",
      authDetails: {
        consumer_keys: _get(WooCommerce, "consumer_keys.value", ""),
        consumer_secret: _get(WooCommerce, "consumer_secret.value", "")
      }
    };
    sendConfigData(reqBody);
  };

  getFormName = () => {
    const { availablePlatforms } = this.props;
    const { selectedOption } = this.state;
    let selectedOptionObj = _find(availablePlatforms, ["id", selectedOption]);
    if (selectedOptionObj) {
      this.setState({
        formName: _get(selectedOptionObj, "name", "")
      });
    }
  };

  handleRadioChange = event => {
    const { value } = event.target;
    const { setSelectedPlatform } = this.props;
    this.setState(
      {
        selectedOption: Number(value)
      },
      () => {
        this.getFormName();
        setSelectedPlatform(Number(value));
      }
    );
  };

  renderForm = () => {
    const { formName, formData } = this.state;
    const { isLoading } = this.props;
    let form = <div />;
    if (formName) {
      const FormComponent = Forms[formName];
      if (FormComponent) {
        form = (
          <div style={{ width: "100%" }}>
            <FormComponent
              isLoading={isLoading}
              formData={{ ...formData[formName] }}
              handleFormDataChange={this.handleFormDataChange}
              handleSaveAndContinue={this.handleSaveAndContinue}
            />
          </div>
        );
      }
    }
    return form;
  };

  renderExpansionPanels = () => {
    const { availablePlatforms, setSelectedPlatform } = this.props;
    const { selectedOption } = this.state;
    const output = (availablePlatforms || []).map((item, index) => {
      return (
        <ExpansionPanel
          expanded={item.id === selectedOption}
          onChange={e => {
            this.setState({ selectedOption: item.id }, () => {
              this.getFormName();
              setSelectedPlatform(item.id);
            });
          }}
        >
          <ExpansionPanelSummary
            onClick={e => {}}
            // expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="integration-platforms"
            id="integration-platforms"
          >
            <FormControlLabel
              aria-label="Acknowledge"
              //! this will stop expandation on click of radio button
              // onClick={event => event.stopPropagation()}
              // onFocus={event => event.stopPropagation()}
              control={<Radio />}
              label={item.name}
              value={item.id}
              onClick={e => {
                this.setState({ selectedOption: item.id }, () => {
                  this.getFormName();
                });
              }}
            />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ width: "100%" }}>
            {this.renderForm()}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
    return output;
  };

  componentDidUpdate(prevProps, prevState) {
    const { success, errorMsg, isLoading, sendToSelectTemplate } = this.props;
    if (success !== prevProps.success) {
      if (success && !isLoading) {
        let variant = success ? "success" : "error";
        let snackbarMsg = success ? "Configured Successfully!" : errorMsg;
        this.setState(
          {
            showSnackbar: true,
            variant,
            snackbarMsg
          },
          () => {
            sendToSelectTemplate();
          }
        );
      }
    }
  }

  render() {
    const { selectedOption, showSnackbar, snackbarMsg, variant } = this.state;
    const { availablePlatforms } = this.props;
    return (
      <div className="container">
        <div className="row" style={{ marginBottom: "20px" }}>
          <div className="col-md-6">
            <h1>Automatic Invitation</h1>
            {availablePlatforms.length > 0 ? (
              <>
                <p>
                  Ask your customers to leave a review about their experience
                </p>
                <h5>
                  Choose any of the methods below to add customers to invite
                </h5>
              </>
            ) : (
              <p>You don't have any platforms available.</p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <RadioGroup
              aria-label="typesOfinvitation"
              name="typesOfinvitation"
              value={selectedOption}
              onChange={this.handleRadioChange}
            >
              {this.renderExpansionPanels()}
            </RadioGroup>
          </div>
        </div>
        <div style={{ marginTop: "50px" }}>
          <NeedDeveloperSupport />
        </div>
        <Snackbar
          open={showSnackbar}
          variant={variant}
          handleClose={() => this.setState({ showSnackbar: false })}
          message={snackbarMsg}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { dashboardData, auth } = state;
  const availablePlatforms = _get(dashboardData, "availablePlatforms.data", []);
  const shopId = _get(dashboardData, "configDetails.data.id");
  const isLoading = _get(dashboardData, "configDetails.isLoading", false);
  const errorMsg = _get(dashboardData, "configDetails.errorMsg", "");
  const success = _get(dashboardData, "configDetails.success", undefined);
  const ecommerceIntegrations = _get(
    auth,
    "logIn.userProfile.business_profile.integrations.ecommerce",
    []
  );
  let availablePlatformsData = {};

  //! we are looping over the array of integration/ecommerce and creating a object with they key(type in array) that matches with our form key in formdata state. So that we can prefill it.

  ecommerceIntegrations.map((data, index) => {
    let platformName = _get(data, "type", "");
    availablePlatformsData[platformName] = {
      ...data
    };
  });
  return {
    availablePlatforms,
    availablePlatformsData,
    shopId,
    isLoading,
    errorMsg,
    success
  };
};

export default connect(mapStateToProps, { sendConfigData })(
  AutomaticInvitation
);
