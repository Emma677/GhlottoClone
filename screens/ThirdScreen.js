import { Image,  StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import BtnComp from '../components/BtnComp';


const ThirdScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/lotto3.jpeg')} style={{height:350,width:'100%', 
      resizeMode:'contain'}}/>
      <View>
        <Text style={{fontSize:25,fontWeight:'900',textAlign:'center'}}>
            Ghana's fastest payment
        </Text>
        <Text style={{fontSize:25,fontWeight:'900',textAlign:'center'}}>
            lotto system
        </Text>
        <Text style={{fontSize:15,textAlign:'center',marginTop:10,fontWeight:'400',}}>
            Carefully designed to make you a millionare.
        </Text>
      </View>

      <View style={{marginTop:30}}>
        <BtnComp onPress={()=>navigation.navigate('SignUpScreen')}>Create Account</BtnComp>
      </View>

      <View style={{marginTop:20}}>
        <BtnComp style={styles.blue} onPress={()=>navigation.navigate('LoginScreen')}>Login</BtnComp>
      </View>

       
      
    </View>
  )
}

export default ThirdScreen


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
    },
    blue:{
      backgroundColor:'green'
    }
  });