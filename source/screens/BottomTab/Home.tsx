import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Column, Row, Avatar, Text, ScrollView } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
  return (
    <Column>
      <LinearGradient colors={["#C637D9", "#5928A2"]} style={styles.background}>
        <Row
          w="100%"
          justifyContent={"space-between"}
          padding={3}
          alignItems={"center"}
        >
          <Text color="white">Giang</Text>
          <Row space={3}>
            <AntDesign name="bells" size={24} color="white" />
            <Avatar size="sm" source={require("../../../assets/rubik.png")} />
          </Row>
        </Row>
      </LinearGradient>
      <Column style={styles.content}>
        <ScrollView>
          <Image
            source={require("../../../assets/competition.png")}
            style={styles.banner}
          ></Image>
          <Text style={styles.title}>Rubik 2x2</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
          </ScrollView>
          <Text style={styles.title}>Rubik 2x2</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
          </ScrollView>
          <Text style={styles.title}>Rubik 2x2</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
          </ScrollView>
          <Text style={styles.title}>Rubik 2x2</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
            <Column style={{ paddingRight: 20 }}>
              <Image
                source={require("../../../assets/competition.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>Hướng dẫn giải rubik 2x2</Text>
            </Column>
          </ScrollView>
        </ScrollView>
      </Column>
    </Column>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    height: "15%",
    justifyContent: "flex-end",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  banner: {
    width: 320,
    height: 260,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: "300",
    paddingTop: 10,
  },
  image: {
    width: 160,
    height: 130,
    borderRadius: 10,
  },
});
