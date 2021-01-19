import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity} from "react-native";
import firebase from "firebase";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Ranking(){

    const [data, setData] = useState([]),
        user = firebase.auth().currentUser;

    const getData = async () => {
        let array = [];
        await firebase.firestore().collection("feeds").orderBy("like", "desc").limit(10).get()
        .then(async (snapshot) => {
            snapshot.forEach((doc) => {
                array.push(doc.data());
            });
        })
        .then(() => {setData(array);});
        await console.log(data[0].user);
    };

    useEffect(() => {
        getData();
      }, []);

    async function handlePlus(nickname){
        await console.log(nickname);
        let isAdded = false;

        await firebase.firestore().collection("users").doc(user.displayName).get()
        .then((snapshot) => {
            snapshot.data().following.forEach(async (following) => {
                if(following === nickname){
                    await alert("이미 추가된 팔로워입니다");
                    isAdded = true;
                    return;
                }
            });
        });
        await firebase.firestore().collection("users").doc(user.displayName).update({
            following: firebase.firestore.FieldValue.arrayUnion(nickname)
        });
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.rowContainer}>
                {data[0] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[0].images[0]}}>
                    <View style={styles.rowBetween}>
                        <View style={styles.circle}><Text>1</Text></View>
                        <TouchableOpacity
                            onPress={() => handlePlus(data[0].user)}
                            style={styles.follower}>
                                <Icon name={"user-plus"}
                                    size={20}
                                    color="skyblue"
                                />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowTogether}>
                        <Icon name={"heart"}
                            size={20}
                            color="red"
                        />
                        <Text style={{color:'red',marginLeft:5}}>{data[0].like}</Text>
                    </View>
                </ImageBackground> }
                {data[1] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[1].images[0]}}>
                    <View style={styles.rowBetween}>
                        <View style={styles.circle}><Text>2</Text></View>
                        <TouchableOpacity
                            onPress={() => handlePlus(data[1].user)}
                            style={styles.follower}>
                                <Icon name={"user-plus"}
                                    size={20}
                                    color="skyblue"
                                />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowTogether}>
                        <Icon name={"heart"}
                            size={20}
                            color="red"
                        />
                        <Text style={{color:'red',marginLeft:5}}>{data[1].like}</Text>
                    </View>
                </ImageBackground> }
            </View>
            <View style={styles.rowContainer}>
                {data[2] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[2].images[0]}}>
                    <View style={styles.rowBetween}>
                        <View style={styles.circle}><Text>3</Text></View>
                        <TouchableOpacity
                            onPress={() => handlePlus(data[2].user)}
                            style={styles.follower}>
                                <Icon name={"user-plus"}
                                    size={20}
                                    color="skyblue"
                                />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowTogether}>
                        <Icon name={"heart"}
                            size={20}
                            color="red"
                        />
                        <Text style={{color:'red',marginLeft:5}}>{data[2].like}</Text>
                    </View>
                </ImageBackground> }
                {data[3] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[3].images[0]}}>
                    <View style={styles.rowBetween}>
                        <View style={styles.circle}><Text>4</Text></View>
                        <TouchableOpacity
                            onPress={() => handlePlus(data[3].user)}
                            style={styles.follower}>
                                <Icon name={"user-plus"}
                                    size={20}
                                    color="skyblue"
                                />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowTogether}>
                        <Icon name={"heart"}
                            size={20}
                            color="red"
                        />
                        <Text style={{color:'red',marginLeft:5}}>{data[3].like}</Text>
                    </View>
                </ImageBackground> }
            </View>
            <View style={styles.rowContainer}>
                {data[4] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[4].images[0]}}>
                    <View style={styles.rowBetween}>
                        <View style={styles.circle}><Text>5</Text></View>
                        <TouchableOpacity
                            onPress={() => handlePlus(data[4].user)}
                            style={styles.follower}>
                                <Icon name={"user-plus"}
                                    size={20}
                                    color="skyblue"
                                />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowTogether}>
                        <Icon name={"heart"}
                            size={20}
                            color="red"
                        />
                        <Text style={{color:'red',marginLeft:5}}>{data[4].like}</Text>
                    </View>
                </ImageBackground> }
                {data[5] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[5].images[0]}}>
                    <View style={styles.rowBetween}>
                        <View style={styles.circle}><Text>6</Text></View>
                        <TouchableOpacity
                            onPress={() => handlePlus(data[5].user)}
                            style={styles.follower}>
                                <Icon name={"user-plus"}
                                    size={20}
                                    color="skyblue"
                                />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowTogether}>
                        <Icon name={"heart"}
                            size={20}
                            color="red"
                        />
                        <Text style={{color:'red',marginLeft:5}}>{data[5].like}</Text>
                    </View>
                </ImageBackground> }
            </View>
            <View style={styles.rowContainer}>
                {data[6] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[6].images[0]}}>
                    <View style={styles.rowBetween}>
                        <View style={styles.circle}><Text>7</Text></View>
                        <TouchableOpacity
                            onPress={() => handlePlus(data[6].user)}
                            style={styles.follower}>
                                <Icon name={"user-plus"}
                                    size={20}
                                    color="skyblue"
                                />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowTogether}>
                        <Icon name={"heart"}
                            size={20}
                            color="red"
                        />
                        <Text style={{color:'red',marginLeft:5}}>{data[6].like}</Text>
                    </View>
                </ImageBackground> }
                {data[7] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[7].images[0]}}>
                    <View style={styles.rowBetween}>
                        <View style={styles.circle}><Text>8</Text></View>
                        <TouchableOpacity
                            onPress={() => handlePlus(data[7].user)}
                            style={styles.follower}>
                                <Icon name={"user-plus"}
                                    size={20}
                                    color="skyblue"
                                />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowTogether}>
                        <Icon name={"heart"}
                            size={20}
                            color="red"
                        />
                        <Text style={{color:'red',marginLeft:5}}>{data[7].like}</Text>
                    </View>
                </ImageBackground> }
            </View>
            <View style={styles.rowContainer}>
                {data[8] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[8].images[0]}}>
                    <View style={styles.rowBetween}>
                        <View style={styles.circle}><Text>9</Text></View>
                        <TouchableOpacity
                            onPress={() => handlePlus(data[8].user)}
                            style={styles.follower}>
                                <Icon name={"user-plus"}
                                    size={20}
                                    color="skyblue"
                                />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowTogether}>
                        <Icon name={"heart"}
                            size={20}
                            color="red"
                        />
                        <Text style={{color:'red',marginLeft:5}}>{data[8].like}</Text>
                    </View>
                </ImageBackground> }
                {data[9] && <ImageBackground imageStyle={{ borderRadius: 10}} resizeMode='cover' style={styles.Image} source={{uri: data[9].images[0]}}>
                    <View style={styles.rowBetween}>
                        <View style={styles.circle}><Text>10</Text></View>
                        <TouchableOpacity
                            onPress={() => handlePlus(data[9].user)}
                            style={styles.follower}>
                                <Icon name={"user-plus"}
                                    size={20}
                                    color="skyblue"
                                />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowTogether}>
                        <Icon name={"heart"}
                            size={20}
                            color="red"
                        />
                        <Text style={{color:'red',marginLeft:5}}>{data[9].like}</Text>
                    </View>
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
        justifyContent: 'space-between',
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
    },
    follower: {
        marginRight: 5,
        marginTop: 5
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowTogether: {
        flexDirection: 'row',
        margin: 5
    }


});

