import React from 'react';
import { Button, StyleSheet, Text, View } from'react-native';

// export default function HomeScreen({navigation}:any) {

//     return (
//         <View style={styles.container}>
//           <Text>This is Home Screen</Text>
//           <Button title='Go To Profile'
//           onPress={()=>navigation.navigate("Profile")}
//           />
//         </View>
//       );
// }

export default function HomeScreen() {

  return (
      <View style={styles.container}>
        <Text>This is Home Screen</Text>
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
  });