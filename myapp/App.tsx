import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Install: 
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context

function HomeScreen({navigation}:any) {

  return (
    <View style={styles.container}>
      <Text>This is Home Screen</Text>
      <Button title='Go To Profile'
      onPress={()=>navigation.navigate("Profile")}
      />
    </View>
  );
}

function ProfileScreen() {

  return (
    <View style={styles.container}>
      <Text>This is Profile</Text>
    </View>
  );
}

function OrdersScreen() {

  return (
    <View style={styles.container}>
      <Text>This is My Orders Screen</Text>
    </View>
  );
}

// Create the Object of Stack
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Orders' component={OrdersScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});