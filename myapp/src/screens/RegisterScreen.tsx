import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, TouchableOpacity } from'react-native';

export default function RegisterScreen({navigation}: any) {

  function register(){
    console.log("Register.....");
  }

  function navigateToLoginScreen(){
    navigation.navigate("SignInScreen")    
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <View style={styles.container}>

        {/* <Image/> */}
        <Text>PhatakStatus</Text>

        <TextInput style={styles.input}
            placeholder='Full Name'
            value={email}
            onChangeText={setEmail}
        />

        <TextInput style={styles.input}
            placeholder='Email ID'
            value={email}
            onChangeText={setEmail}
        />
        <TextInput style={styles.input}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <Button
            title='Register' onPress={register}
        />
        
        <TouchableOpacity
            onPress={navigateToLoginScreen}>
            <Text style={styles.text}>Existing User? Login Here</Text>
        </TouchableOpacity>

        

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
    },

    input:{
        borderColor: 'gray',
        width: '100%',
        borderWidth: 1,
        borderRadius: 12,
        padding: 8,
        margin: 8
    },

    text: {
        fontSize: 16,
        margin: 12,
        color: 'blue'
    }

  });