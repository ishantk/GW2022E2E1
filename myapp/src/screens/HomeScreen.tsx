import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from'react-native';
import { Appbar } from 'react-native-paper';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


export default function HomeScreen({navigation}: any) {
  console.log("Home Screen...");

  const getCrossings = async () => {
    try{
      console.log("Getting Crossings....");
      const documents = [];
      const db = getFirestore();
      
      const querySnapshot = await getDocs(collection(db, "crossings"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const docData = doc.data();
        documents.push(docData);
      });

    }catch(error){
      console.log("Something Went Wrong..");
    }
  }

  useEffect(
    ()=>{
      getCrossings();
    },[]);

  console.log("Getting Crossings....");
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