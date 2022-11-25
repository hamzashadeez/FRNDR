import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, hp, Styles, wp } from "../theme";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Dot = ({ active }) => {
  return (
    <View
      style={{
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: "white",
        opacity: active ? 1 : 0.5,
      }}
    ></View>
  );
};

const Icon = ({ size, color, icon }) => {
  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: size / 2,
        backgroundColor: color,
      }}
    >
      {icon}
    </TouchableOpacity>
  );
};

const Info = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: "white" }}
      >
        <ImageBackground
          source={require("../assets/lady2.png")}
          style={{ height: hp("65%"), position: "relative" }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF91",
              width: 30,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              marginTop: hp("5%"),
              marginLeft: 20,
            }}
          >
            <AntDesign name="close" size={17} color="black" />
          </TouchableOpacity>
          <View
            style={{
              height: 50,
              width: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 15,
            }}
          >
            <View style={{ width: 58 }} />
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "17%",
              }}
            >
              <Dot active={true} />
              <Dot active={false} />
              <Dot active={false} />
              <Dot active={false} />
              <Dot active={false} />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFFCC",
                width: 58,
                height: 58,
                marginBottom: 40,
                borderRadius: 29,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name="chat" size={24} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: COLORS.primary,
              width: wp("28.2%"),
              height: 24,
              alignItems: "center",
              justifyContent: "center",
              borderBottomEndRadius: 7,
              borderBottomLeftRadius: 7,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "Hellix-Regular",
                fontSize: 11,
              }}
            >
              78% Match
            </Text>
          </View>
        </View>
        {/* end of match stat */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: "7%",
            paddingVertical: 10,
            borderBottomColor: "#0000000A",
            borderBottomWidth: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={[Styles.HeaderText, { fontSize: 28 }]}>
              Sara Willaims (27)
            </Text>
            <Text style={[Styles.normalText]}>Califonia, USA ( 54 km )</Text>
          </View>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              borderRadius: 20,
              height: 40,
              backgroundColor: "#E5E5E58F",
            }}
          >
            <Entypo name="dots-three-vertical" size={20} color="#00000033" />
          </TouchableOpacity>
        </View>
        {/* about */}
        <View style={{ paddingHorizontal: "7%", paddingTop: 7 }}>
          <Text style={Styles.HeaderText}>About</Text>
          <Text style={[Styles.normalText, { fontSize: 14, lineHeight: 17 }]}>
            Lorem ipsum dolor sit amet urna, consectetur ipsum adipiscing elit.
            Nisi,etium maecenas sed urna lorem ipsum dolor sit amet, consectetur
            maecenas...
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                Styles.normalText,
                { color: COLORS.primary, fontFamily: "Hellix-Bold" },
              ]}
            >
              Show More
            </Text>
          </TouchableOpacity>
          {/* infomation */}
          <Text style={[Styles.HeaderText, { marginTop: 6, marginBottom: 10 }]}>
            Basic Information
          </Text>
          <Text style={[Styles.HeaderText, { fontSize: 15, marginTop: 10 }]}>
            Gender:{" "}
            <Text style={{ fontWeight: "normal", color: "gray" }}>Female</Text>
          </Text>
          <Text style={[Styles.HeaderText, { fontSize: 15, marginTop: 10 }]}>
            Looking For:{" "}
            <Text style={{ fontWeight: "normal", color: "gray" }}>Male</Text>
          </Text>
          <Text style={[Styles.HeaderText, { fontSize: 15, marginTop: 10 }]}>
            Age:{" "}
            <Text style={{ fontWeight: "normal", color: "gray" }}>
              27 Years old
            </Text>
          </Text>
          {/* btns */}
        </View>

        {/* end about */}
        <View
          style={{
            marginTop: 30,
            height: 108,
            backgroundColor: COLORS.primary,
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
          />
          <Icon
            size={51}
            color="#FFFFFF5E"
            icon={<AntDesign name="star" size={20} color="white" />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;

const styles = StyleSheet.create({});
