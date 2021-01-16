import React from "react";
import {Button, Image, StyleSheet, Text, Modal, TouchableOpacity, View} from "react-native";
import firebase from "firebase";

export default class Profile extends React.Component{

    state = {modal : false}

    handleImage = () => {
        this.setState({ modal: this.state.modal? false : true })
    }

    render()
    {
        const user = firebase.auth().currentUser;

        if(user)
        {
            return (
                <View style={styles.container}>
                    <View style={styles.top}>
                        <TouchableOpacity
                            onPress={this.handleImage}
                        >
                            <Image style={styles.circle} source={{uri:user.photoURL}}/>
                            <Modal onPress={this.handleImage} visible={this.state.modal} >
                                <TouchableOpacity onPress={this.handleImage}>
                                    <Image style={styles.clickImage} source={{uri:user.photoURL}} resizeMode='contain'/>
                                </TouchableOpacity>
                            </Modal>
                        </TouchableOpacity>

                        <Text style={styles.nameText}>{user.displayName}</Text>
                        <Text style={styles.idText}>{user.email}</Text>
                        <View style={styles.button}>
                            <Button title="Edit Profile"/>
                        </View>
                    </View>
                    <View style={styles.bottom}>

                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
      height: "90%",
      backgroundColor: 'white',
    },
    top: {
      height: "50%",
      backgroundColor : "grey",
      alignItems: "center"
    },
    bottom: {
      height: "50%",
      backgroundColor : "white",
    },
    circle: {
      width: 120,
      height: 120,
      backgroundColor : "white",
      marginTop: 40,
      borderRadius: 75,
      borderWidth: 5,
      borderColor: "darkgrey"
    },
    nameText: {
      color: "white",
      fontSize: 15,
      marginTop: 10
    },
    idText: {
      color: "white",
      fontSize: 12,
      marginTop: 10
    },
    button: {
      marginTop: 10
    },
    clickImage: {
        height: '100%',
        backgroundColor: 'black'
    }
  });
