import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EvilIcons, Entypo, FontAwesome } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

import React from "react";
import { COLORS, Styles } from "../theme";

const List = ({ text1, text2 }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15,
      }}
    >
      <Text style={[Styles.HeaderText, { fontSize: 15 }]}>{text1}</Text>
      <Text>{text2}</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: -10,
          }}
        >
          <Entypo name="chevron-left" size={25} color="black" />
          <Text style={[Styles.HeaderText, { marginBottom: 3 }]}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* end of header */}
      <View style={{ padding: 20 }}>
        <Text style={[Styles.normalText, { textTransform: "uppercase" }]}>
          Account Settings
        </Text>
        <List text1="Phone number" text2="91121334243" />
        <List text1="Email" text2="johndoe@gmail.com" />
        <View
          style={{
            height: 1,
            backgroundColor: "lightgray",
            marginTop: 15,
            marginHorizontal: -17,
          }}
        />
        <Text
          style={[
            Styles.normalText,
            { textTransform: "uppercase", marginTop: 20 },
          ]}
        >
          Discovery
        </Text>
        <List text1="Location" text2="" />
        <View
          style={{
            backgroundColor: "#F4F4F4",
            height: 52,
            borderRadius: 26,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 15,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontFamily: "Hellix-Bold" }}>
            Current location
            <Text style={{ fontFamily: "Hellix-Regular" }}>
              {" "}
              (San Francisco)
            </Text>
          </Text>
          <FontAwesome name="map-marker" size={24} color="#C4C4C4" />
        </View>
        <List text1="Distance" text2="50km" />
        {/* meter */}
        <View>
          <Slider
            thumbTintColor={COLORS.primary}
            style={{ width: "100%", height: 40 }}
            minimumValue={30}
            value={30}
            maximumValue={100}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor="#000000"
          />
        </View>
        {/* end meter */}
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
