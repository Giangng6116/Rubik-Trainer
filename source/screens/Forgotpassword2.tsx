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
import { useState } from "react";
import CustomizedButton from "./components/CustomizedButton";
import CustomizedTextInput from "./components/CustomizedTextInput";
export default function Forgotpassword2({ navigation }:any) {
  const password = "12345678";
  const [pass, setPass] = useState("");
  const [messageShown, setMessageShown] = useState(false);

  function onEnterPassWord(text) {
    setPass(text);
  }
  return (
    <>
      <LinearGradient colors={["#C637D9", "#5928A2"]} style={styles.background}>
        <HeaderBackground title="Forgot password" />
        <View style={styles.inputBox}>
          <AntDesign name="lock" size={24} color="white" />
          <CustomizedTextInput
            placeholder="Enter your password"
            variant="password"
            onChangeText={onEnterPassWord}
          />
        </View>
        <View style={styles.inputBox}>
          <AntDesign name="lock" size={24} color="white" />
          <CustomizedTextInput
            placeholder="Enter your password again"
            variant="password"
            onChangeText={onEnterPassWord}
          />
        </View>
        {messageShown && <Text>Incorrect Password</Text>}
        <CustomizedButton text="Reset Pass"/>
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
    marginTop: 100,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 100,
  },
});
