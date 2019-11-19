import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, KeyboardAvoidingView } from "react-native";

export default class ChatView extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text:
            "I think we passed the first step of the tutorial. We will now need a Pusher account!",
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          alwaysShowSend={true}
          isAnimated={true}
        />
        <KeyboardAvoidingView behavior="padding" />
      </View>
    );
  }
}
