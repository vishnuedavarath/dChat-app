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
    Icon
} from "native-base";
import ResultView from "./resultSearch";
export default class SearchScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
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
                <Content>
                    <Item regular>
                        <Input placeholder="Search User" />
                    </Item>
                    <ResultView />
                </Content>
            </Container>
        );
    }
}
