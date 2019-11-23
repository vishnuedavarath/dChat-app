import React, { Component } from "react";
import { View } from "react-native";
import { Platform, StatusBar } from "react-native";
// import { Header } from "react-native-elements";
import {
    Container,
    Button,
    Icon,
    Title,
    Header,
    Content,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Text
} from "native-base";

export default class mainMsgScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    {/* <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left> */}
                    <Body>
                        <Title>D-Chat</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: "https://img.icons8.com/color/48/000000/customer-skin-type-7.png" }} />
                            </Left>
                            <Body>
                                <Text>John Doe</Text>
                                <Text note>Lorem ipsum dolar sit amet...</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
