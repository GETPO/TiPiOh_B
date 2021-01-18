import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, ScrollView, ImageBackground} from "react-native";
import firebase from "firebase";

export default function Ranking(){

    const [data, setData] = useState([]);

    const getData = async () => {
        let array = [];
        await firebase.firestore().collection("feeds").get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                array.push(doc.data());
            });
        })
        .then(() => {setData(array);});
        await console.log(data[0].images[0]);
    };

    useEffect(() => {
        getData();
      }, []);

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.rowContainer}>
                {data[0] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[0].images[0]}}>
                    <View style={styles.circle}><Text>1</Text></View>
                </ImageBackground> }
                {data[1] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[1].images[0]}}>
                    <View style={styles.circle}><Text>2</Text></View>
                </ImageBackground> }
            </View>
            <View style={styles.rowContainer}>
                {data[2] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[2].images[0]}}>
                    <View style={styles.circle}><Text>3</Text></View>
                </ImageBackground> }
                {data[3] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[3].images[0]}}>
                    <View style={styles.circle}><Text>4</Text></View>
                </ImageBackground> }
            </View>
            <View style={styles.rowContainer}>
                {data[4] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[4].images[0]}}>
                    <View style={styles.circle}><Text>5</Text></View>
                </ImageBackground> }
                {data[5] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[5].images[0]}}>
                    <View style={styles.circle}><Text>6</Text></View>
                </ImageBackground> }
            </View>
            <View style={styles.rowContainer}>
                {data[6] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[6].images[0]}}>
                    <View style={styles.circle}><Text>7</Text></View>
                </ImageBackground> }
                {data[7] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[7].images[0]}}>
                    <View style={styles.circle}><Text>8</Text></View>
                </ImageBackground> }
            </View>
            <View style={styles.rowContainer}>
                {data[8] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[8].images[0]}}>
                    <View style={styles.circle}><Text>9</Text></View>
                </ImageBackground> }
                {data[9] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[9].images[0]}}>
                    <View style={styles.circle}><Text>10</Text></View>
                </ImageBackground> }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex : 1,
        backgroundColor: 'white',
    },
    rowContainer: {
        width: 390,
        height: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    },
    Image: {
        width: 170,
        height: 370,
        borderRadius : 10
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 5
    }


});

