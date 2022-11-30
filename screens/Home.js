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
import { Feather, EvilIcons } from "@expo/vector-icons";
import { COLORS, hp, wp } from "../theme";
import UserStory from "../components/UserStory";
import Icon from "../components/Icon";
import Card from "../components/Card";
import SwipeCards from "react-native-swipe-cards";
import Cardx from "../components/Cardx";
import { NoMoreCards } from "../components/SwipeCards";

const Home = ({ navigation }) => {
  const DEMO_CONTENT = [
    {
      id: "1",
      cardTitle: "Card 1",
      backgroundColor: "#FFC107",
      image: require("../assets/lady22.jpg"),
    },
    {
      id: "2",
      cardTitle: "Card 2",
      backgroundColor: "#ED2525",
      image: require("../assets/Image/1.png"),
    },
    {
      id: "3",
      cardTitle: "Card 3",
      backgroundColor: "#E7088E",
      image: require("../assets/Image/3.png"),
    },
    {
      id: "4",
      cardTitle: "Card 4",
      backgroundColor: "#00BCD4",
      image: require("../assets/Image/4.png"),
    },
    {
      id: "5",
      cardTitle: "Card 5",
      backgroundColor: "#FFFB14",
      image: require("../assets/Image/5.png"),
    },
    {
      id: "6",
      cardTitle: "Card 1",
      backgroundColor: "#FFC107",
      image: require("../assets/Image/1.png"),
    },
    {
      id: "7",
      cardTitle: "Card 2",
      backgroundColor: "#ED2525",
      image: require("../assets/lady22.jpg"),
    },
    {
      id: "8",
      cardTitle: "Card 3",
      backgroundColor: "#E7088E",
      image: require("../assets/Image/3.png"),
    },
    {
      id: "9",
      cardTitle: "Card 4",
      backgroundColor: "#00BCD4",
      image: require("../assets/Image/4.png"),
    },
    {
      id: "10",
      cardTitle: "Card 5",
      backgroundColor: "#FFFB14",
      image: require("../assets/Image/5.png"),
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch();
  }, []);
  const renderItem = (item) => {};

  const [noMoreCard, setNoMoreCard] = useState(false);
  const [sampleCardArray, setSampleCardArray] = useState([DEMO_CONTENT]);
  const [swipeDirection, setSwipeDirection] = useState("--");
  let LIST = DEMO_CONTENT;

  useEffect(() => {
    setSampleCardArray(DEMO_CONTENT);
    console.log("Updated");
  }, []);

  // const removeCard = (id) => {
  //   // alert(id);
  //   sampleCardArray.splice(
  //     sampleCardArray.findIndex((item) => item.id == id),
  //     1
  //   );
  //   setSampleCardArray(sampleCardArray);
  //   if (sampleCardArray.length == 0) {
  //     setNoMoreCard(true);
  //   }
  //   console.log("length: ", sampleCardArray.length);
  // };

  // const lastSwipedDirection = (swipeDirection) => {
  //   setSwipeDirection(swipeDirection);
  // };

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

        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            width: "100%",
            height: "90%",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* cards */}
          <SwipeCards
            cards={DEMO_CONTENT}
            renderCard={(cardData) => (
              <Cardx {...cardData} navigation={navigation} />
            )}
            renderNoMoreCards={() => <NoMoreCards />}
            // handleYup={this.handleYup}
            // handleNope={this.handleNope}
            // handleMaybe={this.handleMaybe}
            // hasMaybeAction
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
