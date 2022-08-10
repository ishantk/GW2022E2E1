import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ActivityIndicator } from'react-native';
import { Appbar } from 'react-native-paper';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { StatusBar } from 'expo-status-bar';

// List Item Layout
const Item = (itemData:any) => (
  <View style={styles.item}>
     <Image source={{uri: itemData.imageURL}} style={styles.image}/>
     <Text style={styles.title} >{itemData.name}</Text>
     <Text style={styles.subTitle} >{itemData.personInChargeName}</Text>
  </View>
);

// Specified to execute renderItem function and create Item Views
const renderItem = ({item}:any) => Item(item);

export default function HomeScreen({navigation}: any) {

  const [length, setLength] = useState(0);
  const [documents, setDocuments] = useState([]);
  const [showIndicator, setIndicator] = useState(true);


  const getCrossings = async () => {
    try{
      console.log("Getting Crossings....");
     
      const db = getFirestore();
      const docs:any = [];
      const querySnapshot = await getDocs(collection(db, "crossings"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const docData = doc.data();
        docs.push(docData);
      });

      setLength(documents.length);
      setDocuments(docs);
      setIndicator(false);

    }catch(error){
      console.log("Something Went Wrong..");
    }
  }

  useEffect(
    ()=>{
      getCrossings();

    },[]);

  /*return (
      <View style={styles.container}>
        <Text>Welcome to Home</Text>
        <Text>Fetching Crossings....</Text>
        <Text>Total Documents: {length}</Text>
      </View>
    );*/

    return (
      <View style={styles.background}>
        <StatusBar style="auto" />
        
        {
          showIndicator ? <ActivityIndicator/> 
          : <FlatList data={documents} renderItem={renderItem}/> 
        }  
        
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

    textStyle:{
      fontSize: 24,
      color: "#f00",
      marginBottom: 20
    },
  
    background:{
      backgroundColor: '#eff',
      fontSize: 24,
      marginBottom: 20
    },
  
    item: {
      backgroundColor: '#fff',
      padding: 8,
      margin: 6
    },
  
    title: {
      fontSize: 16,
      color: '#3f8'
    },
  
    subTitle: {
      fontSize: 12,
      color: '#f23'
    },
  
    image: {
      width: 300,
      height: 200,
      margin: 8
    }
  });