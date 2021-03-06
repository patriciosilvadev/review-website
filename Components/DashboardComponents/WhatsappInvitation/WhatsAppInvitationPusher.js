import React, { Component } from "react";
import Pusher from "pusher-js";
import _get from "lodash/get";

class WhatsAppInvitationPusher extends Component {
  pusherCopy = null;

  componentDidMount() {
    const { channelName } = this.props;
    console.log(channelName);
    const pusher = new Pusher("a962a1b0d1b0ab9e3399", {
      cluster: "ap2",
      forceTLS: true
    });

    this.pusherCopy = pusher;
    const channel = pusher.subscribe(channelName);
    pusher.connection.bind("connected", () => {
      console.log("WhatsApp pusher connected");
      this.bindToKey(pusher, channel);
    });
  }

  bindToKey = (pusher, channel) => {
    const { whatsAppPusherHandler } = this.props;
    channel.bind("whatsapp", data => {
      whatsAppPusherHandler(data);
      console.log(data, "Receive data from whatsApp pusher");
    });

    pusher.connection.bind("disconnected", () => {
      console.log("WhatsApp pusher disconnected");
    });
  };

  componentWillUnmount() {
    this.pusherCopy.disconnect();
  }

  render() {
    return <div></div>;
  }
}

export default WhatsAppInvitationPusher;
