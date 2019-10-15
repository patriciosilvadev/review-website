import React, { Component } from "react";
import FormField from "../../Widgets/FormField/FormField";
import StarRatings from "react-star-ratings";
import { Button } from "@material-ui/core";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

export default class SelectTemplateForm extends Component {
  renderHeader = () => {
    return (
      <div className="container">
        <style jsx>
          {`
            .header {
              font-weight: lighter;
            }
            .subHeader {
              font-weight: lighter;
              margin-top: 22px;
              margin-bottom: 50px;
            }
          `}
        </style>
        <div className="row">
          <div className="col-md-12">
            <h3 className="header">Create your invitation email</h3>
            <h6 className="subHeader">
              Use our optimized invitation email template or customize it to fit
              your brand. You can modify the text below.
            </h6>
          </div>
        </div>
      </div>
    );
  };

  renderBody = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">{this.renderFormFields()}</div>
          <div className="col-md-8">{this.renderTemplate()}</div>
        </div>
      </div>
    );
  };

  renderTemplate = () => {
    const { formData } = this.props;
    return (
      <div>
        <style jsx>
          {`
            .header {
              margin-bottom: 30px;
              text-decoration: underline;
            }
            .logoContainer {
              width: 150px;
            }
            .logoContainer img {
              max-width: 100%;
              height: auto;
            }
            .bold {
              font-weight: bold;
            }
            .ratings {
              margin-bottom: 50px;
            }
            .templateContainer {
              border: 1px solid #d8d8d8;
              padding: 15px;
            }
          `}
        </style>
        <div className="templateContainer">
          <div className="header">
            <h6>Leave a review on Entity and get a gift!</h6>
          </div>
          <p>
            Dear{" "}
            <span className="bold">
              {formData.clientName.value !== ""
                ? formData.clientName.value
                : "Name"}
            </span>
          </p>
          <p>
            Since you recently used{" "}
            <span className="bold">
              {formData.entity.value !== ""
                ? formData.entity.value
                : "entity domain"}
            </span>
            , we would like to ask you to leave an honest review of our{" "}
            <span className="bold">service/product/services</span>.
          </p>
          <p>Please leave a review HERE:</p>
          <p className="ratings">
            <StarRatings
              rating={0}
              starRatedColor="#21bc61"
              starDimension="30px"
              starSpacing="0.5px"
              numberOfStars={5}
              name="rating"
            />
          </p>
          <p className="salutation">
            <div>Best regards,</div>
            <div>On behalf of Entity</div>
            <div>The TrustSearch team</div>
          </p>
          <p>
            <div className="logoContainer">
              <img src="/static/business/index/images/gradientLogo.png" />
            </div>
          </p>
          <div>
            P.S. TrustSearch is a neutral review gathering partner that provides
            the anonymity and security you need to leave a fair review. By
            leaving a review, you agree to the Privacy Policy at this link.
          </div>
        </div>
      </div>
    );
  };

  renderFormFields = () => {
    const { formData } = this.props;
    let output = [];
    for (let item in formData) {
      output = [
        ...output,
        <div className="col-md-12">
          <FormField
            {...formData[item]}
            id={item}
            handleChange={e => {
              this.props.handleChange(e, item, "selectTemplateData");
            }}
          />
        </div>
      ];
    }
    return [...output];
  };

  render() {
    return (
      <>
        {this.renderHeader()}
        {this.renderBody()}
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-2">
            <Button
              variant="contained"
              color="primary"
              startIcon={<ArrowLeft />}
              onClick={this.props.handleBack}
            >
              Back
            </Button>
          </div>
          <div className="col-md-2">
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowRight />}
              onClick={this.props.handleNext}
            >
              Continue
            </Button>
          </div>
        </div>
      </>
    );
  }
}