import React from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import ImageUploader from "./ImageUploader";
import Icon from "react-native-vector-icons/FontAwesome";
import firebase from "firebase";
import FirebaseError from "../FirebaseError";

export default class RegisterProfile extends React.Component{
    state = { email: this.props.route.params.email, password: this.props.route.params.password, nickname: '', errorMessage: null }

    handleRegister = () => {
        const { email, password, nickname } = this.state
        const f = this

        firebase
            .firestore()
            .collection('users')
            .doc(nickname)
            .get()
            .then(function(querySnapshot)
            {
                if(!querySnapshot.exists)
                {
                    firebase
                        .auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(() =>
                            firebase
                                .firestore()
                                .collection('users')
                                .doc(nickname)
                                .set({email: email, nickname: nickname})
                                .then(() => f.props.navigation.navigate("RegisterInfo",
                                    {
                                        nickname: nickname
                                    })))
                        .catch(error => f.setState({ errorMessage: FirebaseError(error.code) }))
                }
                else
                    f.setState({ errorMessage: '이미 존재하는 닉네임입니다.' })
            })
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Profile</Text>
                <ImageUploader></ImageUploader>
                <Text style={styles.text}>Nickname</Text>
                <TextInput
                    style={styles.loginInfo}
                    autoCapitalize="none"
                    placeholder="nickname"
                    onChangeText={nickname => this.setState({ nickname })}
                    value={this.state.nickname}
                />
                {this.state.errorMessage &&
                <Text style={
                    { color: 'red' }
                }>
                    {this.state.errorMessage}
                </Text>}
                <TouchableOpacity
                    onPress={this.handleRegister}
                    style={styles.nextButton}
                >
                    <Icon name={"chevron-right"}
                          size={20}
                          color="#fff" />
                </TouchableOpacity>
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
        marginTop: 40,
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
    nextButton: {
        borderWidth:1,
        marginTop: 50,
        position: 'absolute',
        right: 50,
        bottom: 50,
        borderColor:'skyblue',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        backgroundColor: 'skyblue',
        borderRadius:100,
    }
});
