import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const ConfirmArrow = () => {
  return (
    <TouchableOpacity style={styles.container}>
               <FontAwesome5 name="arrow-right" size={29} color="white" />
    </TouchableOpacity>
  )
}

export default ConfirmArrow

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        position:'absolute',
        bottom:30,
        right:30,
        width:'25%',
        height:'25%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:60
    }
})
