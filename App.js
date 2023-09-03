import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import Main from './screens/Main';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} component={FirstScreen} name='FirstScreen'/>
        <Stack.Screen options={{headerShown: false}} component={SecondScreen} name='SecondScreen'/>
        <Stack.Screen options={{headerShown: false}} component={ThirdScreen} name='ThirdScreen'/>
        <Stack.Screen options={{headerShown: false}} component={LoginScreen} name='LoginScreen'/>
        <Stack.Screen options={{headerShown: false}} component={SignUpScreen} name='SignUpScreen'/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
