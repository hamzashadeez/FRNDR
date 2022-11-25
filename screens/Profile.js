import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, Styles, wp } from "../theme";
import { EvilIcons } from "@expo/vector-icons";
import { Feather, AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import One from "../assets/One.svg";
import Two from "../assets/Two.svg";
import Three from "../assets/Three.svg";
import Four from "../assets/Four.svg";
import Five from "../assets/Five.svg";

const MenuItem = ({icon, color, text}) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        borderColor: "lightgray",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          width: 27,
          height: 27,
          backgroundColor: color,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </View>
      <Text
        style={{
          marginLeft: 20,
          fontFamily: "Hellix-Regular",
          fontSize: 15,
          fontWeight: "600",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const Profile = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        <Text style={Styles.HeaderText}>Profile</Text>
        <TouchableOpacity>
          <EvilIcons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* end header */}
      {/* <John /> */}
      <View style={styles.dp}>
        <View
          style={{
            height: 70,
            width: 70,
            borderColor: COLORS.primary,
            borderWidth: 3,
            borderRadius: 35,
            padding: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/john.png")}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: COLORS.primary,
            alignItems: "center",
            justifyContent: "center",
            height: 25,
            width: wp("33%"),
            borderRadius: 12.5,
            marginTop: -5,
          }}
        >
          <Text
            style={{ color: "white", fontFamily: "Hellix-Bold", fontSize: 12 }}
          >
            100% Completed
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text
              style={[
                Styles.HeaderText,
                { textAlign: "center", fontSize: 15, marginTop: 3 },
              ]}
            >
              John Doe
            </Text>
            <Text
              style={[Styles.normalText, { textAlign: "center", fontSize: 11 }]}
            >
              @johndoe
            </Text>
          </View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#CCCCCC99",
              width: 30,
              height: 30,
              borderRadius: 15,
              marginLeft: 10,
              marginTop: 3,
            }}
          >
            <Ionicons name="pencil" size={12} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/*  */}
      <View style={{ padding: 15 }}>
        <Text style={[Styles.HeaderText, { fontSize: 15 }]}>Bio</Text>
        <Text
          style={[
            Styles.HeaderText,
            { fontSize: 15, lineHeight: 22, fontFamily: "Hellix-Regular" },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sed
          enim suscipit phasellus nibh sed.
        </Text>
        <Text style={[Styles.HeaderText, { fontSize: 15, marginTop: 10 }]}>
          Gender:{" "}
          <Text style={{ fontWeight: "normal", color: "gray" }}>Male</Text>
        </Text>
        <Text style={[Styles.HeaderText, { fontSize: 15, marginTop: 10 }]}>
          Looking For:{" "}
          <Text style={{ fontWeight: "normal", color: "gray" }}>Female</Text>
        </Text>
        <Text style={[Styles.HeaderText, { fontSize: 15, marginTop: 10 }]}>
          Age:{" "}
          <Text style={{ fontWeight: "normal", color: "gray" }}>
            27 Years old
          </Text>
        </Text>
        <Text style={[Styles.HeaderText, { fontSize: 15, marginTop: 20 }]}>
          Interest
        </Text>
        {/* interest */}
        <View
          style={{
            display: "flex",
            // flex: 1,
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
            flexShrink: 1,
            // justifyContent: "space-between",
          }}
        >
          <One style={{ marginLeft: 10 }} width={wp("24%")} />
          <Three style={{ marginLeft: 10 }} width={wp("23%")} />
          <Two style={{ marginLeft: 10 }} width={wp("34%")} />
          <Four style={{ marginLeft: 10 }} width={wp("29%")} />
          <Five style={{ marginLeft: 10 }} width={wp("25%")} />
        </View>
        {/* end interest */}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: "10%",
          marginBottom: 15,
        }}
      >
        <View>
          <Text style={[Styles.HeaderText, { textAlign: "center" }]}>1234</Text>
          <Text style={{ textAlign: "center", fontSize: 11 }}>Visitors</Text>
        </View>
        <View>
          <Text style={[Styles.HeaderText, { textAlign: "center" }]}>1234</Text>
          <Text style={{ textAlign: "center", fontSize: 11 }}>Likes</Text>
        </View>
        <View>
          <Text style={[Styles.HeaderText, { textAlign: "center" }]}>1234</Text>
          <Text style={{ textAlign: "center", fontSize: 11 }}>Matches</Text>
        </View>
      </View>

      <MenuItem
        text={"FRNDR Premium"}
        color={COLORS.primary}
        icon={<FontAwesome5 name="crown" size={12} color="white" />}
      />
      <MenuItem
        text={"Settings"}
        color={"#54B7A6"}
        icon={<AntDesign name="setting" size={15} color="white" />}
      />
      <MenuItem
        text={"Sign Out"}
        color={"#ED4C5C"}
        icon={<Feather name="log-out" size={12} color="white" />}
      />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  dp: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
