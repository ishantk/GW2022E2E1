import React from 'react';
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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="FlatListDemo" component={FlatListDemo} />
        {/* <Tab.Screen name="News" component={HttpClientRequestComponent} /> */}
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        <Tab.Screen name="OrdersScreen" component={OrdersScreen} />
        <Tab.Screen name="ClassComponent" component={ClassComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}