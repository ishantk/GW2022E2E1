import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from 'react-native';

const flights = [
  {
    name: "SpiceJet",
    from: "Delhi",
    to: "Bangalore",
    duration: 2.5,
    fare: 4700
  },
  {
    name: "GoFirst",
    from: "Delhi",
    to: "Bangalore",
    duration: 3.5,
    fare: 3200
  },
  {
    name: "Indigo",
    from: "Delhi",
    to: "Bangalore",
    duration: 1.5,
    fare: 7500
  },
  {
    name: "Vistara",
    from: "Delhi",
    to: "Goa",
    duration: 4.5,
    fare: 6900
  },
  {
    name: "Air India",
    from: "Delhi",
    to: "Chennai",
    duration: 1.5,
    fare: 8450
  }
];

// List Item Layout
const Item = (itemData:any) => (
  <View style={styles.item}>
     <Text style={styles.title} >{itemData.name}</Text>
     <Text style={styles.subTitle} >{itemData.fare}</Text>
  </View>
);

// Specified to execute renderItem function and create Item Views
const renderItem = ({item}:any) => Item(item);

// Functional Component
export default function FlatListDemo() {

  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <FlatList data={flights} renderItem={renderItem}/>
    </View>
  );

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
    color: '#f00'
  },

  subTitle: {
    fontSize: 12,
    color: '#f23'
  }

});