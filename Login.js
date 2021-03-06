import React from 'react';
import {Button, StyleSheet, Image, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import * as firebase from 'firebase';
import FirebaseError from "./FirebaseError";

export default class Login extends React.Component {
    state = { email: '', password: '', errorMessage: null };

    handleLogin = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.dispatch(resetAction))
            .catch(error => this.setState({ errorMessage: FirebaseError(error.code) }))
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.box} behavior='height'>
                <Image style={styles.logo}
                       source={require('./assets/logo.png')}>
                </Image>
                <View style={styles.symbol}>
                    <Text style={styles.symbolText}>
                        TiPiOh
                    </Text>
                </View>
                {this.state.errorMessage &&
                <Text style={
                    { color: 'red' }
                }>
                    {this.state.errorMessage}
                </Text>}
                <TextInput
                    style={styles.loginTopBox}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
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
                <View style={styles.loginButton}>
                    <Button
                        title="로그인"
                        color="skyblue"
                        onPress={this.handleLogin}
                    >
                    </Button>
                </View>

                <View style={styles.register}>
                    <TouchableOpacity>
                        <Text style={styles.registerText}>
                            아이디/비밀번호 찾기
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("RegisterEmail")}>
                        <Text style={styles.registerText}>
                            회원가입
                        </Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    symbolText: {
        fontFamily: 'DancingScript',
        fontSize: 50,
        marginBottom: 40
    },
    box: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
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
    },
    loginButton: {
        width: "80%",
        marginTop : 8,
    },
    register: {
        alignItems: "center",
        textAlign: "center",
    },
    registerText: {
        marginTop: 12
    }
});

const resetAction = CommonActions.reset({
    index: 1,
    routes: [
        { name: 'Tab' },
    ],
});
