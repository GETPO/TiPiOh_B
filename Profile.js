import React from "react";
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from "react-native";
import firebase from "firebase";
import {Alert} from "react-native-web";

export default function Profile(){
    const user = firebase.auth().currentUser;

    if(user)
    {
        return (
            <View style={styles.container}>
                <View style={styles.top}>

                        { !user.photoURL &&
                        <TouchableOpacity
                            onPress={handleImage}
                        >
                        <Image style={styles.circle} source={{uri: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800'}}/>
                        </TouchableOpacity>}

                        { user.photoURL &&
                        <TouchableOpacity
                            onPress={handleImage}
                        >
                        <Image style={styles.circle} source={{uri:user.photoURL}}/>
                        </TouchableOpacity>}

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

function handleImage()
{
    alert("clicked!");
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
