import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useState } from "react";


const array = [
  {
    id: 1,
    name: "Huy",
  },
  {
    id: 2,
    name: "Huy",
  },
  {
    id: 3,
    name: "Huy",
  },
  {
    id: 4,
    name: "Huy",
  },
  {
    id: 5,
    name: "Huy",
  },
];
const Teaching = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoal, setEnteredGoal] = useState("");

  const [goalsArray, setGoalsArray] = useState([]);
  const [goal, setGoal] = useState("")

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const [letter, setLetter] = useState("");

  function onAddGoal(){
    setGoalsArray([
      goal, ...goalsArray
    ])
  }

  function printText(text: string) {
    setLetter(text);
  }

  function renderGoals({item}){
    return <Text style={styles.item}>{item.name}</Text>
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", flex:1, marginTop:20 }}>
        <TextInput
          style={{ width: 200, borderWidth: 1, padding: 2 }}
          placeholder="Enter goal"
          onChangeText={setGoal}
        />
        <TouchableOpacity
        onPress={onAddGoal}
          style={{
            backgroundColor: "cyan",
            justifyContent: "center",
            alignItems: "center",
            padding: 7,
          }}
        >
          <Text>Add goal</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:5}}>
          <FlatList data={array} renderItem={renderGoals}/>
      </View>
    </View>
  );
};

export default Teaching;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    color: "#3b5998",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    width: 250,
    padding: 5,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonView: {
    gap: 10,
  },
  inputView: {
    alignItems: "flex-start",
  },
  item:{
    backgroundColor:'cyan',
    borderRadius:5,
    width:200,
    padding:2,
    marginVertical:5
  }
  // inputView: {
  //   flexDirection: "row",
  //   flex: 1,
  //   paddingBottom:40,
  //   borderBottomWidth:1
  // },
  // goalsView: {
  //   flex: 9,
  //   width:350
  // },
  // goalInput: {
  //   borderWidth: 1,
  //   padding: 2,
  //   width: 250,
  // },
  // goalItem:{
  //   backgroundColor:'#5e0acc',
  //   color:'white',
  //   textAlign:'left',
  //   marginVertical:10,
  //   padding:8,
  //   borderRadius:5
  // }
});
