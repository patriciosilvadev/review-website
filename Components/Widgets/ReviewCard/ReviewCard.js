import React, { useState } from "react";
import RatingsBadge from "../RatingsBadge/RatingsBadge";
import RatingIndicators from "../RatingIndicators/RatingIndicators";
import uuid from "uuid/v1";
import { reviewCardStyles } from "./reviewCardStyles";
import Img from "react-image";
import CircularProgress from "@material-ui/core/CircularProgress";
import ImagePlaceholder from "./imagePlaceholder";
import Link from "next/link";

const getColorImg = image => {
  const imagePath = image.substring(0, image.lastIndexOf("/"));
  const imageTitle = image.substring(
    image.lastIndexOf("/") + 1,
    image.lastIndexOf(".")
  );
  let coloredImgTitle = imageTitle + "_color.png";
  return imagePath + "/" + coloredImgTitle;
};

const renderReviewCard = (
  {
    avatar,
    date,
    name,
    score,
    text,
    variant,
    ampImgHeight,
    ampImgWidth,
    title,
    body,
    image,
    fallbackImage,
    designation,
    specialistIn,
    productPicStyles,
    additionalData,
    subTitle,
    subTitleStyles,
    imgContainerStyles
  },
  colorImg,
  setColorImg
) => {
  switch (variant) {
    case "reviews":
      return (
        <div className="reviewCardContainer">
          <style jsx>{reviewCardStyles}</style>
          <div className="reviewProfilePic">
            <div className="reviewPicContainer">
              <img
                src={avatar}
                alt="trustsearchlogo"
                classes="footerTopLogo"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "50%"
                }}
              />
            </div>
          </div>
          <div className="reviewDetails">
            <div className="reviewerName">{name}</div>
            <div className="reviewRatings">
              <div className="badge">
                <RatingsBadge
                  ratingCount={score}
                  style={{ padding: "5% 7% 5% 7%" }}
                />
              </div>
              <div className="rating">
                <RatingIndicators
                  rating={score}
                  typeOfWidget="star"
                  widgetRatedColors="#febe42"
                  widgetDimensions="20px"
                  widgetSpacings="0px"
                />
              </div>
              <div className="date">
                <div>
                  <i className="fa fa-calendar-o"></i> {date}
                </div>
              </div>
            </div>
            <div className="reviewText">
              <p>{text}</p>
            </div>
          </div>
        </div>
      );

    case "business":
      return (
        <div className="reviewCardContainer">
          <style jsx>{reviewCardStyles}</style>
          <div className="businessProfilePic">
            <div className="businessPicContainer">
              <img src={image} style={{ height: "auto", maxWidth: "100%" }} />
            </div>
          </div>
          <div className="businessDetails">
            <div className="businessTitle">{title}</div>
            <div className="businessText">
              <p>{body}</p>
            </div>
          </div>
        </div>
      );

    case "team":
      return (
        <div className="reviewCardContainer">
          <style jsx>{reviewCardStyles}</style>
          <div
            className="businessProfilePic"
            onMouseEnter={e => {
              setColorImg(true);
            }}
            onMouseLeave={e => {
              setColorImg(false);
            }}
          >
            <div className="teamPicContainer">
              <img
                src={colorImg ? getColorImg(image) : image}
                style={{ height: "auto", maxWidth: "100%" }}
              />
            </div>
          </div>
          <div className="businessDetails">
            <div className="individualName">
              {name.substring(0, name.indexOf(" "))}
            </div>
            <div className="individualName">
              {name.substring(name.indexOf(" "), name.length)}
            </div>
            <div className="individualDesignation">{designation}</div>
            <div className="individualSpecialization">
              {specialistIn.length > 0
                ? specialistIn.map(item => {
                    return (
                      <div className="specializationItem" key={uuid()}>
                        {item}
                      </div>
                    );
                  })
                : null}
            </div>
            {/* specialistIn */}
          </div>
        </div>
      );

    case "productCard":
      return (
        <div className="productCardContainer">
          <style jsx>{reviewCardStyles}</style>
          <div className="productProfilePic">
            <div className="productCardPicContainer">
              <Img
                src={[image, ""]}
                loader={
                  <div
                    style={{
                      textAlign: "center",
                      height: "156px",
                      width: "250"
                    }}
                  >
                    <CircularProgress />
                  </div>
                }
                style={{
                  height: "auto",
                  maxWidth: "100%",
                  ...productPicStyles
                }}
              />
              {/* <img
                src={image}
                style={{
                  height: "auto",
                  maxWidth: "100%",
                  ...productPicStyles
                }}
              /> */}
            </div>
          </div>
          <div className="productCardDetails">
            <div className="productCardTitle">
              <h4>{title}</h4>
            </div>
            <div className="productCardText">
              <div>{body}</div>
            </div>
            <div className="productCardText" style={{ marginTop: "15px" }}>
              <div>{additionalData || ""}</div>
            </div>
          </div>
        </div>
      );

    case "profileHeaderCard":
      let imgSrc = image ? image : fallbackImage;
      return (
        <div className="productCardContainer">
          <style jsx>{reviewCardStyles}</style>
          <div className="productProfilePic ">
            <div
              className="productCardPicContainer profileHeaderPicContainer"
              style={{ ...imgContainerStyles }}
            >
              <img
                src={imgSrc}
                style={{
                  height: "auto",
                  maxWidth: "100%",
                  ...productPicStyles
                }}
              />
              {/* <Img
                src={[
                  fallbackImage,
                  image,
                  "/static/images/noimageavailable.jpg"
                ]}
                loader={
                  <div
                    style={{
                      height: "156px",
                      width: "250",
                      margin: "20px 100px"
                    }}
                  >
                    <CircularProgress />
                  </div>
                }
                style={{
                  height: "auto",
                  maxWidth: "100%",
                  ...productPicStyles
                }}
              /> */}
            </div>
          </div>
          <div className="productCardDetails">
            <div className="productCardTitle">
              <a
                href={`https://${title}`}
                style={{ color: "black", textDecoration: "none" }}
                target="_blank"
              >
                <h4 style={{ textTransform: "lowercase" }}>{title}</h4>
              </a>
            </div>
            <div className="productSubTitle  profileHeaderText">
              <div style={{ ...subTitleStyles }}>{subTitle}</div>
            </div>
            <div className="productCardText profileHeaderStar">
              <div>{body}</div>
            </div>
            <div className="productCardText" style={{ marginTop: "15px" }}>
              <div>{additionalData || ""}</div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

const ReviewCard = props => {
  const [colorImg, setColorImg] = useState(false);
  return <>{renderReviewCard(props, colorImg, setColorImg)}</>;
};

export default ReviewCard;
