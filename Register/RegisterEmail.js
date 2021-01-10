import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";
import firebase from "firebase";
import 'firebase/firestore';

export default class RegisterEmail extends React.Component{
    state = { email: '', password: ''};

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Email Address</Text>
                <TextInput
                    style={styles.loginInfo}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    secureTextEntry
                    style={styles.loginTopBox}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <TextInput
                    secureTextEntry
                    style={styles.loginBottomBox}
                    autoCapitalize="none"
                    placeholder="Password Confirm"
                    onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
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
    loginInfo: {
        height: 40,
        width: "80%",
        backgroundColor: "#cccccc",
        textAlign: "center",
        borderRadius: 7,
        marginTop: 30
    },
    loginTopBox: {
        height: 40,
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
        height: 40,
        width: "80%",
        backgroundColor: "#cccccc",
        textAlign: "center",
        borderTopWidth: 0.5,
        borderColor : "grey",
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10
    }

});