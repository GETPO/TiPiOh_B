import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";

export default class RegisterEmail extends React.Component{
    state = { email: ''};

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text style={styles.text}>Email Address</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.loginInfo}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
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
        height: "7%",
        width: "80%",
        backgroundColor: "#cccccc",
        textAlign: "center",
        borderRadius: 7,
        marginTop: 30
    },
});