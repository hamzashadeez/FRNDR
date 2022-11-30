import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { wp } from "../theme";
import Icon from "./Icon";
import { Feather, AntDesign } from "@expo/vector-icons";

const Cardx = (props) => {
  return (
    <Pressable
      onPress={() => props.navigation.navigate("info")}
      style={styles.card}
    >
      <Image
        resizeMode="cover"
        source={props.image}
        style={{ height: "100%", width: "100%", borderRadius: 20 }}
      />
      <View
        style={{
          bottom: 0,
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          zIndex: 2,
          opacity: 0.35,
          borderRadius: 20,
        }}
      ></View>
      <View
        style={{
          bottom: 0,
          position: "absolute",
          zIndex: 100,
          height: 108,
          // backgroundColor: COLORS.primary,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingHorizontal: "7%",
        }}
      >
        <Icon
          size={51}
          color="#FFFFFF5E"
          icon={<AntDesign name="close" size={20} color="white" />}
        />
        <Icon
          size={71}
          color="#FFFFFF"
          icon={<AntDesign name="heart" size={31} color="#DD88CF" />}
          // onClick={() => navigation.navigate("info")}
          // onPress={() => console.log("pressed")}
        />
        <Icon
          size={51}
          color="#FFFFFF5E"
          icon={<AntDesign name="star" size={20} color="white" />}
        />
      </View>
    </Pressable>
  );
};

export default Cardx;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: wp("90%"),
    height: "100%",
    position: "relative",
  },
  noMoreCardsText: {
    fontSize: 22,
  },
});
