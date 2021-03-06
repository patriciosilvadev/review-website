import React, { Component } from "react";
import Title from "../../../MaterialComponents/Title";
import SimpleCard from "../../../MaterialComponents/Card";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import FetchedIcon from "@material-ui/icons/CheckCircleRounded";
import CircularProgress from "@material-ui/core/CircularProgress";
import { isValidArray } from "../../../../utility/commonFunctions";
import _get from "lodash/get";
import _find from "lodash/find";

class ReviewFetchStatusCard extends Component {
  render() {
    const { reviewFetchStatusArray } = this.props;
    return (
      <Grid item xs={12} md={4} lg={4}>
        <style jsx>{`
          .body {
            margin: 10px 0px;
          }
          .p_10 {
            padding: 10px 0px;
          }
          .platform_name {
            font-size: 18px;
            font-weight: bold;
          }
          .link {
            color: #008dec;
          }
          .link:hover {
            cursor: pointer;
            text-decoration: underline;
          }
          .text_right {
            text-align: right;
          }
          .ml_10 {
            margin-left: 10px;
          }
          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 220px;
          }
        `}</style>
        <SimpleCard style={{ height: "298px", overflowY: "auto" }}>
          <div className="header">
            <Title>
              <span>Reviews Fetch Status</span>
            </Title>
          </div>
          <div className="body">
            {isValidArray(reviewFetchStatusArray) ? (
              (reviewFetchStatusArray || []).map(platform => {
                const { platformName, socialAppId, isLoading } = platform;
                return (
                  <div className="row p_10">
                    <div className="col-md-6 platform_name">
                      {platformName || "N/A"}
                    </div>
                    <div className="col-md-6 text_right">
                      {isLoading ? (
                        <div>
                          <span>Fetching Reviews...</span>
                          <CircularProgress size={15} />
                        </div>
                      ) : (
                        <>
                          <FetchedIcon
                            style={{ color: "green", height: "16px" }}
                          />
                          {/* need to fig out how to navigate */}
                          {/* <span
                            className="link ml_10"
                            onClick={() =>
                              this.props.navigateToReviews(Number(socialAppId))
                            }
                          >
                            See Reviews
                          </span> */}
                        </>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="loader">
                <CircularProgress color="secondary" />
              </div>
            )}
          </div>
        </SimpleCard>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const { dashboardData } = state;
  const reviews = _get(dashboardData, "reviews", {});
  const reviewPlatforms = _get(dashboardData, "review_platforms.data", {});
  //# Creating data for review fetch status card
  let reviewFetchStatusArray = [];
  const reviewPlatformsKeys = Object.keys(reviews);
  reviewFetchStatusArray = (reviewPlatformsKeys || []).map(platform => {
    let socialAppId = platform;
    let platformName = _get(reviewPlatforms, Number(platform) || "", "");
    let isLoading = false;
    let platformObj = reviews[platform];
    for (let place in platformObj) {
      let placeObj = platformObj[place];
      const isLoadingPlace = _get(placeObj, "isLoading", false);
      if (isLoadingPlace) {
        isLoading = true;
      }
    }
    //# ************************************ */
    return {
      platformName,
      socialAppId,
      isLoading
    };
  });
  return {
    reviewFetchStatusArray
  };
};

export default connect(mapStateToProps)(ReviewFetchStatusCard);
