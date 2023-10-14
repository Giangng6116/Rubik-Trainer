import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";

export default function Profile() {
  const password = "12345678";
  const [pass, setPass] = useState("");
  const [messageShown, setMessageShown] = useState(false);
  function onEnterPassWord (text) {
    setPass (text)
  }
  function onLogin () {
    if (pass!==password) {
        setMessageShown(true)

    } else {
        
    }
  }
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#C637D9", "#5928A2"]} style={styles.background}>
        <Text style={{ marginTop: 25, fontSize: 25, color: "white" }}>
          Password
        </Text>
      </LinearGradient>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontWeight: "500", fontSize: 14}}>Current Password</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Current Password"
          secureTextEntry
        />
        <Text style={{fontWeight: "500", fontSize: 14}}>New Password</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="New Password"
          secureTextEntry
          
        />
        <Text >Enter the new password again</Text>
        
        <TextInput
          style={styles.inputBox}
          placeholder="Enter the new password again"
          secureTextEntry
          onChangeText={onEnterPassWord}
        />
        {messageShown && <Text>Incorrect Password</Text>}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 20,
    backgroundColor: "gray",
    marginVertical: 50,
  },
  inputBox: {
    width: 342,
    height: 40,
    borderRadius: 100,
  },
  background: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
});
