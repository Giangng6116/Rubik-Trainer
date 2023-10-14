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
type CustomizedButtonProps = {
  text: string;
  textColor?: string;
  textAlign?: string;
} & TouchableOpacityProps;
type CustomizedTextInputProps = {} & TextInputProps;
const CustomizedButton = (props: CustomizedButtonProps) => {
  const { text, textColor, ...CustomizedButton } = props;
  return (
    <TouchableOpacity style={styles.button} {...CustomizedButton}>
      <Text style={{ color: textColor, textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
};
const CustomizedTextInput = (props: CustomizedTextInputProps) => {
  const { ...CustomizedTextInput } = props;
  return <TextInput style={styles.textInput} {...CustomizedTextInput} />;
};
export default function SignUp2() {
  function abc() {
    console.log("abc");
  }
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#C637D9", "#5928A2"]} style={styles.background}>
        <Text>OTP code has been sent to the phone number 0913xxxx06</Text>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <TextInput style={styles.otpBox} />
          <TextInput style={styles.otpBox} />
          <TextInput style={styles.otpBox} />
          <TextInput style={styles.otpBox} />
        </View>
      </LinearGradient>
      <StatusBar style="auto" />
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
  button: {
    backgroundColor: "white",
    width: 100,
    height: 50,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  textInput: {
    width: 250,
    paddingHorizontal: 4,
    borderColor: "white",
    marginVertical: 10,
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "white",
    marginBottom: 20,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    
  }
});
