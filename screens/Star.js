import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  ImageBackground,
} from "react-native";
import React from "react";

import { EvilIcons } from "@expo/vector-icons";
import { COLORS, hp, Styles, wp } from "../theme";

const Prfl = ({ name, pic }) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        resizeMode="cover"
        source={pic}
        style={{
          height: hp("31.5%"),
          width: wp("40.2"),
          marginTop: 20,
          position: "relative",
          overflow: "hidden",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.primary,
            width: "70%",
            height: 20,
            alignItems: "center",
            justifyContent: "center",
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
            marginLeft: "15%",
            zIndex: 30,
          }}
        >
          <Text style={[Styles.HeaderText, { fontSize: 12, color: "white" }]}>
            75% Match
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            width: "100%",
            backgroundColor: "black",
            height: "100%",
            top: 0,
            left: 0,
            borderRadius: 13,
            opacity: 0.35,
          }}
        />
        {/* Texts */}
        <View
          style={{
            height: 40,
            width: "100%",
            position: "absolute",
            bottom: 0,
            zIndex: 20,
            paddingHorizontal: 10,
          }}
        >
          <Text style={[Styles.HeaderText, { fontSize: 13, color: "white" }]}>
            {name}
          </Text>
          <Text style={[Styles.normalText, { fontSize: 11, color: "white" }]}>
            Califonia, USA ( 54 km )
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const Star = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        <Text style={Styles.HeaderText}>Favourites</Text>
        <TouchableOpacity>
          <EvilIcons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ width: "100%", height: "100%" }}>
          <View style={styles.row}>
            <Prfl pic={require("../assets/Image/1.png")} name="Sara Johns" />
            <Prfl pic={require("../assets/Image/2.png")} name="Amenda Grace" />
          </View>
          <View style={styles.row}>
            <Prfl pic={require("../assets/Image/3.png")} name="Lara Williams" />
            <Prfl pic={require("../assets/Image/6.png")} name="Jane Smith" />
          </View>
          <View style={styles.row}>
            <Prfl pic={require("../assets/Image/5.png")} name="Merry Jane" />
            <Prfl pic={require("../assets/Image/4.png")} name="Alex Boo" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Star;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: wp("7.7%"),
    justifyContent: "space-between",
  },
});
