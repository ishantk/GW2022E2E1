import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, TouchableOpacity } from'react-native';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default function SignInScreen({navigation}: any) {

  function signIn(){

    console.log( "Email: "+email+" Password: "+password);
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User Logged In...."+user.uid);
      navigation.navigate("HomeScreen");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Occurred...."+errorCode+" "+errorMessage);
    });
  }

  function navigateToRegisterScreen(){
    navigation.navigate("RegisterScreen")    
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <View style={styles.container}>

        {/* <Image/> */}
        <Text>PhatakStatus</Text>
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
            title='Sign In' onPress={signIn}
        />
        
        <TouchableOpacity
            onPress={navigateToRegisterScreen}>
            <Text style={styles.text}>New User? Register Here</Text>
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
    },

    image: {
      width: 70,
      height: 70,
      marginBottom: 20
    }, 

  });