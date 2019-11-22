import React, { Component } from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import {
  Container,
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
      <View>
        <Header
          //   leftComponent={{ icon: "menu", color: "#fff" }}
          leftComponent={{ text: "D-CHAT", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <Container>
          <Content>
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: "Image URL" }} />
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
      </View>
    );
  }
}
