import React from "react";
import uuid from "uuid/v1";
import Link from "next/link";
import { aboutPageStyles } from "../Components/Styles/aboutPageStyles";
import { layoutStyles } from "../style";
import SolutionForCompaniesList from "../Components/Widgets/SolutionForCompaniesList/SolutionForCompaniesList";
import ReviewCard from "../Components/Widgets/ReviewCard/ReviewCard";

class About extends React.Component {
  state = {
    selectedInvestor: "rtu",
    investors: {
      qube:
        "Swiss-Qube is TrustSearch Pilot client - food supplement company for losing weight. The Swiss-QUBE nutrition concept was developed by doctors and is a ticket to a new, healthy lifestyle.",
      cvlabs:
        "CryptoValley Labs is a unique place in Crypto Valley where great minds and new ideas come together, to discuss and to innovate. TrustSearch have been accepted to CryptoValley Labs for a 3-month accelerator program and received 20k $ with a potential to receive up to 80k $.",
      inbox:
        "Inbox.lv is the biggest Latvia email service with more than 1.5 million users. They will invest €30 k into the development of TrustSearch. With the partner TrustSearch has opportunity to be advertised specifically to all Inbox.lv users.",
      rtu:
        "The Information Technology Institute of Riga Technical University and Professor Janis Grabis are supporting TrustSearch in the simulation and development of a multi-level verification algorithm and implementation of Artificial Intelligence.",
      bitdefender:
        "Bitdefender, based in Romania, is one of the most innovative IT security software vendors in the world, which cooperates with TrustSearch in terms of the TrustSearch system and its technological and functional improvements. With the partner TrustSearch has opportunity to bundle together with Bitdefender’s security packages starting from Russia market. "
    }
  };

  changeSelectedInvestor = selected => {
    this.setState({ selectedInvestor: selected });
  };

  renderAboutHero = () => {
    return (
      <div className="aboutHeroContainer">
        <style jsx>{aboutPageStyles}</style>
        <div className="container">
          <div className="aboutHeroLogoContainer">
            <Link href="/">
              <a alt="homepage">
                <img
                  src="/static/business/index/images/gradientLogo.png"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
            </Link>
          </div>
          <div className="aboutHeroContent">
            <div className="row">
              <div
                className="col-md-7"
                style={{ display: "flex", justifyContent: "center", flexDirection:"column" }}
              >
                <div className="aboutHeroHeading">
                  <div>
                    <h1 className="heading">Search Engine for trust</h1>
                  </div>
                </div>
                <div className="aboutSubHeading">
                  <div>
                    <h5 className="subHeading">Internet users check online reputation to websites, but website owners build trustwothiness online</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
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
            <div className="col-md-6 mb">
              <div className="userProblemImageContainer">
                <img
                  src="/static/about/images/laptop.png"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-md-6 mb">
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
            <div className="col-md-6">
              <div className="userProblemImageSmallContainer">
                <img
                  src="/static/about/images/laptop.png"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
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
          <div className="userSolutionImageSmallContainer">
            <img
              src="/static/about/images/solution_small.png"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
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
            <div className="col-md-6 mb">
              <div className="companiesProblemImgContainer">
                <img
                  src="/static/about/images/trust.png"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div
              className="col-md-6 mb"
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
            <div className="col-md-6 mb">
              <div className="companiesProblemImgSmallContainer">
                <img
                  src="/static/about/images/trust.png"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderTrustHelpSection = () => {
    const trustSolutionPoints = [
      {
        stepCount: "1",
        stepTitle: "your website and trustsearch widget",
        stepSubTitle: "Build your trust online & get better conversion rate",
        stepBody:
          "Calculated trustworthiness based on your client reviews and existing data from around the web about your company.",
        stepImage: "screen_1.png"
      },
      {
        stepCount: "2",
        stepTitle: "your business profile on trustsearch",
        stepSubTitle:
          "Your website visitor will click to check proof of your trust with third party - The TrustSearch",
        stepBody:
          "Your customer sees proof to your trustworthiness that they can check, it leads to higher conversion rate and more clients!",
        stepImage: "screen_2.png"
      }
    ];

    return (
      <div className="trustHelpContainer">
        <style jsx>{aboutPageStyles}</style>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="trustHelpHeader">
                <h1>How TrustSearch could work for your website?</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {trustSolutionPoints.map(item => {
              return (
                <div className="col-md-5" key={uuid()}>
                  <SolutionForCompaniesList item={item} />
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="trustHelpImgContainer">
                <img
                  src="/static/about/images/how.png"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderInvestorsSection = () => {
    const { selectedInvestor } = this.state;
    return (
      <div className="investorsContainer">
        <style jsx>{aboutPageStyles}</style>
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="investorsHeader">
                <h1>Investors and Partners</h1>
              </div>
            </div>
          </div>
          <div className="investorDesktop">
            <div className="row">
              <div
                className="col-md-2 offset-md-1 col-sm-4"
                onClick={() => {
                  this.changeSelectedInvestor("inbox");
                }}
              >
                <div className="deskInvestorImgContainer">
                  <img
                    src={`/static/about/images/inbox${
                      selectedInvestor === "inbox" ? "_color" : "_grey"
                    }.png`}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div
                className="col-md-2 col-sm-4"
                onClick={() => {
                  this.changeSelectedInvestor("cvlabs");
                }}
              >
                <div className="deskInvestorImgContainer">
                  <img
                    src={`/static/about/images/cvlabs${
                      selectedInvestor === "cvlabs" ? "_color" : "_grey"
                    }.png`}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div
                className="col-md-2 col-sm-4"
                onClick={() => {
                  this.changeSelectedInvestor("qube");
                }}
              >
                <div className="deskInvestorImgContainer">
                  <img
                    src={`/static/about/images/qube${
                      selectedInvestor === "qube" ? "_color" : "_grey"
                    }.png`}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div
                className="col-md-2 col-sm-4"
                onClick={() => {
                  this.changeSelectedInvestor("rtu");
                }}
              >
                <div className="deskInvestorImgContainer">
                  <img
                    src={`/static/about/images/rtu${
                      selectedInvestor === "rtu" ? "_color" : "_grey"
                    }.png`}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div
                className="col-md-2 col-sm-4"
                onClick={() => {
                  this.changeSelectedInvestor("bitdefender");
                }}
              >
                <div className="deskInvestorImgContainer">
                  <img
                    src={`/static/about/images/bitdefender${
                      selectedInvestor === "bitdefender" ? "_color" : "_grey"
                    }.png`}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="investorMobile">
            <div className="row">
              <div className="col-md-2 offset-md-1 ">
                <div className="investorBox">
                  <div className="investorBoxImageContainer">
                    <img
                      src="/static/about/images/inbox_color.png"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="investorBoxTextContainer">inbox.lv</div>
                </div>
              </div>
              <div className="col-md-2 offset-md-1 ">
                <div className="investorBox">
                  <div className="investorBoxImageContainer">
                    <img
                      src="/static/about/images/cvlabs_color.png"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="investorBoxTextContainer">
                    CryptoValley Labs
                  </div>
                </div>
              </div>
              <div className="col-md-2 offset-md-1 ">
                <div className="investorBox">
                  <div className="investorBoxImageContainer">
                    <img
                      src="/static/about/images/qube_color.png"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="investorBoxTextContainer">Swiss-Qube</div>
                </div>
              </div>
              <div className="col-md-2 offset-md-1 ">
                <div className="investorBox">
                  <div className="investorBoxImageContainer">
                    <img
                      src="/static/about/images/bitdefender_color.png"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="investorBoxTextContainer">Bitdefender</div>
                </div>
              </div>
              <div className="col-md-2 offset-md-1">
                <div className="investorBox">
                  <div className="investorBoxImageContainer">
                    <img
                      src="/static/about/images/rtu_color.png"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="investorBoxTextContainer">
                    <h6>
                      The Information Technology Institute of Riga Technical
                      University
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="investorsInfo">
                <p>{this.state.investors[this.state.selectedInvestor]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderDesktopTeamSection = () => {
    const teamProfileData = [
      {
        image: "/static/about/images/arturs.png",
        name: "Arturs Rasnacis",
        designation: "founder, ceo",
        specialistIn: ["IT development", "Cyber security"]
      },
      {
        image: "/static/about/images/mikus.png",
        name: "Mikus Losans",
        designation: "co-founder, cbo",
        specialistIn: ["Business development", "Startups"]
      },
      {
        image: "/static/about/images/maxim.png",
        name: "Maksim Kuzmin",
        designation: "co-founder, coo",
        specialistIn: ["Legal issues", "Finance"]
      },
      {
        image: "/static/about/images/agris.png",
        name: "Agris Vitolins",
        designation: "senior system administrator",
        specialistIn: ["IT development"]
      },
      {
        image: "/static/about/images/zane.png",
        name: "Zane Ingulevica",
        designation: "developer, designer",
        specialistIn: ["Design", "IT development"]
      },
      {
        image: "/static/about/images/dmitrijs.png",
        name: "Dmitrijs Valaks",
        designation: "senior front-end dev",
        specialistIn: ["IT development", "blockchain"]
      },
      {
        image: "/static/about/images/vladimirs.png",
        name: "Vladimir Vorobjovs",
        designation: "chief technology",
        specialistIn: ["back-end developer", "blockchain"]
      },
      {
        image: "/static/about/images/guna.png",
        name: "Guna Rasnace",
        designation: "marketing specialist",
        specialistIn: []
      },
      {
        image: "/static/about/images/ronalds.png",
        name: "Ronalds Sovas",
        designation: "back-end developer",
        specialistIn: []
      },
      {
        image: "/static/about/images/mohd.png",
        name: "Mohd Faisal",
        designation: "front-end developer & a javascript enthusiast",
        specialistIn: []
      },
      {
        image: "/static/about/images/ravi.png",
        name: "Ravi Semwal",
        designation: "back-end developer",
        specialistIn: []
      },
      {
        image: "/static/about/images/aivis.png",
        name: "Aivis Krafts",
        designation: "graphic designer",
        specialistIn: []
      }
    ];

    return (
      <div className="desktopTeamSectionContainer">
        <style jsx>{aboutPageStyles}</style>
        <div className="container">
          <div className="desktopTeamGridContainer">
            <div className="desktopTeamSectionHeader">
              <h1>team</h1>
            </div>
            <div className="row">
              {teamProfileData.map(item => {
                return (
                  <div
                    className="col-md-4"
                    style={{ marginBottom: "2%" }}
                    key={uuid()}
                  >
                    <ReviewCard
                      image={item.image}
                      name={item.name}
                      designation={item.designation}
                      specialistIn={item.specialistIn}
                      variant="team"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderFooter = () => {
    return (
      <div className="registerInfoContainer">
        <style jsx>{aboutPageStyles}</style>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="registerImageContainer">
                <img
                  src="/static/about/images/attistibas_plans.png"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="registrationInfo">
                <div>TrustSearch Ltd. 25.07.2019. signed the agreement No.IZ-L-2019/55 with the LIAA on support for participation in exhibitions and conferences, as well as providing direct visits to a potential investor or cooperation partner abroad in the European Regional Development Fund project "Technology Transfer Program".</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="footer">
                <div className="footerImageContainer">
                  <img
                    src="/static/images/logo_footer.png"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
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
        {this.renderTrustHelpSection()}
        {this.renderInvestorsSection()}
        {this.renderDesktopTeamSection()}
        {this.renderFooter()}
      </div>
    );
  }
}
export default About;
