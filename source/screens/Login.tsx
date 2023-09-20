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
export default function Login() {
  function abc() {
    console.log("abc");
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
            placeholderTextColor={"white"}
          />
        </View>
        <View style={styles.inputBox}>
          <AntDesign name="lock" size={24} color="white" />
          <CustomizedTextInput
            placeholder="Enter your password"
            secureTextEntry
            placeholderTextColor={"white"}
          />
        </View>
        <View style={{ flexDirection: "row-reverse", width: 275 }}>
          <TouchableOpacity>
            <Text style={{ textDecorationLine: "underline" }}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>

        <CustomizedButton text="Login" textColor="black" />
        <View style={styles.signUpContainer}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={{ textDecorationLine: "underline", color: "white" }}>
              Sign up
            </Text>
          </TouchableOpacity>
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
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
});
