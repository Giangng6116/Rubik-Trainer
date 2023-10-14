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
  
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#C637D9", "#5928A2"]} style={styles.background}>
        <Text style={{ marginTop: 25, fontSize: 25, color: "white" }}>
          Info
        </Text>
      </LinearGradient>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Name</Text>

        <TextInput
          style={styles.inputBox}
          placeholder="Enter your name"
          secureTextEntry
        />
        <Text style={{ fontWeight: "500", fontSize: 14 }}>Phone number</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Phone number"
          secureTextEntry
        />
        <Text style={{ fontWeight: "500", fontSize: 14 }}>Starting date</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="New Password"
          secureTextEntry
        />
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
