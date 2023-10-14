import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login1 from './source/screens/Login1';
import SignUp1 from './source/screens/SignUp1';
import SignUp2 from './source/screens/SignUp2';
import Profile from './source/screens/Profile';
import Forgotpassword1 from './source/screens/Forgotpassword1';
import Forgotpassword2 from './source/screens/Forgotpassword2';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Forgotpassword2' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login1" component={Login1} />
        <Stack.Screen name="SignUp1" component={SignUp1} />
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Forgotpassword1" component={Forgotpassword1}/>
        <Stack.Screen name="Forgotpassword2" component={Forgotpassword2}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    </>
    
    

  );
}

export default App;