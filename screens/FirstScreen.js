import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FirstScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/lotto1.jpeg')} style={{height:400,width:'100%', 
      resizeMode:'contain'}}/>
      <View>
        <Text style={{fontSize:25,fontWeight:'900',textAlign:'center'}}>
            Ghana's no1 lotto app
        </Text>
        <Text style={{fontSize:15,textAlign:'center',marginTop:10,fontWeight:'400',}}>
            Carefully designed to make you a millionare.
        </Text>
      </View>

        <View style={{marginTop:50}}>
         <Text style={{textAlign:'center',color:'#d3d3d3',fontSize:15}}>v2.5.0</Text>
        </View>

        <Pressable onPress={()=> navigation.navigate('SecondScreen')} style={{position:'absolute',bottom:0,
        backgroundColor:'orange',width:'100%',height:60}}>
           <Feather style={{marginLeft:180,}} name="arrow-right" size={58} color="white" />
        </Pressable>
      
    </View>
  )
}

export default FirstScreen


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
    },
  });
  