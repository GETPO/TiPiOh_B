import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";

export default class RegisterEmail extends React.Component{
    state = { nickname: '', password: ''};

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text style={styles.text}>Nickname & Password</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.loginTopBox}
                    autoCapitalize="none"
                    placeholder="Nickname"
                    onChangeText={nicname => this.setState({ nickname })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.loginBottomBox}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: "center"
    },
    text: {
        fontSize: 30,
        marginTop: 100,
        fontWeight: "700"
    },
    loginTopBox: {
        height: "7%",
        width: "80%",
        backgroundColor: "#cccccc",
        textAlign: "center",
        borderBottomWidth: 0.5,
        borderColor : "grey",
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        marginTop: 30
    },
    loginBottomBox: {
        height: "7%",
        width: "80%",
        backgroundColor: "#cccccc",
        textAlign: "center",
        borderTopWidth: 0.5,
        borderColor : "grey",
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10
    }
});