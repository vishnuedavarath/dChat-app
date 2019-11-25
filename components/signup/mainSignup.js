import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from "react-native";

export default class SignupView extends Component {
    constructor(props) {
        super(props);
        state = {
            name: "",
            username: ""
        };
    }

    onClickListener = () => {
        // request to nameserver
        // returns whether username exists
        // if don't exist, navigate 
        this.props.navigation.navigate('Messages');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image
                        style={styles.inputIcon}
                        source={{
                            uri:
                                "https://img.icons8.com/ultraviolet/40/000000/user-male-3.png"
                        }}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Full Name"
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                        onChangeText={name => this.setState({ name })}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image
                        style={styles.inputIcon}
                        source={{
                            uri:
                                "https://img.icons8.com/ultraviolet/40/000000/employee-card.png"
                        }}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Username"
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                        onChangeText={password => this.setState({ password })}
                    />
                </View>

                <TouchableHighlight
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={() => this.onClickListener("signup")}
                >
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.buttonContainer}
                    onPress={() => this.onClickListener("Restore")}
                >
                    <Text>Restore Old Account Using Private Key</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DCDCDC"
    },
    inputContainer: {
        borderBottomColor: "#F5FCFF",
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: "#FFFFFF",
        flex: 1
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: "center"
    },
    buttonContainer: {
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        width: 250,
        borderRadius: 30
    },
    loginButton: {
        backgroundColor: "#00b5ec"
    },
    loginText: {
        color: "white"
    }
});
