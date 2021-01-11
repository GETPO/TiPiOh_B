import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Picker} from "@react-native-picker/picker"

export default class RegisterInfo extends React.Component{
    state = { gender , age, height, body} = '';

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Gender</Text>
                <Picker
                    selectedValue={this.state.gender}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({gender: itemValue})
                    }
                    mode='dropdown'
                    dropdownIconColor="blue">
                    <Picker.Item label="남성" value="M" />
                    <Picker.Item label="여성" value="F" />
                    <Picker.Item label="그외" value="N" />
                </Picker>
                <Text style={styles.text}>Age</Text>
                <Picker
                    selectedValue={this.state.age}
                    style={{height: 50, width: 140}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({age: itemValue})
                    }
                    mode='dropdown'
                    dropdownIconColor="blue">
                    <Picker.Item label="19세 이하" value="19" />
                    <Picker.Item label="20 - 24" value="20" />
                    <Picker.Item label="25 - 29" value="25" />
                    <Picker.Item label="30 - 34" value="30" />
                    <Picker.Item label="35 - 39" value="35" />
                    <Picker.Item label="40세 이상" value="40" />
                </Picker>
                <Text style={styles.text}>BodyStyle</Text>
                <Picker
                    selectedValue={this.state.body}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({body: itemValue})
                    }
                    mode='dropdown'
                    dropdownIconColor="blue">
                    <Picker.Item label="마름" value="마름" />
                    <Picker.Item label="보통" value="보통" />
                    <Picker.Item label="건장" value="건장" />
                </Picker>
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
});