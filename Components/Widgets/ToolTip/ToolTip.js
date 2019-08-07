import React from "react";
import * as AmpHelpers from "react-amphtml/helpers";
import { useAmp } from "next/amp";

const renderToolTipBox = (children, styles) => {
  return (
    <>
      <style jsx>
        {`
          .tooltip {
            position: absolute;
            background: #fff;
            animation-duration: 0.4s;
            animation-name: fade;
            z-index: 1;
            top: 115%;
            right: 0;
            box-shadow: 0px 2px 4px #999;
            padding: 5px;
            border-radius: 5px;
          }
          @keyframes fade {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
      <div className="tooltip" style={{ ...styles }}>
        {children}
      </div>
    </>
  );
};

const ToolTip = ({ children, visible, styles }) => {
  if (useAmp()) {
    return (
      <AmpHelpers.Bind hidden="showAlexaGraph.show">
        {props => (
          <div {...props} hidden={true}>
            {renderToolTipBox(children)}
          </div>
        )}
      </AmpHelpers.Bind>
    );
  }
  return visible ? renderToolTipBox(children, styles) : null;
};

export default ToolTip;
