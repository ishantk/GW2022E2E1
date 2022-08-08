import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, TouchableOpacity } from'react-native';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

export default function RegisterScreen({navigation}: any) {

  // Refer Documentation -> https://firebase.google.com/docs/auth/web/start
  function register(){
    console.log("Register.....");
    console.log("Name: "+name+" Email: "+email+" Password: "+password);
    
    const auth = getAuth();
    const db = getFirestore();
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User Registered....");

      const docToInsert = {
        name: name,
        email: email,
        password: password
      }

      setDoc(doc(db, "users", user.uid), docToInsert);
      navigation.navigate("HomeScreen");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Occurred...."+errorCode+" "+errorMessage);
    });
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
            value={name}
            onChangeText={setName}
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