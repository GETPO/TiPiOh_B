import React from "react";
import {StyleSheet, TextInput, View, TouchableOpacity, Image, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from 'expo-image-picker';

export default class RegisterInfo extends React.Component{
    state = { title: '', time: '', place: '', ocassion: '', image: []};

    componentDidMount(){
        async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('카메라 접근을 허용해주세요!');
            }
        };
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [3, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          this.setState({
              image: [...this.state.image, result.uri]
          });
        }
    };


    render(){
        const selectedImages = this.state.image.map(data => {
            return (
                <View>
                    <Image source={{uri: data}} style={styles.picture} />
                </View>
                
            );
        });

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.title}
                    autoCapitalize="none"
                    placeholder="제목"
                    onChangeText={title => this.setState({ title })}
                    value={this.state.title}
                />
                <View style={styles.rowContainer}>
                    <TextInput
                        style={styles.tpo}
                        autoCapitalize="none"
                        placeholder="언제?"
                        onChangeText={time => this.setState({ time })}
                        value={this.state.time}
                    />
                    <TextInput
                        style={styles.tpo}
                        autoCapitalize="none"
                        placeholder="어디서?"
                        onChangeText={place => this.setState({ place })}
                        value={this.state.place}
                    />
                    <TextInput
                        style={styles.tpo}
                        autoCapitalize="none"
                        placeholder="무엇을?"
                        onChangeText={ocassion => this.setState({ ocassion })}
                        value={this.state.ocassion}
                    />
                </View>
                {selectedImages}                
                <TouchableOpacity
                    onPress={this.pickImage}
                    style={styles.cameraButton}>
                    <Icon name={"camera"}
                        size={20}
                        color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handleSignUp}
                    style={styles.nextButton}>
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
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white"
    },
    rowContainer: {
        height: 50,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-end"
    },
    title: {
        height: 40,
        width: "90%",
        backgroundColor: "transparent",
        textAlign: "center",
        borderBottomWidth: 0.5,
        borderColor : "#cccccc",
    },
    tpo: {
        height: 40,
        width: "30%",
        backgroundColor: "transparent",
        textAlign: "center",
        borderBottomWidth: 0.5,
        borderColor: "#cccccc",
        margin: 5
    },
    cameraButton: {
        borderWidth:1,
        marginTop: 50,
        position: 'absolute',
        left: 50,
        bottom: 50,
        borderColor:'skyblue',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        backgroundColor: 'skyblue',
        borderRadius:100,
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
    },
    picture: {
        width: 300,
        height: 300,
        backgroundColor : "blue",
    }
    
});