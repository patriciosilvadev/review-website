import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Title from "../MaterialComponents/Title";
import Button from "@material-ui/core/Button/Button";
import Input from "@material-ui/core/Input/Input";
import uuid from "uuid/v1";
import Head from "next/head";
import BackArrowIcon from "@material-ui/icons/KeyboardBackspace";
import _get from "lodash/get";
import Router from "next/router";
import FormField from "../Widgets/FormField/FormField";
import CombinedReviewsWidgetConfigurations from "../DashboardComponents/WidgetsShowCase/CombinedReviewsWidgetConfigurations";
import { newerThanMonthsOptions } from "../../utility/constants/newerThanMonthsConstants";
import { maxReviewsOptions } from "../../utility/constants/maxReviewsConstants";
import { ratingCountOptions } from "../../utility/constants/ratingCountConstants";
import widgetTranslationLanguages from "../../utility/constants/widgetTranslationLanguages";
import SelectLanguage from "../DashboardComponents/WidgetsShowCase/CombinedReviewsWidgetConfigurations/SelectLanguage";
const platforms = [
  {
    value: "22",
    name: "Google"
  },
  {
    value: "1",
    name: "Facebook"
  },
  {
    value: "18",
    name: "Trustpilot"
  },
  {
    value: "19",
    name: "TrustedShops"
  }
];

class GetWidgetsCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgetHeight: _get(this.props, "widget.minHeight", 0),
      refreshWidget: false,
      selectedLanguage: widgetTranslationLanguages[0],
      platforms: {
        element: "select",
        name: "platforms",
        value: platforms[0].value,
        options: [...platforms],
        placeholder: "Select your platform",
        valid: false,
        touched: false,
        errorMessage: "",
        id: "platforms",
        labelText: "Select a review platform"
      },
      selectedMaxReviews: {
        ...(maxReviewsOptions[0] || {
          value: 24,
          label: "24 reviews per platform"
        })
      },
      selectedNewerThanMonths: {
        ...(newerThanMonthsOptions[0] || { value: 0, label: "Not needed" })
      },
      selectedRatingCount: {
        ...(ratingCountOptions[2] || { value: 3, label: "3 stars and above" })
      }
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderContent = data => {
    return data.map(item => {
      return (
        <p style={{ fontWeight: "bold" }} key={uuid()}>
          {item}
        </p>
      );
    });
  };

  handleFormDataChange = (e, id) => {
    this.setState(
      {
        platforms: { ...this.state.platforms, value: e.target.value },
        refreshWidget: true
      },
      () => {
        setTimeout(() => {
          this.setState({ refreshWidget: false });
          this.props.scrollToTopOfThePage();
        }, 1000);
      }
    );
  };

  renderWidgetInfo = () => {
    const { widget, domainName } = this.props;
    return (
      <Paper style={{ padding: "25px" }}>
        <style jsx>
          {`
            .widgetBox {
              padding: 15px;
            }
            .widgetImgContainer {
              width: 80%;
              height: auto;
              margin: 0 auto;
            }
            .widgetImgContainerSm {
              width: 40%;
              height: auto;
              margin: 0 auto;
            }
            .widgetImgContainer img,
            .widgetImgContainerSm img {
              max-width: 100%;
              height: auto;
            }
            .mt {
              margin-top: 20.5px;
            }
          `}
        </style>
        <Title>About the {widget.title}</Title>
        <p>{widget.description}</p>
        <div>
          <div
            className={`${
              widget.id === 1 || widget.id === 0
                ? "widgetImgContainer"
                : "widgetImgContainerSm"
            }`}
          >
            <img src={widget.imgURL} />
          </div>
        </div>
        <h6 style={{ marginTop: "25px" }}>Suggested placement: </h6>
        {this.renderContent(widget.suggestedPlacement)}
        <h6>Supported devices/sizes: </h6>
        {this.renderContent(widget.support)}
        <p>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
              const href = `/get-widgets?domain=${domainName}#${widget.widgetType ||
                ""}`;
              const as = `/get-widgets/${domainName}`;
              Router.push(href, as, { shallow: true });
              this.props.getMoreWidgets();
            }}
          >
            Get more widgets
          </Button>
        </p>
      </Paper>
    );
  };

  handleWidgetConfigurationChange = (id, valObj) => {
    this.setState(
      {
        [id]: { ...valObj },
        refreshWidget: true
      },
      () => {
        setTimeout(() => {
          this.setState({ refreshWidget: false });
          this.props.scrollToTopOfThePage();
        }, 1000);
      }
    );
  };

  renderInput = () => {
    const { widgetHeight } = this.state;
    return (
      <>
        <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
          1.1-) Enter widget height:{" "}
        </div>
        <Input
          value={widgetHeight}
          onChange={e => {
            this.setState({ widgetHeight: e.target.value });
          }}
        />
        (in px)
        <div>
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              marginTop: "15px"
            }}
          >
            Select your review platform:{" "}
          </div>
          <FormField
            {...this.state.platforms}
            handleChange={e => {
              this.handleFormDataChange(e, "platforms");
            }}
            styles={{
              height: "38px"
            }}
          />
        </div>
      </>
    );
  };

  handleSelectedLanguageChange = valObj => {
    this.setState(
      {
        selectedLanguage: { ...valObj },
        refreshWidget: true
      },
      () => {
        setTimeout(() => {
          this.setState({ refreshWidget: false });
          this.props.scrollToTopOfThePage();
        }, 1000);
      }
    );
  };

  getYourWidgetBox = () => {
    const { domainName, widget } = this.props;
    const widgetId = _get(widget, "id", "");
    const {
      selectedPlatform,
      selectedMaxReviews,
      selectedNewerThanMonths,
      selectedRatingCount
    } = this.state;
    return (
      <>
        <style jsx>
          {`
            .header {
              border-bottom: 1px solid #d1d1d1;
            }
            .blue {
              color: blue;
            }
            .body {
              margin-top: 25px;
            }
            .subHeading {
              font-weight: bold;
            }
            .comment {
              color: #999;
            }
            .codeBlock {
              font-size: 1rem;
            }
            .inputContainer {
              margin: 25px 0 25px 0;
            }

            .mb-50 {
              margin-bottom: 50px;
            }
          `}
        </style>
        <Paper
          style={{ padding: "25px", marginTop: "0px", marginBottom: "100px" }}
        >
          <div>
            <div className="header">
              <Title>Get your trust widget</Title>
            </div>
            <div style={{ marginTop: "20px" }}>
              {this.renderContent(widget.support)}
            </div>

            <div className="body">
              <h6 style={{ lineHeight: "2" }}>1-)</h6>
              {widgetId !== 0 ? (
                <>
                  <div className="inputContainer">{this.renderInput()}</div>
                  <SelectLanguage
                    value={this.state.selectedLanguage}
                    handleChange={this.handleSelectedLanguageChange}
                  />
                </>
              ) : (
                <CombinedReviewsWidgetConfigurations
                  selectedMaxReviews={selectedMaxReviews}
                  selectedNewerThanMonths={selectedNewerThanMonths}
                  selectedRatingCount={selectedRatingCount}
                  handleChange={this.handleWidgetConfigurationChange}
                  selectedLanguageData={this.state.selectedLanguage}
                  handleSelectedLanguageChange={
                    this.handleSelectedLanguageChange
                  }
                  hideDashboardParticularSettings={true}
                />
              )}
              <p className="subHeading">
                1.2-) Copy-paste this code inside the {`<head></head>`} section
                of your website’s HTML or as close to the top of the page as
                possible.
              </p>
              <div className="codeBlock">
                <pre className="comment">{`<!-- TrustBox script -->`}</pre>
                {widgetId === 0 ? (
                  <code className="blue">{`
                    <script type="text/javascript" src="${process.env.WIDGET_BASE_URL}/static/tsWidget/v1/ts.widget_v1.min.js"
                    async></script>
                `}</code>
                ) : (
                  <code className="blue">{`
                <script type="text/javascript" src="${process.env.WIDGET_BASE_URL}/static/tsWidget/v1/ts.widget_v1.min.js"
                async></script>
            `}</code>
                )}
                <pre className="comment">{`<!-- End TrustBox script -->`}</pre>
              </div>
            </div>
            <div className="body">
              <h6 style={{ lineHeight: "2" }}>2-)</h6>
              <p className="subHeading">
                Copy-paste this code into the HTML of your website where you’d
                like your TrustBox to appear.
              </p>
              <div className="codeBlock">
                <pre className="comment">{`<!-- TrustBox script -->`}</pre>
                {widgetId === 0 ? (
                  <code className="blue">{`
                    <div class="trustsearch-widget" 
                    data-locale="${this.state.selectedLanguage.value}"
                    data-template-id="${this.props.widget.dataTempID}" 
                    data-businessunit-id="${this.props.domainName ||
                      "google.com"}"
                    data-style-height="${this.state.widgetHeight}px"
                    data-style-width="100%"
                    data-theme="light"
                    style="position: relative;
                    overflow: hidden;"
                    data-platform-id="${this.state.platforms.value}"
                    data-max-reviews="${_get(
                      this.state,
                      "selectedMaxReviews.value",
                      24
                    )}"
                    data-newer-than-months="${_get(
                      this.state,
                      "selectedNewerThanMonths.value",
                      ""
                    )}"
                    data-rating="${_get(
                      this.state,
                      "selectedRatingCount.value",
                      ""
                    )}"
                    data-show-branding="1"
                    ></div> 
                `}</code>
                ) : (
                  <code className="blue">{`
                <div class="trustsearch-widget" 
                data-locale="${this.state.selectedLanguage.value}"
                data-template-id="${this.props.widget.dataTempID}" 
                data-businessunit-id="${this.props.domainName || "google.com"}"
                data-style-height="${this.state.widgetHeight}px"
                data-style-width="100%"
                data-theme="light"
                style="position: relative;
                overflow: hidden;"
                data-platform-id="${this.state.platforms.value}"
                data-show-branding="1"
                ></div> 
            `}</code>
                )}
                <pre className="comment">{`<!-- End TrustBox script -->`}</pre>
              </div>
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {
                const href = `/get-widgets?domain=${domainName}#${widget.widgetType ||
                  ""}`;
                const as = `/get-widgets/${domainName}`;
                Router.push(href, as, { shallow: true });
                this.props.getMoreWidgets();
              }}
            >
              Get more widgets
            </Button>
          </div>
        </Paper>
      </>
    );
  };

  renderWidget = () => {
    const { domainName, widget } = this.props;
    const widgetId = _get(widget, "id", "");
    return (
      <>
        <Head>
          {widgetId === 0 ? (
            <script
              type="text/javascript"
              src={`${process.env.WIDGET_BASE_URL}/static/tsWidget/v1/ts.widget_v1.min.js`}
              async
            ></script>
          ) : (
            <script
              type="text/javascript"
              src={`${process.env.WIDGET_BASE_URL}/static/tsWidget/v1/ts.widget_v1.min.js`}
              async
            ></script>
          )}
        </Head>
        <div
          className="trustsearch-widget"
          data-locale={_get(this.state, "selectedLanguage.value", "EN")}
          data-template-id={_get(this.props, "widget.dataTempID", "")}
          data-businessunit-id={_get(this.props, "domainName", "")}
          data-style-height={`${_get(this.state, "widgetHeight", "")}px`}
          data-style-width="100%"
          data-theme="light"
          data-platform-id={_get(this.state, "platforms.value", "0")}
          style={{ position: "relative", overflow: "hidden" }}
          data-max-reviews={_get(this.state, "selectedMaxReviews.value", 24)}
          data-newer-than-months={_get(
            this.state,
            "selectedNewerThanMonths.value",
            ""
          )}
          data-rating={_get(this.state, "selectedRatingCount.value", "")}
          data-show-branding={1}
        ></div>
      </>
    );
  };

  render() {
    const { domainName, widget } = this.props;
    const widgetId = _get(widget, "id", "");
    return (
      <div className="container">
        <div style={{ marginBottom: "50px" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<BackArrowIcon />}
            onClick={() => {
              const href = `/get-widgets?domain=${domainName}#${widget.widgetType ||
                ""}`;
              const as = `/get-widgets/${domainName}`;
              Router.push(href, as, { shallow: true });
              this.props.getMoreWidgets();
            }}
          >
            Back
          </Button>
        </div>
        {!this.state.refreshWidget ? this.renderWidget() : null}
        <div className="row">
          {/* <div className="col-md-6">{this.renderWidgetInfo()}</div> */}
          <div className="col-md-12">{this.getYourWidgetBox()}</div>
        </div>
      </div>
    );
  }
}

export default GetWidgetsCode;
