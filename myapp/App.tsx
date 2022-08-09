import React, { useEffect, useReducer, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/fucntional-comps/home';
import ProfileScreen from './src/fucntional-comps/profile';
import OrdersScreen from './src/fucntional-comps/orders';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import MapsViewComponent from './src/tutorials/MapsViewComponent';
import HttpClientRequestComponent from './src/tutorials/HttpClientRequestComponent';
import FlatListDemo from './src/tutorials/FlatListDemo';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ClassComponent from './src/tutorials/ClassComponent';
import SignInScreen from './src/screens/SignInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './src/helper/Constants';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Appbar } from 'react-native-paper';

// Install: 

// Basic Stack Navigation
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context


// For Drawer
// npm install @react-navigation/drawer
// npm install react-native-gesture-handler react-native-reanimated

// if facing version issues:
// expo install react-native-gesture-handler react-native-reanimated
// Create the Object of Stack

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
//const Tab = createMaterialBottomTabNavigator();


/*export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Orders' component={OrdersScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/

/*export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="OrdersScreen" component={OrdersScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}*/

/*export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        <Tab.Screen name="OrdersScreen" component={OrdersScreen} />
        <Tab.Screen name="ClassComponent" component={ClassComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/



export default function App({navigation}: any) {


  const [showSplash, setShowSplash] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  initializeApp(firebaseConfig);

  useEffect(
    ()=>{
      
      const auth = getAuth();
      
      onAuthStateChanged(auth, (user) =>{
        if(user != null){
          setTimeout(()=>{
            console.log("User is already Registered or Logged In: "+user.uid);
            setLoggedIn(true);
            setShowSplash(false);
          }, 3000)
        }else{
          setTimeout(()=>{
            console.log("User not Registered or Logged In");
            setShowSplash(false);
          }, 3000)
        }

        
      });

      /*async function showSplashScreen() {
        // Reference to Authentication Module
        const auth = getAuth();
        if(auth.currentUser != null){
          console.log("User is already Registered or Logged In: "+auth.currentUser.uid);
          setLoggedIn(true);
        }else{
          console.log("User is not Registered or Logged In");
        }
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log("Wait for 3 seconds over...");
        setShowSplash(false);
      }

      try{
        showSplashScreen();
      }catch(error){
        console.log("Something Went Wrong: "+error);
      }finally{
        console.log("Finally Executed..");
      }*/

    },
      
    []);

    if(showSplash){
      return (
        <View style={styles.container}>
          <Text>Phatak Status</Text>
        </View>
      );
    }

    if(loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name='SignInScreen' component={SignInScreen}/>
            <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
              title: "PhatakApp",
              headerRight: ()=>(
                <Appbar.Action
                // https://materialdesignicons.com/ (for icon names)
                icon="logout"
                onPress = {()=> {
                  const auth = getAuth();
                  auth.signOut();
                  setLoggedIn(false)
                  setShowSplash(true);
                }}
                />
              )
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }else{
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SignInScreen'>
            <Stack.Screen name='SignInScreen' component={SignInScreen}/>
            <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    margin: 12
  }
});