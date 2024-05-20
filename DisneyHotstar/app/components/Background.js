import { StyleSheet, Text, View, Image } from 'react-native'

export default function Background() {
  return (
    <Image source={require('../../assets/2.webp')} style={styles.image} /> 
  );
}


const styles = StyleSheet.create({

image:{
    height: 300,
},

});
