import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Functional Component
export default function App() {

  const quotes = [
    "Be Exceptional",
    "Search the Candle rather than cursing the darkness",
    "Work hard, Be Successful",
    "Your future is all about connecting the dots in past",
    "Work with joy and fill in joy"
  ];

  let [idx, setIndex] = useState(0);
  //let [message, setMessage] = useState("MyWhatsApp")
  //var i = idx; // initially i is 0 because idx is 0

  console.log("Idx is: "+idx);

  if(idx == quotes.length-1){
    idx = 0;
  }

  if(idx < 0){
    idx = quotes.length-1;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textStyle} >{quotes[idx]}</Text>
      <Button title='NEXT QUOTE' onPress={(event) => setIndex(++idx)}></Button>
      <Button title='PREVIOUS QUOTE' onPress={(event) => setIndex(--idx)}></Button>
    </View>
  );

  /*return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome to React Native with Expo</Text>
      <Text>This is Awesome</Text>
      <StatusBar style="auto" />
    </View>
  );*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle:{
    fontSize: 24,
    color: "#f00",
    marginBottom: 20
  }

});
