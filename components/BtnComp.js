import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const BtnComp = ({onPress, children,style}) => {
  return (
   <TouchableOpacity onPress={onPress} style={[styles.btn,style]}>
    <Text style={styles.text}>{children}</Text>
   </TouchableOpacity>
  )
}

export default BtnComp


const styles = StyleSheet.create({
btn:{
backgroundColor: 'black',
flexDirection:'column',
width:'50%',
alignItems:'center',
justifyContent:'center',
alignSelf:'center',
borderRadius:27,
padding:15
},
text:{
    color:'white',
    fontSize:20,
    fontWeight: '500'
}
})