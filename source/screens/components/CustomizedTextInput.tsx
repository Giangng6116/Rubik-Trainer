import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
type CustomizedTextInputProps = {
  variant?: "default" | "password";
} & TextInputProps;

const CustomizedTextInput = (props: CustomizedTextInputProps) => {
  const { variant = "default", ...CustomizedTextInput } = props;
  const shown = false;
  const [hidePass, setHidePass] = useState(true);
  return (
    <>
      {variant === "default" && (
        <TextInput
          style={styles.textInput}
          placeholderTextColor={"white"}
          {...CustomizedTextInput}
        />
      )}
      {variant === "password" && (
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={hidePass}
            placeholderTextColor={"white"}
            {...CustomizedTextInput}
          />
          <TouchableOpacity onPress={() => {setHidePass(!hidePass)}}>
            <Feather name={hidePass? "eye-off":"eye"} size={24} color="black" />
          </TouchableOpacity>
          
        </View>
      )}
    </>
  );
};
export default CustomizedTextInput;

const styles = StyleSheet.create({
  textInput: {
    width: 250,
    paddingHorizontal: 4,
    borderColor: "white",
    marginVertical: 10,
  },
});
