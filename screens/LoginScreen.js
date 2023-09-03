import { View, Text, StyleSheet, StatusBar, Pressable, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ConfirmArrow from '../components/ConfirmArrow';


const LoginScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <StatusBar style='auto' />
      <View style={{backgroundColor:'black',flex:1,marginTop:10,paddingLeft:20}}>
        <Text style={{color:'white',fontSize:25,marginTop:35}}>Welcome to</Text>
        <Text style={{color:'orange',fontSize:25}}>Gh Lotto</Text>
      </View>

      <View style={{backgroundColor:'white',flex:2,
        borderTopRightRadius:20,borderTopLeftRadius:20}}>
            <View style={{padding:40,paddingTop:30,flexDirection:'row',justifyContent:'space-between'}}>
             <Text style={{fontSize:20,fontWeight:"700",
             borderBottomWidth:2,borderBottomColor:"orange"}}>LOGIN</Text>

             <Pressable onPress={()=>navigation.navigate("SignUpScreen")}>
                <Text style={{fontSize:20,fontWeight:"700"}}>SIGNUP</Text>
             </Pressable>
            </View>

          <View  style={styles.logtxt}>
             <Ionicons style={{paddingLeft:14}} name="person" size={29} color="gray" />
            <TextInput placeholder='Email or Mobile Number' style={{
            padding:10,fontSize:18}}/>
          </View>

            <View  style={styles.logtxt}>
             <MaterialIcons style={{paddingLeft:14}} name="lock-open" size={29} color="gray" />
              <TextInput placeholder='Password' style={{
              padding:10,fontSize:18}} secureTextEntry/>
            </View>

            <ConfirmArrow/>
      </View>
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