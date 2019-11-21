import React, { Component } from "react";
import { connect } from "react-redux";
import _get from "lodash/get";
import _map from "lodash/map";
import { getThirdPartyReviews } from "../../../store/actions/dashboardActions";
import ReactPaginate from "react-paginate";
import Head from "next/head";
import Snackbar from "../../Widgets/Snackbar";
import { CircularProgress, Typography } from "@material-ui/core";
import ReviewCard from "../../Widgets/CommonReviewCard";
import NoReviewsFound from "./noReviewsFound";

class TrustedShops extends Component {
  state = {
    perPage: 10,
    showSnackbar: false,
    variant: "success",
    snackbarMsg: ""
  };

  handlePageChange = ({ selected }) => {
    const { fetchReviews, token } = this.props;
    fetchReviews(token, selected + 1);
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props !== prevProps) {
  //     const { error, success } = this.props;
  //     if (error && !success) {
  //       this.setState({
  //         showSnackbar: true,
  //         variant: "error",
  //         snackbarMsg: error
  //       });
  //     }
  //   }
  // }

  render() {
    const { reviews, isLoading, success } = this.props;
    return (
      <>
        <Head>
          <link rel="stylesheet" href="/static/css/reviews.css" />
        </Head>
        <style jsx>{`
          .reviewsContainer {
            margin: 20px 40px;
          }
          .pagination {
            list-style-type: none;
            display: inline-block;
            background-color: red;
          }
          .active {
            color: red;
          }

          .loaderContainer {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .listItem {
            display: none;
          }

          .paginationContainer {
            display: flex;
            flex: 1;
            justify-content: center;
            margin-top: 35px;
          }

          .loaderContainer {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .listItem {
            display: none;
          }
          .hiddenPagination {
            display: none;
          }
          .invitation_link {
            color: blue;
            cursor: pointer;
          }
          .invitation_link:hover {
            text-decoration: underline;
          }

          @media only screen and (max-width: 420px) {
            .reviewsContainer {
              margin: 0;
              font-size: 0.8rem;
            }
          }
        `}</style>
        <div className="reviewsContainer">
          {isLoading === true ? (
            <div className="loaderContainer">
              <CircularProgress color="secondary" />
            </div>
          ) : isLoading === false ? (
            !success ? (
              <NoReviewsFound />
            ) : (
              <>
                {_map(reviews, review => {
                  let reviewToSend = {
                    name: _get(review, "user", ""),
                    text: _get(review, "review", ""),
                    rating: _get(review, "rating", 0)
                  };
                  return (
                    <ReviewCard review={reviewToSend} provider="trustedshops" />
                  );
                })}
              </>
            )
          ) : null}
        </div>
        {/* <div
          className={`${
            isLoading || success == false
              ? "hiddenPagination"
              : "paginationContainer"
          }`}
        >
          <ReactPaginate
            pageCount={total / perPage}
            pageRangeDisplayed={total / perPage}
            marginPagesDisplayed={0}
            initialPage={0}
            onPageChange={this.handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            pageClassName={"listItem"}
            nextClassName={"listItem"}
            previousClassName={"listItem"}
            pageLinkClassName={"listLink"}
            nextLinkClassName={"listLink"}
            previousLinkClassName={"listLink"}
            activeClassName={"selectedPage"}
            activeLinkClassName={"selectedPage"}
            disabledClassName={"disabledButtons"}
            disableInitialCallback={true}
          />
        </div> */}
        {/* <Snackbar
          open={this.state.showSnackbar}
          variant={this.state.variant}
          handleClose={() => this.setState({ showSnackbar: false })}
          message={this.state.snackbarMsg}
        /> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  const { dashboardData } = state;
  const reviews = _get(dashboardData, "trustedshopsReviews.data", []);
  const success = _get(dashboardData, "trustedshopsReviews.success", undefined);
  const isLoading = _get(dashboardData, "trustedshopsReviews.isLoading", false);
  const errorMsg = _get(dashboardData, "trustedshopsReviews.errorMsg", "");
  return { reviews, success, isLoading, errorMsg };
};

export default connect(mapStateToProps, { getThirdPartyReviews })(TrustedShops);