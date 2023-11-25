import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Image,
  TextInput,
  TextInputProps,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HeaderBackground from "./components/HeaderBackground";
import CustomizedButton from "./components/CustomizedButton";
import CustomizedTextInput from "./components/CustomizedTextInput";
import { useState } from "react";
export default function PhoneVerify({navigation}:any) {
  const [phone, setPhone] = useState("");
  function onChangPhone (text) {
    setPhone(text)
  }
  return (
    <>
      <LinearGradient colors={["#C637D9", "#5928A2"]} style={styles.background}>
        <HeaderBackground title="Forgot password"/>
        <View style={styles.inputBox}>
          <FontAwesome name="phone" size={20} color="white" />
          <CustomizedTextInput
            placeholder="Enter your phone"
            variant="default"
            onChangeText={onChangPhone}
          />
        </View>
        <CustomizedButton text="Reset Pass" onPress={navigation.navigate("Forgotpassword3", {phone})} />
      </LinearGradient>
      <StatusBar style="auto" />
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
  button: {
    backgroundColor: "white",
    width: 100,
    height: 50,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  
  inputBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "white",
    marginTop: 200,
    
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 100,
  },
});
