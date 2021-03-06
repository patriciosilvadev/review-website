import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import PublishIcon from "@material-ui/icons/Publish";
import DescriptionIcon from "@material-ui/icons/Description";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const inviteOptions = [
  {
    id: 1,
    icon: <PublishIcon />,
    primaryText: "Upload a file",
    secondaryText: "Service reviews"
  },
  {
    id: 2,
    icon: <DescriptionIcon />,
    primaryText: "Copy-paste customer data",
    secondaryText: "Service reviews"
  },
  {
    id: 3,
    icon: <PostAddIcon />,
    primaryText: "Enter data manually",
    secondaryText: "Service reviews"
  }
];

export default class InvitationWays extends Component {
  renderInviteOptionsList = () => {
    return inviteOptions.map((item, index) => {
      return (
        <>
          <style jsx>
            {`
              .renderInviteOptionsListContainer {
                -webkit-transition: all 0.4s;
                /forsafari3.1to6.0/trafnsition: all 0.4s;
                -webkit-touch-callout: none;
                /iossafari/-webkit-user-select: none;
                /safari/-khtml-user-select: none;
                /konquerorhtml/-moz-user-select: none;
                /oldversionsoffirefox/-ms-user-select: none;
                /internetexplorer/edge/user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
              }
              .renderInviteOptionsListContainer:hover {
                background-color: #f5f5f5;
                cursor: pointer;
              }
            `}
          </style>
          <div className="renderInviteOptionsListContainer">
            <List
              key={index}
              onClick={() => {
                this.props.handleListItemClick(index + 1);
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{item.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.primaryText}
                  secondary={item.secondaryText}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <ChevronRightIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </div>
        </>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Manual Invitation</h1>
        <p>Ask your customers to leave a review about their experience</p>
        <h5>Choose any of the methods below to add customers to invite</h5>
        <div className="container">{this.renderInviteOptionsList()}</div>
      </div>
    );
  }
}
