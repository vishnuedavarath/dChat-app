import React, { Component } from "react";
import {
    Container,
    Header,
    Content,
    Input,
    Item,
    Left,
    Body,
    Title,
    Button,
    Icon,
    List,
    ListItem,
    Thumbnail,
    Text,
    Right,
} from "native-base";
import ResultView from "./resultSearch";
export default class SearchScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress = {() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Search</Title>
                    </Body>
                    {/* <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                    </Right> */}
                </Header>
                {/* <Content>
                    <Item regular>
                        <Input placeholder="Search User" />
                    </Item>
                    <ResultView />
                </Content> */}
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail
                                    square
                                    source={{
                                        uri:
                                            "https://img.icons8.com/color/48/000000/customer-skin-type-7.png"
                                    }}
                                />
                            </Left>
                            <Body>
                                <Text>John Doe</Text>
                                <Text note numberOfLines={1}>
                                    Its time to build a difference . .
                                </Text>
                            </Body>
                            <Right>
                                <Button transparent onPress = {()=>this.props.navigation.navigate("ChatScreen")} >
                                    <Text>Message</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
