import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, KeyboardAvoidingView } from "react-native";
// import { Header } from "react-native-elements";
import { Header, Left, Body, Right, Button, Icon, Title } from "native-base";

export default class ChatView extends React.Component {
    constructor(){
        super();
        this.state = {
            messages: [],
            user: "John Doe"
        };

        this.onSend = this.onSend.bind(this);

    }


    componentDidMount() {
        this.setState({
            messages: [
                {
                    _id: 2,
                    text: "Hi",
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: "John Doe",
                        avatar: "https://placeimg.com/140/140/any"
                    }
                }
            ]
        });
    }

    onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ brandPrimary: "#000" }}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title> {this.state.user} </Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="more" />
                        </Button>
                    </Right>
                </Header>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1
                    }}
                    alwaysShowSend={true}
                    isAnimated={true}
                    user={{
                        _id: 1
                    }}
                />
                <KeyboardAvoidingView
                    behavior="padding"
                    keyboardVerticalOffset={25}
                />
            </View>
        );
    }
}
