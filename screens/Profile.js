import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BigButton from "../components/BigButton";
import React, { useCallback, useMemo, useRef } from "react";
import { COLORS, Styles, wp } from "../theme";
import { EvilIcons } from "@expo/vector-icons";
import { Feather, AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import One from "../assets/One.svg";
import Two from "../assets/Two.svg";
import Three from "../assets/Three.svg";
import Four from "../assets/Four.svg";
import Five from "../assets/Five.svg";
import userData from "../recoil/userData";
import { useRecoilState } from "recoil";
import BottomSheet from "@gorhom/bottom-sheet";
import Out from "../assets/Out.svg";

export const IntSkills = () => {
  return (
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
  );
};

const MenuItem = ({ icon, color, text, navigation, onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
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

const Profile = ({ navigation }) => {
  const bottomSheetRef = useRef();
  const handleClosePress = () => bottomSheetRef.current.close();
  const handleExpandPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const [user_data, setUser] = useRecoilState(userData);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        <Text style={Styles.HeaderText}>Profile</Text>
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
            onPress={() => navigation.navigate("profile_settings")}
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
        navigation={navigation}
      />
      <MenuItem
        text={"Settings"}
        color={"#54B7A6"}
        navigation={navigation}
        onClick={() => navigation.navigate("settings")}
        icon={<AntDesign name="setting" size={15} color="white" />}
      />
      <MenuItem
        text={"Sign Out"}
        color={"#ED4C5C"}
        navigation={navigation}
        icon={<Feather name="log-out" size={12} color="white" />}
        onClick={handleExpandPress}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        enablePanDownToClose={true}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => handleClosePress()}
              style={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 25,
            }}
          >
            <Out />
            <Text style={[Styles.HeaderText, { fontSize: 17, marginTop: 10 }]}>
              Are you sure?
            </Text>
            <Text
              style={[
                Styles.normalText,
                {
                  fontSize: 17,
                  marginTop: 10,
                  textAlign: "center",
                  width: "80%",
                  lineHeight: 20,
                  marginBottom: 20,
                },
              ]}
            >
              Do you want to sign out from the account?
            </Text>
            <BigButton
              text="Yes, sure"
              type="normal"
              onClick={() => setUser(null)}
            />
          </View>
        </View>
      </BottomSheet>
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
