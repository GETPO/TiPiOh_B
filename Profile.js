import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import firebase from "firebase";
import {Image} from "react-native-web";

export default function Profile(){
    const user = firebase.auth().currentUser;

    if(user)
    {
        if(!user.photoURL)
        {
            firebase.storage().ref().child("profile/" + user.displayName).getDownloadURL()
                .then((url) => user.updateProfile({ photoURL: url.toString() }))
        }

        console.log(user.providerData);

        return (
            <View style={styles.container}>
                <View style={styles.top}>
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
    else
    {
        <View>

        </View>
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
      width: 150,
      height: 150,
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
    }
  });
