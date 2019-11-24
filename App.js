import React, { Component } from "react";
import { Platform, StyleSheet, View, StatusBar } from "react-native";
import { AppLoading } from "expo";
import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';


import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import { StyleProvider } from "native-base";

import AppNavigator from './AppNavigator';

import SignupView from "./components/signup/mainSignup";
import ChatView from "./components/chatscreen/mainChat";
import MsgView from "./components/msgscreen/mainMsg";
import SearchScreen from "./components/search/mainSearch";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const instructions = Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android:
        "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu"
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            ...Ionicons.font
        });
        this.setState({ isReady: true });
    }
    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }
        return (
            <View style={styles.container}>
                <StyleProvider style={getTheme(material)}>
                    {/* < SignupView /> */}
                    {/* <ChatView /> */}
                    {/* <MsgView /> */}
                    {/* <SearchScreen /> */}
                    <AppNavigator />
                </StyleProvider>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // // backgroundColor: "#F5FCFF"
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
