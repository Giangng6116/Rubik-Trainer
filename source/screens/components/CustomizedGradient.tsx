import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

type CustomizedGradientProps = {
  gradientVariant?: "big" | "small";
};
const CustomizedGradient = ({ gradientVariant }: CustomizedGradientProps) => {
  return (
    <LinearGradient
      colors={["#C637D9", "#5928A2"]}
      style={[
        styles.background,
        { height: gradientVariant === "big" ? 150 : 100 },
      ]}
    >
      <Text style={{fontSize: 16, color: "white", textAlign: "center", marginTop: 30}}>Tra cuu thong tin tai day</Text>
     
      <TextInput style={styles.input} placeholder="Tra cứu thông tin tại đây" />
    </LinearGradient>
  );
};

export default CustomizedGradient;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 35,
    marginTop: 20, 
    borderColor: "white",
    backgroundColor: "white"
  },
  background: {
    justifyContent: "center",
    paddingHorizontal: 30,
  },
});
