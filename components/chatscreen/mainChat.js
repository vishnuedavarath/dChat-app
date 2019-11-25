import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, KeyboardAvoidingView } from "react-native";
// import { Header } from "react-native-elements";
import {
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title
} from "native-base";

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
                <Header style={{ brandPrimary: "#000" }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title> {this.state.user} </Title>
                    </Body>
                    <Right>
                        <Button transparent >
                            <Icon name="more" />
                        </Button>
                    </Right>
                </Header>
                <GiftedChat
                    messages={this.state.messages}
                    alwaysShowSend={true}
                    isAnimated={true}
                    user={{
                        _id: this.user_id
                    }}
                />
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset = {25} />
            </View>
        );
    }
}
