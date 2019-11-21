import React from "react";
import navBarStyles from "./navBarStyles";
import ResponsiveSideNav from "../ResponsiveSideNav/ResponsiveSideNav";
import AmpLinkWrapper from "../../AmpWrappers/AmpLinkWrapper";
import AmpImgWrapper from "../../AmpWrappers/AmpImgWrapper";
import _get from "lodash";
import _isEmpty from "lodash/isEmpty";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";

const onLogout = () => {
  // do nothing for now
};

const renderResponsiveSideNav = (
  showSideNav,
  handleMenuBtnClick,
  authorized,
  userName
) => {
  return showSideNav ? (
    <ResponsiveSideNav
      showSideNav={showSideNav}
      authorized={authorized}
      userName={userName}
    />
  ) : null;
};

const NavBar = ({ showSideNav, handleMenuBtnClick, auth }) => {
  const { authorized } = auth.logIn || false;
  const { userProfile } = auth.logIn || {};
  let userName = "";
  if (userProfile) {
    if (userProfile.hasOwnProperty("name")) {
      if (userProfile.name.length > 0) {
        let nameAfterSplit = userProfile.name.split(" ");
        if (nameAfterSplit.length > 0) {
          userName = nameAfterSplit[0];
        }
      }
    }
  }

  return (
    <>
      <style jsx>{navBarStyles}</style>
      <nav className="navbarContainer">
        <div className="logoContainer">
          <div>
            <AmpLinkWrapper href="/" alt="home">
              <AmpImgWrapper
                src="/static/images/logo.png"
                alt="Trustsearch logo"
                height="42"
                width="157.85"
                layout="responsive"
                imgContainerStyles={{ width: "157.85px", height: "41.99px" }}
              />
            </AmpLinkWrapper>
          </div>
        </div>
        <div className="primaryLinksContainer">
          <div>
            <AmpLinkWrapper href="/about" alt="nav-link">
              About
            </AmpLinkWrapper>
          </div>
          <div>
            <AmpLinkWrapper href="/business" alt="nav-link">
              Business
            </AmpLinkWrapper>
          </div>
          <div>{/* <div id="google_translate_element"></div> */}</div>
        </div>
        <div className="secondaryLinksContainer">
          {!authorized ? (
            <React.Fragment>
              <div>
                <i className="fa fa-sign-in" style={{ marginRight: "5px" }} />
                <AmpLinkWrapper href="/login" alt="nav-link">
                  Login |{" "}
                </AmpLinkWrapper>
              </div>
              <div>
                <AmpLinkWrapper
                  href="/registration"
                  alt="nav-link"
                  styles={{ marginLeft: "5px" }}
                >
                  {" "}
                  Register
                </AmpLinkWrapper>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div>
                Hello, <span style={{ marginRight: "10px" }}>{userName}</span>
              </div>
              <div>
                <i className="fa fa-sign-out" style={{ marginRight: "5px" }} />
                <AmpLinkWrapper href="/logout" alt="nav-link">
                  Logout
                </AmpLinkWrapper>
              </div>
            </React.Fragment>
          )}
          <GoogleLogout
            clientId={process.env.GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={onLogout}
          ></GoogleLogout>
          {/* <button onClick={logoutFb}>Logout Fb</button> */}
        </div>
        <div className="menuIconContainer">
          {
            <div
              events={{
                tap: [
                  "AMP.setState({ showSideNav: { show: !showSideNav.show } })"
                ]
              }}
            >
              {props => (
                <button
                  className="menuBtn"
                  onClick={handleMenuBtnClick}
                  {...props}
                >
                  <i className="fa fa-bars" />
                </button>
              )}
            </div>
          }
        </div>
      </nav>
      {renderResponsiveSideNav(
        showSideNav,
        handleMenuBtnClick,
        authorized,
        userName
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { auth } = state;
  return { auth };
};

export default connect(mapStateToProps)(NavBar);