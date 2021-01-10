import React from 'react';
import {Button, StyleSheet, Image, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import * as firebase from 'firebase';
import FirebaseError from "./FirebaseError";

export default class Login extends React.Component {
    state = { email: '', password: '', errorMessage: null }

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
            <View style={styles.box}>
                <Image style={styles.logo}
                       source={{uri:'https://previews.123rf.com/images/dervish37/dervish371405/dervish37140500040/28401203-%EC%8B%A0%EC%82%AC%EC%9D%98-%EC%95%84%EC%9D%B4%EC%BD%98.jpg'}}>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    symbol: {
        color: "red",
        fontSize: 50
    },
    logo: {
        width: "40%",
        height: "40%"
    },
    symbolText: {
        fontFamily: 'DancingScript',
        fontSize: 50,
        marginBottom: 40
    },
    box: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginTopBox: {
        height: "7%",
        width: "80%",
        backgroundColor: "#cccccc",
        textAlign: "center",
        borderBottomWidth: 0.5,
        borderColor : "grey",
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10
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
    },
    loginButton: {
        height: "5%",
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
