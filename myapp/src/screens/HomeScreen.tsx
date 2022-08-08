import React, { useState } from 'react';
import { StyleSheet, View, Text } from'react-native';

export default function HomeScreen({navigation}: any) {

  return (
      <View style={styles.container}>
        <Text>Welcome to Home</Text>
      </View>
    );
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