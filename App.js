import React from 'react';
import Login from "./Login";
import Loading from "./Loading";
import RegisterEmail from "./Register/RegisterEmail";
import RegisterProfile from "./Register/RegisterProfile";
import RegisterInfo from "./Register/RegisterInfo";
import WriteFeed from "./WriteFeed";
import Tab from "./Tab";
import * as Font from 'expo-font';
import { Text, TextInput, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import * as firebase from 'firebase';
import EditProfileMenu from "./EditProfileMenu";

const firebaseConfig = {
  apiKey: "AIzaSyCKaZbEYYPVrvB_IOwbFhFka3RIY3fth2U",
  authDomain: "tipiohapp.firebaseapp.com",
  projectId: "tipiohapp",
  storageBucket: "tipiohapp.appspot.com",
  messagingSenderId: "107612330964",
  appId: "1:107612330964:web:49d73e7b0034bfd87cd441",
  measurementId: "G-NLX5BKB1QM"
};

const Stack = createStackNavigator();

export default class App extends React.Component {

  state = {
    loading: true
  };

  async componentDidMount(){
    firebase.initializeApp(firebaseConfig);
    await Font.loadAsync({
      'DancingScript': require('./assets/fonts/DancingScript-Bold.ttf'),
    });
    setTimeout(() => {this.setState({loading: false})},3000);
  }

  render(){
    const { loading } = this.state;
    if(loading){
      return (<Loading />);
    }
    else{
      return (
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="Login"
          headerMode="screen"
          gestureEnabled="true"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'grey',
              height : 80,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'DancingScript',
              fontSize: 30
            },
            headerTitle: "TiPiOh",
          }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => alert('김우석 & 김성원')}
                    style={{marginRight: 10}}>
                    <Text style={{color: 'white'}}>개발자</Text>
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen
              name="Tab"
              component={Tab}
              options={{
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigationRef.current.navigate("WriteFeed")}
                    style={{marginRight: 10}}>
                    <Text style={{color: 'white'}}>글쓰기</Text>
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen
              name="RegisterEmail"
              component={RegisterEmail}
            />
            <Stack.Screen
              name="RegisterProfile"
              component={RegisterProfile}
              /*options={{
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigationRef.current.navigate("RegisterInfo")}
                    style={{marginRight: 10}}>
                    <Text style={{color: 'white'}}>다음</Text>
                  </TouchableOpacity>
                ),
              }} */
            />
            <Stack.Screen
              name="RegisterInfo"
              component={RegisterInfo}
            />
            <Stack.Screen
              name="WriteFeed"
              component={WriteFeed}
            />
            <Stack.Screen
              name="EditProfileMenu"
              component={EditProfileMenu}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}
