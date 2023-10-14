import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";
type CustomizedButtonProps = {
  text: string;
  textAlign?: string;
} & TouchableOpacityProps;
const CustomizedButton = (props: CustomizedButtonProps) => {
  const { text, ...CustomizedButton } = props;
  return (
    <TouchableOpacity style={styles.button} {...CustomizedButton}>
      <Text style={{ color: "#652FAE", textAlign: "center", fontWeight: "500" }}>{text}</Text>
    </TouchableOpacity>
  );
};
export default CustomizedButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
