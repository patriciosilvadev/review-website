import React from "react";
import uuid from "uuid/v1";
import { aboutPageStyles } from "../Components/Styles/aboutPageStyles";
import { layoutStyles } from "../style";
import SolutionForCompaniesList from "../Components/Widgets/SolutionForCompaniesList/SolutionForCompaniesList";

class About extends React.Component {
  renderAboutHero = () => {
    return (
      <div className="aboutHeroContainer">
        <style jsx>{aboutPageStyles}</style>
        <div className="container">
          <div className="aboutHeroLogoContainer">
            <img
              src="/static/business/index/images/gradientLogo.png"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="aboutHeroContent">
            <div className="row">
              <div
                className="col-md-6"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="aboutHeroHeading">
                  <div>
                    <h1 className="heading">Search Engine for trust</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="aboutHeroImage">
                  <img
                    src="/static/about/images/mobile.png"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderUserProblemSection = () => {
    return (
      <div className="userProblemContainer">
        <style jsx>{aboutPageStyles}</style>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="userProblemImageContainer">
                <img
                  src="/static/about/images/laptop.png"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="userProblemText">
                <div className="userProblemTextHeader">
                  <h1 className="heading1">
                    <span style={{ textTransform: "uppercase" }}>Problem</span>
                  </h1>
                  <h1 className="heading2">for internet users</h1>
                </div>
                <div className="userProblemTextBody">
                  <div style={{ marginBottom: "2%" }}>
                    For internet users the divroblem is to understand if it's
                    safe and reliable to use/buy something from this website.
                    How to avoid scam and fraud online and check the honesty of
                    a website?{" "}
                  </div>
                  <div>
                    Now internet users are reading reviews in trustpilot, doing
                    google search for other feedback, checking soc.media sites
                    etc. Which takes too much time and is not effective.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderUserSolutionSection = () => {
    return (
      <div className="userSolutionContainer">
        <style jsx>{aboutPageStyles}</style>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="userSolutionHeader">
                <h1>
                  <span style={{ textTransform: "uppercase" }}>solution</span>{" "}
                  for internet users
                </h1>
              </div>
              <div className="userSolutionBody">
                <p>
                  SearchEngine and Application that gives instant crowd-sourced
                  trust and safety background check for web pages and companies.
                  Gathering data from around the web in the search results and
                  rewarding internet users, who are giving reviews and reports
                  on websites.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="userSolutionImageContainer">
                <img
                  src="/static/about/images/solution.png"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderCompaniesProblemSection = () => {
    return (
      <div className="companiesProblemContainer">
        <style jsx>{aboutPageStyles}</style>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="companiesProblemImgContainer">
                <img
                  src="/static/about/images/trust.png"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div
              className="col-md-6"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="companiesProblemText">
                <div className="companiesProblemHeader">
                  <h1 className="heading1">
                    <span style={{ textTransform: "uppercase" }}>Problem</span>
                  </h1>
                  <h1 className="heading2">for companies</h1>
                </div>
                <div className="companiesProblemBody">
                  <div>
                    For website owners/companies the problem is increase
                    conversion rate by achieving trust and safety with their
                    band in the eyes of the site visitors that would persuade
                    their potential clients that the company is honest and
                    provides good services.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <style jsx>{layoutStyles}</style>
        {this.renderAboutHero()}
        {this.renderUserProblemSection()}
        {this.renderUserSolutionSection()}
        {this.renderCompaniesProblemSection()}
      </div>
    );
  }
}
export default About;

