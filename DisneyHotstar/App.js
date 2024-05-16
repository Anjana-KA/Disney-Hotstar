import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your ap</Text>
      <StatusBar style="auto" />
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


// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// const Colors = () => {
//   return (
//     <View >
//       <Text style={styles.red}>just red</Text>
//       <Text style={styles.bigBlue}>just bigBlue</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
 
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

// export default Colors;