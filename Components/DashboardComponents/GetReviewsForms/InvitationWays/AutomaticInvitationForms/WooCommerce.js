import React, { Component } from "react";
import FormField from "../../../../Widgets/FormField/FormField";
import Button from "@material-ui/core/Button/Button";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { CircularProgress } from "@material-ui/core";
import _get from "lodash/get";

class WoocommerceForm extends Component {
  renderFormFields = () => {
    let output = [];
    const { formData, handleFormDataChange } = this.props;
    for (let item in formData) {
      output = [
        ...output,
        <div>
          <style jsx>
            {`
              .label {
                font-weight: bold;
                margin-bottom: 5px;
                font-size: 15px;
              }
            `}
          </style>
          <div className="form-group">
            <div className="label">
              <label>{formData[item].labelText}</label>
            </div>
            <FormField
              {...formData[item]}
              handleChange={(e, id) => {
                handleFormDataChange(e, id, "WooCommerce");
              }}
              styles={{
                height: "38px"
              }}
            />
          </div>
        </div>
      ];
    }
    return output;
  };

  handleSave = () => {
    const { handleSaveAndContinue, type, formData } = this.props;
    let reqBody = {
      type,
      name: _get(formData, "shopName.value", ""),
      locale: _get(formData, "locale.value", ""),
      authDetails: {
        consumer_keys: _get(formData, "consumer_keys.value", ""),
        consumer_secret: _get(formData, "consumer_secret.value", "")
      }
    };
    handleSaveAndContinue(reqBody);
  };

  render() {
    const { isLoading, formData } = this.props;
    let disabled = true;
    disabled =
      !_get(formData, "consumer_secret.value", "") &&
      !_get(formData, "consumer_keys.value", "");
    return (
      <div>
        <div style={{ marginBottom: "25px" }}>
          <h4>Integrate Woocommerce api form :</h4>
        </div>
        {this.renderFormFields()}
        <div className="form-group" style={{ textAlign: "right" }}>
          {isLoading ? (
            <Button variant="contained" color="primary">
              <CircularProgress style={{ color: "white" }} size={25} />
            </Button>
          ) : (
            <Button
              disabled={disabled}
              variant="contained"
              color="primary"
              endIcon={<ArrowRight />}
              onClick={this.handleSave}
            >
              Save &amp; Continue
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default WoocommerceForm;
