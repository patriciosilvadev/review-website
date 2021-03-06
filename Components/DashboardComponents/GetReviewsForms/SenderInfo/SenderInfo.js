import React, { Component } from "react";
import FormField from "../../../Widgets/FormField/FormField";
import validate from "../../../../utility/validate";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Modal from "../../../Widgets/CustomModal/CustomModal";
import VerifyEmailModal from "./VerifyEmailModal";
import { Button } from "@material-ui/core";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Link from "next/link";

class SenderInfoForm extends Component {
  state = {
    showModal: false
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { formData } = this.props;
    let valid = true;
    for (let item in formData) {
      valid = valid && formData[item].valid;
    }
    const senderMail = formData.senderMail;
    return (
      <>
        <div className="container">
          <style jsx>
            {`
              .mainHeading {
                font-weight: 100;
                font-size: 28px;
                letter-spacing: 0.5px;
                margin-bottom: 15px;
              }

              .mainContent {
                font-size: 16px;
              }

              .formText {
                margin-top: 30px;
                font-size: 18px;
              }

              .asterisk {
                color: red;
                margin-left: 10px;
              }

              .textnote {
                color: grey;
                font-size: 16px;
              }
              @media only screen and (max-width: 454px) {
                .mainContent {
                  font-size: 15px;
                }
                .formText {
                  font-size: 15px;
                }
                .textnote {
                  font-size: 15px;
                }
              }
              @media only screen and (max-width: 400px) {
                .mainContent {
                  font-size: 12px;
                }
                .formText {
                  font-size: 12px;
                }
                .textnote {
                  font-size: 12px;
                }
              }
            `}
          </style>
          <div className="row">
            <div className="col-md-7">
              <h1 className="mainHeading">Sender Information</h1>
              <span className="mainContent">
                Set up your Sender Name and Sender Email - they appear in your
                customers’ inboxes when they receive your email invitation. The
                Reply-to Email is the address you’d like your customers to use
                when replying to your email.{" "}
                <span>
                  <a href="#">Need more info?</a>
                </span>
              </span>
              <p className="formText">
                <b>Sender's Name:</b>
                <span className="asterisk">*</span>
              </p>
              <FormField
                {...formData.senderName}
                handleChange={e => {
                  this.props.handleChange(e, "senderName", "senderInfoData");
                }}
                id="senderName"
                rows="5"
                col="5"
              />
              {/* <p className="formText">
                <b>Reply-to Email:</b>
              </p>
              <FormField
                {...formData.replyToEmail}
                handleChange={e => {
                  this.props.handleChange(e, "replyToEmail", "senderInfoData");
                }}
                id="replyToEmail"
                rows="5"
                col="5"
                styles={{ height: "38px" }}
              /> */}
              {/* For premium users when they can add their own email domains */}
              {/* <a href="#" onClick={() => this.setState({ showModal: true })}>
                Add another Reply-to Email
              </a> */}
              <p className="formText">
                <b>Sender Email: </b>
                <span>noreply@thetrustsearch.com</span>
              </p>
              <p className="textnote">
                * Upgrade to premium to send inviatations using your own email
                domain.
              </p>
              {/* For premium users when they can add their own email domains */}
              {/* <RadioGroup
                aria-label="gender"
                name="senderEmail"
                value={senderMail}
                onChange={this.props.handleRadioChange}
              >
                <FormControlLabel
                  value="non-technical"
                  control={<Radio />}
                  label="Send from noreply@thetrustsearch.com.com (no further setup required)"
                />
                <FormControlLabel
                  value="technical"
                  control={<Radio />}
                  label="Send email using your own email domain for the Sender Address (requires technical knowledge to set up)"
                />
              </RadioGroup> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "20px" }}>
            <style jsx>
              {`
                @media only screen and (max-width: 767px) {
                  .backBtn {
                    margin-left: 5px;
                    margin-bottom: 15px;
                  }
                }
              `}
            </style>
            <div className="col-md-2">
              <div className="backBtn">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<ArrowLeft />}
                  onClick={this.props.handleBack}
                >
                  Back
                </Button>
              </div>
            </div>
            <div className="col-md-2">
              <Button
                variant="contained"
                color="primary"
                size="small"
                endIcon={<ArrowRight />}
                onClick={this.props.handleNext}
                disabled={!valid}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
        <Modal
          showModal={this.state.showModal}
          handleModalClose={this.handleModalClose}
          modalCustomStyles={{
            background: "#f9f9f9",
            border: "1px solid #fff"
          }}
        >
          <VerifyEmailModal />
        </Modal>
      </>
    );
  }
}

export default SenderInfoForm;
