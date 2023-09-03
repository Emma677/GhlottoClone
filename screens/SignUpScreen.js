import { View, Text, StyleSheet, StatusBar, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ConfirmArrow from '../components/ConfirmArrow';
import { Feather } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native';

const LoginScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <StatusBar style='auto' />
      <View style={{backgroundColor:'black',flex:1,marginTop:10,paddingLeft:20}}>
        <Text style={{color:'white',fontSize:25,marginTop:35}}>Welcome to</Text>
        <Text style={{color:'orange',fontSize:25}}>Gh Lotto</Text>
      </View>
      <KeyboardAvoidingView style={{backgroundColor:'white',flex:2,
        borderTopRightRadius:20,borderTopLeftRadius:20}}>
            <View style={{padding:40,paddingTop:30,flexDirection:'row',justifyContent:'space-between'}}>

             <Pressable onPress={()=>navigation.navigate("LoginScreen")}>
                <Text style={{fontSize:20,fontWeight:"700"}}>LOGIN</Text>
             </Pressable>

             <View>
                <Text style={{fontSize:20,fontWeight:"700",borderBottomWidth:2,borderBottomColor:"orange"}}>SIGNUP</Text>
             </View>

            </View>

            <View  style={styles.logtxt}>
              <Feather style={{paddingLeft:14}} name="phone-call" size={24} color="gray" />
              <TextInput  placeholder='Password' style={{
              padding:10,fontSize:18}} secureTextEntry/>
            </View>

        
             <ConfirmArrow/> 
      </KeyboardAvoidingView>
    </View>
  )
}

export default LoginScreen 

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'black'
},
  logtxt:{
    alignItems:'center',
    flexDirection:'row',
    borderWidth:0.6,
    justifyContent:'flex-start',
    width:'80%',
    borderRadius:25,
    marginLeft:34,
    marginBottom:20
  }
})