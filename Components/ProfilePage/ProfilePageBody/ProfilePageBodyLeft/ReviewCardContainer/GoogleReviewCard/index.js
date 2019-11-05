import React from "react";
import { reviewListStyles } from "../../../../../Widgets/MyReviewsUser/myReviewsStyles";
import RatingIndicators from "../../../../../Widgets/RatingIndicators/RatingIndicators";
import _get from "lodash/get";
import moment from "moment";

const GoogleReviewCard = ({ review, provider }) => {
  const { name, text, rating, date } = review;

  return (
    <div className="reviewCard">
      <style jsx> {reviewListStyles}</style>
      <style jsx>{`
        .smallDate{
          display:none;
        }
        @media screen and (max-width:991px){
          .fullDate{
            display:none;
          }
          .smallDate{
            display:block;
          }
        }
        @media screen and (max-width:767px){
          .dateContainer{
            margin-top:22px;
          }
          .fullDate{
            display:block;
          }
          .smallDate{
            display:none;
          }
        }
      `}</style>
      <div style={{ textAlign: "right", margin: "7px 20px 0px 0px" }}>
        {/* <i style={{ color: "#DB4437" }} className="fa fa-google"></i> */}
      </div>
      <div className="row topBox">
        <div className="col-md-4 ratingBox">
          <div>
            <RatingIndicators
              rating={Number(rating) || 0}
              typeOfWidget="star"
              widgetRatedColors="#21bc61"
              widgetDimensions="21px"
              widgetSpacings="1px"
            />
            <p className="userName">
              {provider === "google" ? (
                <img
                  src="/static/images/googleIcon.png"
                  style={{ height: "10px", width: "10px", marginRight: "10px" }}
                />
              ) : provider === "wot" ? (
                <img
                  src="/static/images/wotLogo.png"
                  style={{ height: "10px", width: "10px", marginRight: "10px" }}
                />
              ) : null}
              {name || ""}
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <div>
              <span
                className={`${
                  provider === "wot" ? "reviewText wordBreak" : "reviewText"
                }`}
              >
                {text || ""}
              </span>
            </div>
          </div>
        </div>
        {provider === "wot" ? (
          <div className="col-md-2">
            <div>
              <div className="dateContainer">
                <span className="fullDate">{moment(date).format("DD/MM/YYYY")}</span>
                <span className="smallDate">{moment(date).format("YYYY")}</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GoogleReviewCard;
