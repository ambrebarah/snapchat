import { Text, View, StyleSheet, ScrollView, Pressable, TouchableOpacity, Image, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login'
import Register from './components/Register';
import Picture from './components/Picture';
import * as Permissions from 'expo-permissions';
//import Picture from './components/Picture';
import {Camera} from 'expo-camera';
import React, { useState, useEffect } from 'react';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SnapRaph</Text>

      <Pressable
        onPress={() => navigation.navigate('Picture')}
        style={{ backgroundColor: 'plum', padding: 10 }}
      >
       <Text>Camera</Text>
      </Pressable>

    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {

  const [islogin, setislogin] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {islogin ? (
          <>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Picture" component={Picture} />
          </>
        ) : (
          <>
          <Stack.Screen name="Login"> 
          {(props)=> 
          <Login {...props} setislogin = {setislogin}/>
          }
          </Stack.Screen>
          <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




