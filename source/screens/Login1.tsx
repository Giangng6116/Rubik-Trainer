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
import { useState } from "react";
import CustomizedButton from "./components/CustomizedButton";
import CustomizedTextInput from "./components/CustomizedTextInput";

export default function Login1({navigation}) {
    const password="12345678";
    const [pass, setPass] = useState("");
    const [messageShown, setMessageShown] = useState(false);
  function abc() {
    console.log("abc");
  }
  function onEnterPassWord (text) {
    setPass (text)
  }
  function onLogin () {
    if (pass!==password) {
        setMessageShown(true)

    } else {
        toPhoneVerification ()
    }
  }
  function toPhoneVerification(){
    navigation.navigate("Forgotpassword3", {pass})
  }
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#C637D9", "#5928A2"]} style={styles.background}>
        <Image source={require("../../assets/rubik.png")}></Image>
        <Text style={{ color: "white", fontSize: 32, marginBottom: 100 }}>
          <Text style={{ fontWeight: "900" }}>RUBIK</Text> TRAINER
        </Text>
        <View style={styles.inputBox}>
          <FontAwesome name="phone" size={20} color="white" />
          <CustomizedTextInput
            placeholder="Enter your phone"
            
          />
        </View>
        <View style={styles.inputBox}>
          <AntDesign name="lock" size={24} color="white" />
          <CustomizedTextInput
            placeholder="Enter your password"
            variant="password"
            onChangeText={onEnterPassWord}
          />
        </View>
        <View style={{ flexDirection: "row-reverse", width: 275 }}>
          <TouchableOpacity onPress={toPhoneVerification}>
            <Text style={{ textDecorationLine: "underline" }}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>
        {messageShown && <Text>Incorrect Password</Text>}
        <CustomizedButton text="Login" onPress={onLogin} />
        <View style={styles.signUpContainer}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => {navigation.navigate("SignUp1")}}>
            <Text style={{ textDecorationLine: "underline", color: "white" }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  
  inputBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "white",
    marginBottom: 20,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
});
