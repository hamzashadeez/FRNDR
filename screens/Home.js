import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Frndr from "../assets/Frnd.svg";
import MyStory from "../assets/MyStory.svg";
import Selena from "../assets/Selena.svg";
import Clara from "../assets/Clara.svg";
import Fabian from "../assets/Fabian.svg";
import George from "../assets/George.svg";
import Lady from "../assets/lady.svg";
import { Feather, AntDesign } from "@expo/vector-icons";
import { COLORS, hp, wp } from "../theme";
import UserStory from "../components/UserStory";
import Icon from "../components/Icon";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch();
  }, []);
  const renderItem = (item) => {};
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          marginTop: 10,
        }}
      >
        <Frndr />
        <TouchableOpacity style={{ padding: 5 }}>
          <Feather name="bell" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
      <View style={{ height: 100, paddingLeft: 15, marginTop: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={{ marginRight: wp("2.46%"), height: 70 }}>
            <MyStory />
          </TouchableOpacity>
          <UserStory name={"Selena"} photo={require(`../assets/${1}.jpg`)} />
          <UserStory name={"Clara"} photo={require(`../assets/${2}.jpg`)} />
          <UserStory name={"Fabian"} photo={require(`../assets/${3}.jpg`)} />
          <UserStory name={"George"} photo={require(`../assets/${4}.jpg`)} />
          <UserStory name={"Selena"} photo={require(`../assets/${1}.jpg`)} />
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            height: hp("6%"),
            backgroundColor: "#F8E7F6",
            marginHorizontal: 15,
            borderRadius: hp("3%"),
            flexDirection: "row",
            marginTop: 5,
            // width: "100%",
            padding: hp("0.44"),
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: "50%",
              borderRadius: hp("3%"),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: hp("5.22%"),
            }}
          >
            <Text
              style={{
                fontFamily: "Hellix-Regular",
                textAlign: "center",
                color: COLORS.primary,
                fontWeight: "bold",
              }}
            >
              Make Friends
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: "50%",
              borderRadius: hp("3%"),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: hp("5.22%"),
            }}
          >
            <Text
              style={{
                fontFamily: "Hellix-Regular",
                textAlign: "center",
                color: COLORS.primary,
                fontWeight: "400",
                marginBottom: 2,
              }}
            >
              Search Partners
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("info")}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            width: "100%",
            height: "90%",
            alignItems: "center",
            position: "relative",
          }}
        >
          <View
            style={{
              bottom: 10,
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              zIndex: 20,
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
            />
            <Icon
              size={51}
              color="#FFFFFF5E"
              icon={<AntDesign name="star" size={20} color="white" />}
            />
          </View>
          <Image
            resizeMode="cover"
            source={require("../assets/lady22.jpg")}
            style={{ height: "100%", width: "100%", borderRadius: 20 }}
          />
          {/* <Lady width={"100%"} height={"100%"} resizeMode="cover" /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
