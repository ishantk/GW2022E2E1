import React from "react";
import { StatusBar } from "expo-status-bar";
import { Component, useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

// App is Child Class
// Component is Parent Class
export default class ClassComponent extends Component{
 
  // Attrbutes: Property of Object
  idx = 0;
  quotes = [
    "Be Exceptional",
    "Search the Candle rather than cursing the darkness",
    "Work hard, Be Successful",
    "Your future is all about connecting the dots in past",
    "Work with joy and fill in joy"
  ];

  state = {
    quote: this.quotes[this.idx]
  }

  onButtonPressed = () => {
   
    this.idx++;

    if(this.idx == this.quotes.length-1){
      this.idx = 0;
    }

    if(this.idx < 0){
      this.idx = this.quotes.length-1;
    }
    
    // Refresh the UI with new Value of quote
    this.setState(
      {
        quote: this.quotes[this.idx]
      }
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.textStyle} >Welcome to Class Component</Text>
        <Text>{this.state.quote}</Text>
        <Button title='NEXT' onPress={this.onButtonPressed}></Button>
      </View>
    );
  }

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
