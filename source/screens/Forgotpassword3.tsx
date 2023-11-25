import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import CustomizedButton from './components/CustomizedButton';
import CustomizedTextInput from './components/CustomizedTextInput';
import HeaderBackground from './components/HeaderBackground';
import { FontAwesome } from "@expo/vector-icons";

export default function Forgotpassword3({navigation, route}:any) {
    const pass = route.params.pass
    return (
      <>
        <LinearGradient colors={["#C637D9", "#5928A2"]} style={styles.background}>
          <HeaderBackground title="Forgot password"/>
          <Text style={{fontSize: 16, fontWeight: "500", color: "white", marginTop: 100}}>Mã xác thực đã được gửi đến SDT </Text>
          <Text>{pass}</Text>
        </LinearGradient>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      alignItems: "center",
    },
    topHeader: {
      flexDirection: "row", 
      width: 350, 
      height: 30, 
      justifyContent: "space-between", 
      alignItems: "center", 
      
     
    },
   
  });