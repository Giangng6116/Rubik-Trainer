import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CustomizedGradient from "./components/CustomizedGradient";

const array = [
  {
    title: "Giải Rubik WCA Hanoi Summer 2023",
    time: "10 tháng 1 năm 2023",
    
  },
  {
    title: "Giải Rubik WCA Hanoi Summer 2023",
    time: "10 tháng 1 năm 2023",
  },
  {
    title: "Giải Rubik WCA Hanoi Summer 2023",
    time: "10 tháng 1 năm 2023",
  },
];
const Comps = () => {
  

  function renderGoals({ item }) {
    return (
      <TouchableOpacity>
        <View style={styles.itemView}>
          <Image source={require("../../assets/competition.png")}/>
          <View style={{flexDirection: "column", justifyContent: "space-between"}}>
            <Text style={{fontWeight: "500"}}>{item.title}</Text>
            <Text style={{fontSize: 12, color:"white"}}>{item.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <CustomizedGradient gradientVariant="big" />
      <View style={styles.container}>
        <View style={{ flex: 0.9 }}>
          <FlatList data={array} renderItem={renderGoals} />
        </View>
      </View>
    </>
  );
};

export default Comps;

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

  buttonView: {
    gap: 10,
  },
  inputView: {
    alignItems: "flex-start",
  },
  item: {
    backgroundColor: "cyan",
    borderRadius: 5,
    width: 200,
    padding: 2,
    marginVertical: 5,
  },
  itemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#DDCAF9",
    padding: 10,
  },
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
