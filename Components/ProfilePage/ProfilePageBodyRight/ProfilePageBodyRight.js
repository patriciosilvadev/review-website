import React, { Component } from "react";
import Card from "../../MaterialComponents/Card";
import NewAnalysisCard from "../../Widgets/NewAnalysisCard/NewAnalysisCard";
import { profilePageBodyRightStyles } from "./profilePageBodyRightStyles";
import { trafficIcons } from "../../../utility/constants/trafficReportsConstants";
import uuid from "uuid/v1";
import { connect } from "react-redux";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import {
  SocialMediaPlaceholder,
  TrafficReportsPlaceholder,
  AnalysisReportsPlaceholder
} from "./Placeholders";
import ClaimYourWebsite from "../ClaimYourWebsite/ClaimYourWebsite";
import Button from "@material-ui/core/Button";

class ProfilePageBodyRight extends Component {
  renderAnalysisCards = data => {
    let output = [];
    if (Object.keys(data).length > 0) {
      for (let item in data) {
        if (data[item] !== "") {
          output = [
            ...output,
            <NewAnalysisCard
              key={uuid()}
              analysisTitle={item.split("_").join(" ")}
              analysisInfo={data[item]}
            />
          ];
        }
      }
    }
    return output;
  };

  renderAnalyzeReports = data => {
    return (
      <div>
        <style jsx>{profilePageBodyRightStyles}</style>
        <Card>
          <div className="analyzeCardHeader">
            <h5
              style={{ textAlign: "left", marginLeft: "15px" }}
              className="analyzeCardHeading"
            >
              <i className="fa fa-bar-chart analyzeCardHeaderIcon" />
              Analyze Reports
            </h5>
          </div>
          <div className="analyzeCardBody">
            <div className="row">
              <div className="col-md-12">{this.renderAnalysisCards(data)}</div>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  renderTrafficAnalysisCards = data => {
    let output = [];
    if (Object.keys(data).length > 0) {
      for (let item in data) {
        if (data[item] !== "") {
          output = [
            ...output,
            <NewAnalysisCard
              key={uuid()}
              analysisTitle={item.split("_").join(" ")}
              analysisInfo={data[item]}
              analysisIcon={(trafficIcons[item] || {}).name || ""}
            />
          ];
        }
      }
    }
    return output;
  };

  renderSocialMediaCards = data => {
    return data.map(item => {
      return (
        <NewAnalysisCard
          key={uuid()}
          analysisTitle={item.name || ""}
          analysisInfo={item.followers || ""}
          analysisIcon={item.icon || ""}
        />
      );
    });
  };

  renderTrafficAnalysisReports = data => {
    return (
      <div>
        <style jsx>{profilePageBodyRightStyles}</style>
        <Card>
          <div className="analyzeCardHeader">
            <h5
              style={{ textAlign: "left", marginLeft: "15px" }}
              className="analyzeCardHeading"
            >
              <i className="fa fa-line-chart analyzeCardHeaderIcon" />
              Traffic Reports
            </h5>
          </div>
          <div className="analyzeCardBody">
            <div className="row">
              <div className="col-md-12">
                {this.renderTrafficAnalysisCards(data)}
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  renderTrustPilotCard = () => {
    const { socialPlatformReviews } = this.props;
    const trustPilotDataOuter = _get(socialPlatformReviews, "18.data", {});
    const trustPilotDataInner = _get(socialPlatformReviews, "18.data.data", {});
    const profile_url = _get(trustPilotDataInner, "url", "");
    const verified = _get(trustPilotDataOuter, "verified", false);
    const total = _get(trustPilotDataInner, "tsTotal", 0);
    const claimed = _get(trustPilotDataInner, "claimed", false);
    const rating = _get(trustPilotDataInner, "rating", 0);
    const max_rating = _get(trustPilotDataInner, "max_rating", 0);
    const categories = _get(trustPilotDataInner, "categories", []);
    const image_url = "/static/images/trustpilotLogo.png";
    const description = _get(trustPilotDataInner, "description", "");
    const url = _get(trustPilotDataOuter, "url", "");
    const followers = _get(trustPilotDataOuter, "followers", 0);

    return (
      <div style={{ marginBottom: "50px" }}>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }
          .claimHeader {
            text-align: right;
          }
          .claimHeaderIconContainer {
            margin-right: 4px;
          }
          .claimHeaderIcon {
            color: rgb(252, 175, 22);
          }
          .brandImageContainer {
            height: 100px;
            width: 100px;
            margin: 0 auto;
          }
          .brandImage {
            max-width: 100%;
            height: auto;
          }
          .total {
            text-align: center;
          }
          .ratingContainer {
            text-align: center;
          }
          .ratingContainerText {
            font-size: 1.2rem;
          }
          .learnMoreBtn {
            text-align: center;
            margin: 15px 0 5px 0;
          }
          .description_header {
            font-weight: bold;
            font-size: 1rem;
          }
          .additionalDetailsHeader {
            font-weight: bold;
            font-size: 1rem;
          }
          .additionalDetails {
            display: flex;
            margin: 9px 0 9px 0;
          }
          .additionalDetails > div {
            flex-basis: 50%;
          }
          .additionalDetails > div:last-child {
            text-align: center;
          }
          @media screen and (max-width: 991px) {
            .additionalDetails {
              flex-direction: column;
            }
            .additionalDetailsHeader {
              font-weight: bold;
              font-size: 1rem;
              margin-bottom: 5px;
            }
            .description_header {
              margin-bottom: 5px;
            }
            .total {
              text-align: left !important;
            }
          }
        `}</style>
        <Card>
          <div className="claimHeader">
            <div>
              <span className="claimHeaderIconContainer">
                {claimed ? (
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "green" }}
                  ></i>
                ) : (
                  <i className="fa fa-warning claimHeaderIcon"></i>
                )}
              </span>
              {claimed ? "Claimed" : "Unclaimed"}
            </div>
          </div>
          <div className="brandImageContainer">
            <img src={image_url} className="brandImage" />
          </div>
          <div className="ratingContainer">
            <div className="ratingContainerText">
              <span className="bold">{rating ? rating : null}</span>{" "}
              {rating ? <span>out of </span> : null}
              <span className="bold">{max_rating ? max_rating : null}</span>
            </div>
          </div>
          {categories &&
          Array.isArray(categories) &&
          (categories || []).length > 0 ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">Categories :</div>{" "}
              <div style={{ textAlign: "left" }}>
                {Array.isArray(categories) && (categories || []).length > 0
                  ? categories.map((item, index) => {
                      return (
                        <span>
                          {item} {index !== categories.length - 1 ? "," : ""}{" "}
                        </span>
                      );
                    })
                  : null}
              </div>
            </div>
          ) : null}
          {total ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">Total Reviews :</div>{" "}
              <div className="total">{total}</div>
            </div>
          ) : null}
          {description ? (
            <div className="description">
              <div className="description_header">Description :</div>
              <p>
                {description.length > 200
                  ? description.substring(0, 200) + "..."
                  : description}
              </p>
            </div>
          ) : null}
          <div className="learnMoreBtn">
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {
                window.open(url);
              }}
            >
              See more
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  renderLinkedInCard = () => {
    const { socialPlatformReviews } = this.props;
    const linkedInData = _get(socialPlatformReviews, "13.data", {});
    const followers = _get(linkedInData, "data.followers", 0);
    const employee_count = _get(linkedInData, "data.employee_count", 0);
    const industry = _get(linkedInData, "data.industry", "");
    const company_size = _get(linkedInData, "data.company_size", "");
    const headquarters = _get(linkedInData, "data.headquarters", "");
    const type = _get(linkedInData, "data.type", "");
    const founded = _get(linkedInData, "data.founded", "");
    const specialities = _get(linkedInData, "data.specialities", "");
    const url = _get(linkedInData, "data.url", "");
    const employees = _get(linkedInData, "empolyees", []);

    return (
      <div style={{ marginBottom: "50px" }}>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }
          .claimHeader {
            text-align: right;
          }
          .claimHeaderIconContainer {
            margin-right: 4px;
          }
          .claimHeaderIcon {
            color: rgb(252, 175, 22);
          }
          .brandImageContainer {
            height: 80px;
            width: 80px;
            margin: 0 auto 30px auto;
          }
          .brandImage {
            max-width: 100%;
            height: auto;
          }
          .ratingContainer {
            text-align: center;
          }
          .ratingContainerText {
            font-size: 1.2rem;
          }
          .learnMoreBtn {
            text-align: center;
            margin: 15px 0 5px 0;
          }
          .description_header {
            font-weight: bold;
            font-size: 1rem;
          }
          .additionalDetailsHeader {
            font-weight: bold;
            font-size: 1rem;
          }
          .additionalDetails {
            display: flex;
            margin: 9px 0 9px 0;
          }
          .additionalDetails > div {
            flex-basis: 50%;
          }
          .additionalDetails > div:last-child {
            text-align: center;
          }
          @media screen and (max-width: 991px) {
            .additionalDetails {
              flex-direction: column;
            }
            .additionalDetailsHeader {
              font-weight: bold;
              font-size: 1rem;
              margin-bottom: 5px;
            }
            .description_header {
              margin-bottom: 5px;
            }
            .total {
              text-align: left !important;
            }
          }
        `}</style>
        <Card>
          <div className="brandImageContainer">
            <img src="/static/images/linkedinLogo.png" className="brandImage" />
          </div>
          {followers ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">Followers :</div>{" "}
              <div style={{ textAlign: "left" }}>{followers}</div>
            </div>
          ) : null}
          {employee_count ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">Employee count :</div>{" "}
              <div style={{ textAlign: "left" }}>{employee_count}</div>
            </div>
          ) : null}
          {industry ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">Industry :</div>{" "}
              <div style={{ textAlign: "left" }}>{industry}</div>
            </div>
          ) : null}
          {company_size ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">Company size :</div>{" "}
              <div style={{ textAlign: "left" }}>{company_size}</div>
            </div>
          ) : null}
          {headquarters ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">Headquarters :</div>{" "}
              <div style={{ textAlign: "left" }}>{headquarters}</div>
            </div>
          ) : null}
          {type ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">Type :</div>{" "}
              <div style={{ textAlign: "left" }}>{type}</div>
            </div>
          ) : null}
          {founded ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">Founded :</div>{" "}
              <div style={{ textAlign: "left" }}>{founded}</div>
            </div>
          ) : null}
          {specialities ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">Specialities :</div>{" "}
              <div style={{ textAlign: "left" }}>{specialities}</div>
            </div>
          ) : null}
          <div className="learnMoreBtn">
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {
                window.open(url);
              }}
            >
              See more
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  renderFacebookCard = () => {
    const { socialPlatformReviews } = this.props;
    const facebookData = _get(socialPlatformReviews, "1.data", {});
    const verified = _get(facebookData, "verified", false);
    const likes = _get(facebookData, "likes", 0);
    const url = _get(facebookData, "url", "");
    const followers = _get(facebookData, "followers", "");
    const username = _get(facebookData, "username", "");
    const rating = _get(facebookData, "data.rating", 0);
    const total = _get(facebookData, "data.tsTotal", 0);
    return (
      <div>
        <style jsx>
          {`
            .flexContainer {
              display: flex;
              align-items: center;
            }

            .flexContainer > div:last-child {
              flex-basis: 100%;
              margin-left: 15px;
            }

            .brandImageContainer {
              height: 100px;
              width: 100px;
            }
            .brandImage {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
            }
            .brandImageContainer {
              display: flex;
              align-items: center;
            }
            .description_header {
              font-weight: bold;
              font-size: 1rem;
            }
            .additionalDetailsHeader {
              font-weight: bold;
              font-size: 1rem;
            }
            .additionalDetails {
              display: flex;
              margin: 9px 0 9px 0;
            }
            .additionalDetails > div {
              flex-basis: 50%;
            }
            .additionalDetails > div:last-child {
              text-align: center;
            }
            .bold {
              font-weight: bold;
            }
            .claimHeader {
              text-align: right;
            }
            .claimHeaderIconContainer {
              margin-right: 4px;
            }
            .claimHeaderIcon {
              color: rgb(252, 175, 22);
            }
            .learnMoreBtn {
              text-align: center;
              margin: 15px 0 5px 0;
            }
            @media only screen and (max-width: 991px) {
              .additionalDetails {
                flex-direction: column;
              }
              .clainHeader {
                margin-bottom: 10px;
              }
            }
            @media only screen and (max-width: 767px) {
              .additionalDetails {
                flex-direction: row;
              }
            }
          `}
        </style>
        <Card>
          <div className="claimHeader">
            <div>
              <span className="claimHeaderIconContainer">
                {verified ? (
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "green" }}
                  ></i>
                ) : (
                  <i className="fa fa-warning claimHeaderIcon"></i>
                )}
              </span>
              {verified ? "Verified" : "Unverified"}
            </div>
          </div>
          <div className="flexContainer">
            <div className="brandImageContainer">
              <img
                src="/static/images/facebookLogo.png"
                className="brandImage"
              />
            </div>
            <div className="detailsContainer">
              {followers ? (
                <div className="additionalDetails">
                  <div className="additionalDetailsHeader">Followers :</div>{" "}
                  <div style={{ textAlign: "left" }}>{followers}</div>
                </div>
              ) : null}
              {likes ? (
                <div className="additionalDetails">
                  <div className="additionalDetailsHeader">Likes :</div>{" "}
                  <div style={{ textAlign: "left" }}>{likes}</div>
                </div>
              ) : null}
              {rating ? (
                <div className="additionalDetails">
                  <div className="additionalDetailsHeader">Rating :</div>{" "}
                  <div style={{ textAlign: "left" }}>{rating}</div>
                </div>
              ) : null}
              {total ? (
                <div className="additionalDetails">
                  <div className="additionalDetailsHeader">Total Reviews :</div>{" "}
                  <div style={{ textAlign: "left" }}>{total}</div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="learnMoreBtn">
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {
                window.open(url);
              }}
            >
              See more
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  renderTrustedShopCard = () => {
    const { socialPlatformReviews } = this.props;
    const trustedShopData = _get(socialPlatformReviews, "19.data", {});
    const total = _get(trustedShopData, "data.total", 0);
    const verified = _get(trustedShopData, "verified", false);
    const certificate_expiry_date = _get(
      trustedShopData,
      "data.certificate_expiry_date",
      ""
    );
    const rating = _get(trustedShopData, "data.rating", 0);
    const max_rating = _get(trustedShopData, "data.max_rating", 0);
    const categories = _get(trustedShopData, "data.categories", []);
    const image_url = _get(trustedShopData, "data.image_url", "");
    const description = _get(trustedShopData, "data.description", "");
    const url = _get(trustedShopData, "data.url", "");

    return (
      <div style={{ marginBottom: "50px" }}>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }
          .claimHeader {
            text-align: right;
          }
          .claimHeaderIconContainer {
            margin-right: 4px;
          }
          .claimHeaderIcon {
            color: rgb(252, 175, 22);
          }
          .brandImageContainer {
            height: 100px;
            width: 100px;
            margin: 0 auto;
          }
          .brandImage {
            max-width: 100%;
            height: auto;
          }
          .ratingContainer {
            text-align: center;
          }
          .ratingContainerText {
            font-size: 1.2rem;
            margin: 13px 0 13px 0;
          }
          .learnMoreBtn {
            text-align: center;
            margin: 15px 0 5px 0;
          }
          .description_header {
            font-weight: bold;
            font-size: 1rem;
          }
          .additionalDetailsHeader {
            font-weight: bold;
            font-size: 1rem;
          }
          .additionalDetails {
            display: flex;
            margin: 9px 0 9px 0;
          }
          .additionalDetails > div {
            flex-basis: 50%;
          }
          .additionalDetails > div:last-child {
            text-align: center;
          }
          @media screen and (max-width: 991px) {
            .claimHeader {
              margin-bottom: 10px;
            }
            .additionalDetails {
              flex-direction: column;
            }
            .additionalDetailsHeader {
              font-weight: bold;
              font-size: 1rem;
              margin-bottom: 5px;
            }
            .description_header {
              margin-bottom: 5px;
            }
            .total {
              text-align: left !important;
            }
            .additionalDetails > div:last-child {
              text-align: left;
            }
          }
          @media screen and (max-width: 767px) {
            .clainHeader {
              margin-bottom: 0;
            }
          }
        `}</style>
        <Card>
          <div className="claimHeader">
            <div>
              <span className="claimHeaderIconContainer">
                {verified ? (
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "green" }}
                  ></i>
                ) : (
                  <i className="fa fa-warning claimHeaderIcon"></i>
                )}
              </span>
              {verified ? "Verified" : "Unverified"}
            </div>
          </div>
          <div className="brandImageContainer">
            <img
              src="/static/images/trustedShopLogo.jpg"
              className="brandImage"
            />
          </div>
          <div className="ratingContainer">
            <div className="ratingContainerText">
              <span className="bold">{rating ? rating : null}</span>{" "}
              {rating ? <span>out of </span> : null}
              {max_rating ? <span className="bold">{max_rating}</span> : null}
            </div>
          </div>
          {categories &&
          Array.isArray(categories) &&
          (categories || []).length > 0 ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">Categories :</div>{" "}
              <div>
                {Array.isArray(categories) && (categories || []).length > 0
                  ? categories.map(item => {
                      return <span>{item} </span>;
                    })
                  : null}
              </div>
            </div>
          ) : null}
          {certificate_expiry_date ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">
                Certificate expiry date:
              </div>{" "}
              <div>{certificate_expiry_date}</div>
            </div>
          ) : null}
          {total ? (
            <div className="additionalDetails">
              <div className="additionalDetailsHeader">Total Reviews :</div>{" "}
              <div className="total">{total}</div>
            </div>
          ) : null}
          {description ? (
            <div className="description">
              <div className="description_header">Description :</div>
              <p>
                {description.length > 200
                  ? description.substring(0, 200) + "..."
                  : description}
              </p>
            </div>
          ) : null}
          <div className="learnMoreBtn">
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {
                window.open(url);
              }}
            >
              See more
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  renderSocialMediaReports = data => {
    return (
      <div>
        <style jsx>{profilePageBodyRightStyles}</style>
        <Card>
          <div className="analyzeCardHeader">
            <h5
              style={{ textAlign: "left", marginLeft: "15px" }}
              className="analyzeCardHeading"
            >
              <i className="fa fa-area-chart" style={{ marginRight: "7px" }} />
              Social Media Stats
            </h5>
          </div>
          <div className="analyzeCardBody">
            <div className="row">
              <div className="col-md-12">
                {this.renderSocialMediaCards(data)}
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  render() {
    const {
      domainProfileData,
      isLoading,
      socialPlatformReviews,
      companyNameFromPusher
    } = this.props;
    let showTrustPilot = false;
    let showTrustedShop = false;
    let showFacebook = false;
    let showLinkedInCard = false;

    //! change this cards show logic after response confirmation
    if (socialPlatformReviews.hasOwnProperty("18")) {
      if (
        _get(socialPlatformReviews, "18.data", null) !== null &&
        !_isEmpty(_get(socialPlatformReviews, "18.data", {})) &&
        !_isEmpty(_get(socialPlatformReviews, "18.data.data", {})) &&
        !_isEmpty(_get(socialPlatformReviews, "18.data.data.reviews", []))
      ) {
        showTrustPilot = true;
      } else {
        showTrustPilot = false;
      }
    }

    if (socialPlatformReviews.hasOwnProperty("19")) {
      if (
        _get(socialPlatformReviews, "19.data", null) !== null &&
        !_isEmpty(_get(socialPlatformReviews, "19.data", {})) &&
        !_isEmpty(_get(socialPlatformReviews, "19.data.data", {})) &&
        !_isEmpty(_get(socialPlatformReviews, "19.data.data.reviews", []))
      ) {
        showTrustedShop = true;
      } else {
        showTrustedShop = false;
      }
    }

    if (socialPlatformReviews.hasOwnProperty("1")) {
      if (
        _get(socialPlatformReviews, "1.data.likes", 0) ||
        _get(socialPlatformReviews, "1.data.followers", 0) ||
        _get(socialPlatformReviews, "1.data.data.rating", 0) ||
        _get(socialPlatformReviews, "1.data.data.total", 0)
      ) {
        showFacebook = true;
      } else {
        showFacebook = false;
      }
    }

    if (socialPlatformReviews.hasOwnProperty("13")) {
      if (
        _get(socialPlatformReviews, "13.data", null) !== null &&
        !_isEmpty(_get(socialPlatformReviews, "13.data", {})) &&
        !_isEmpty(_get(socialPlatformReviews, "13.data.data", {})) &&
        !_isEmpty(_get(socialPlatformReviews, "13.data.data.reviews", []))
      ) {
        showLinkedInCard = true;
      } else {
        showLinkedInCard = false;
      }
    }

    const analysisReportsData =
      ((domainProfileData || {}).analysisReports || {}).data || {};
    const trafficReportsData =
      ((domainProfileData || {}).trafficReports || {}).data || {};
    const socialMediaStatsData =
      ((domainProfileData || {}).socialMediaStats || {}).data || {};
    const analysisReportsWillCome =
      ((domainProfileData || {}).analysisReports || {}).willCome || false;
    const trafficReportsWillCome =
      ((domainProfileData || {}).trafficReports || {}).willCome || false;
    const socialMediaStatsWillCome =
      ((domainProfileData || {}).socialMediaStats || {}).willCome || false;
    const companyNameFromBusiness = _get(
      domainProfileData,
      "headerData.data.company",
      ""
    );
    return (
      <div>
        <style jsx>{profilePageBodyRightStyles}</style>
        <style jsx>
          {`
            @media only screen and (max-width: 767px) {
              .claim {
                margin-top: 25px;
              }
            }
          `}
        </style>
        {isLoading ? (
          <div>
            <div className="mb-25">
              <Card>
                <SocialMediaPlaceholder />
              </Card>
            </div>
            <div className="mb-25">
              <Card>
                <TrafficReportsPlaceholder />
              </Card>
            </div>
            <div className="mb-25">
              <Card>
                <AnalysisReportsPlaceholder />
              </Card>
            </div>
          </div>
        ) : (
          <div>
            {/* need to change mapping maybe later on */}
            {showTrustPilot ? this.renderTrustPilotCard() : null}
            {showTrustedShop ? this.renderTrustedShopCard() : null}
            {showLinkedInCard ? (
              <div className="mb-25">{this.renderLinkedInCard()}</div>
            ) : null}
            {showFacebook ? (
              <div className="mb-25">{this.renderFacebookCard()}</div>
            ) : null}
            {/* company is coming from verifyDomain whereas companyName is coming from business login api, so if both the names are same then we'll not show this box */}
            {companyNameFromPusher != companyNameFromBusiness ? (
              <div className="mb-25 claim">
                <ClaimYourWebsite variant="small" />
              </div>
            ) : null}
            <div>
              {socialMediaStatsWillCome ? (
                <div className="mb-25">
                  {this.renderSocialMediaReports(socialMediaStatsData)}
                </div>
              ) : null}
            </div>
            <div>
              {trafficReportsWillCome ? (
                <div className="mb-25">
                  {this.renderTrafficAnalysisReports(trafficReportsData)}
                </div>
              ) : null}
            </div>
            <div>
              {analysisReportsWillCome ? (
                <div className="mb-25">
                  {this.renderAnalyzeReports(analysisReportsData)}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { profileData, auth } = state;
  const socialPlatformReviews = _get(profileData, "socialPlatformReviews", {});
  const { domainProfileData, isLoading } = profileData;
  const companyNameFromPusher = _get(
    auth,
    "logIn.userProfile.company.name",
    ""
  );
  return {
    domainProfileData,
    isLoading,
    socialPlatformReviews,
    companyNameFromPusher
  };
};

export default connect(mapStateToProps)(ProfilePageBodyRight);
