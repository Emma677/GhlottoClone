import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SecondScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/lotto2.jpeg')} style={{height:400,width:'100%', 
      resizeMode:'contain'}}/>
      <View>
        <Text style={{fontSize:25,fontWeight:'900',textAlign:'center'}}>
            Easy to use, Easy to win
        </Text>
        <Text style={styles.txt}>
            Easy to use interface makes the app user friendly.
        </Text>
        <Text style={styles.txt}>
            Call centre representative are readily available to
        </Text>
        <Text style={styles.txt}>
            address all technical issues
        </Text>
      </View>

        <Pressable onPress={()=> navigation.navigate('ThirdScreen')} style={{position:'absolute',bottom:0,
        backgroundColor:'green',width:'100%',height:60}}>
           <Feather style={{marginLeft:180,}} name="arrow-right" size={58} color="white" />
        </Pressable>
      
    </View>
  )
}

export default SecondScreen


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
    },
    txt:{
        fontSize:17,
        textAlign:'center',
        marginTop:10
    }
  });