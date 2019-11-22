import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, KeyboardAvoidingView } from "react-native";
import { Header } from 'react-native-elements';

export default class ChatView extends React.Component {
  state = {
    messages: [],
    user: "John Doe"

  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hi",
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
        <Header
          //   leftComponent={{ icon: "menu", color: "#fff" }}
          leftComponent={{ text: this.state.user.name, style: { color: "#fff" } }}
          rightComponent={{ icon: "more-vert", color: "#fff" }}
        />
        <GiftedChat
          messages={this.state.messages}
          alwaysShowSend={true}
          isAnimated={true}
          user={{
            _id: this.user_id
          }}
        />
        <KeyboardAvoidingView behavior="padding" />
      </View>
    );
  }
}
