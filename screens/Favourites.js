import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { EvilIcons } from "@expo/vector-icons";
import { COLORS, hp, Styles, wp } from "../theme";

const DUMMY_CONTENT = [
  {
    id: 1,
    name: "Lara Williams",
    address: "Califonia, USA (54 km)",
    photo:
      "https://drive.google.com/uc?export=view&id=1UC92va_3OnG-sbF3KmdJdW9BTXWbF0np",
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "Califonia, USA (54 km)",
    photo:
      "https://drive.google.com/uc?export=view&id=1weU6H_GaG_tBeCufPKuAwkInA8YlzYpI",
  },
  {
    id: 3,
    name: "Marry Jane",
    address: "Califonia, USA (54 km)",
    photo:
      "https://drive.google.com/uc?export=view&id=1DuOz_i8se_DUdERzdV6xT7j59y04v2Tp",
  },
  {
    id: 4,
    name: "Alex Boo",
    address: "Califonia, USA (54 km)",
    photo:
      "https://drive.google.com/uc?export=view&id=1eClY_TeL9yTZ8iFufdu58gFEr7W8N3YM",
  },
];
const Prfl = ({ name, pic, address }) => {
  return (
    <TouchableOpacity
      style={{ height: hp("31.5%"), width: wp("40.2"), marginTop: 20 }}
    >
      <ImageBackground
        resizeMode="cover"
        source={{ uri: pic }}
        style={{
          height: hp("31.5%"),
          width: wp("40.2"),
          // marginTop: 20,
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
            {address}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const Favourites = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        <Text style={Styles.HeaderText}>Liked</Text>
        <TouchableOpacity>
          <EvilIcons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ width: "100%", height: "100%" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-around",
              paddingHorizontal: 10,
            }}
          >
            {DUMMY_CONTENT.map((card) => (
              <Prfl
                key={card.id}
                pic={card.photo}
                name={card.name}
                address={card.address}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Favourites;

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
