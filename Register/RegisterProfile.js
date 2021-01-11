import React from "react";
import {StyleSheet, Text, View, TextInput} from "react-native";
import ImageUploader from "./ImageUploader";

export default class RegisterProfile extends React.Component{
    state = { nickname: ''};

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Profile</Text>
                <ImageUploader></ImageUploader>
                <Text style={styles.text}>Nickname</Text>
                <TextInput
                    style={styles.loginInfo}
                    autoCapitalize="none"
                    placeholder="Nickname"
                    onChangeText={Nickname => this.setState({ Nickname })}
                    value={this.state.Nickname}
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
});