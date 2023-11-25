import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Home from "./source/screens/BottomTab/Home";
import Plan from "./source/screens/BottomTab/Plan";
import Comps from "./source/screens/BottomTab/Comps";
import Profile from "./source/screens/BottomTab/Profile";
import { NativeBaseProvider } from "native-base";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: () => <AntDesign name="home" /> }}
      />
      <Tab.Screen name="Plan" component={Plan} />
      <Tab.Screen name="Comps" component={Comps} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
