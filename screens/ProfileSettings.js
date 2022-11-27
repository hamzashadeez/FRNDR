import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo, AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import One from "../assets/profiles/1.svg";
import Two from "../assets/profiles/2.svg";
import Three from "../assets/profiles/3.svg";
import Four from "../assets/profiles/4.svg";
import Five from "../assets/profiles/5.svg";
import Six from "../assets/profiles/6.svg";
import React from "react";
import { hp, Styles } from "../theme";
import BigButton from "../components/BigButton";

const ProfileSettings = () => {
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 5,
          paddingVertical: 10,
        }}
      >
        <Entypo name="chevron-left" size={25} color="black" />
        <Text style={Styles.HeaderText}>Profile Settings</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", paddingHorizontal: 13 }}>
        <One />
        <View style={{ marginLeft: 10 }}>
          <Two />
          <View style={{ height: 10 }} />
          <Three />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 13,
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Four />
        <Five />
        <Six />
      </View>
      {/* List */}
      <View
        style={{ paddingHorizontal: 13, paddingTop: 10, paddingBottom: 30 }}
      >
        <Text style={[Styles.normalText, { textTransform: "uppercase" }]}>
          general info
        </Text>
        <TextInput style={styles.input} placeholder="John Doe" />
        <TextInput style={styles.input} placeholder="Male" />
        <TextInput style={styles.input} placeholder="1996/06/12" />
        <TextInput style={styles.input} placeholder="Female" />
        <TextInput style={styles.input} placeholder="Dating" />
        <TextInput
          style={styles.input}
          placeholder="Lorem ipsum dolor sit amet..."
        />
        {/* questions */}

        <Text style={[Styles.HeaderText, { marginVertical: 10 }]}>
          Questions
        </Text>
        <Text style={[styles.text, { fontWeight: "400" }]}>1. Question 01</Text>
        <TextInput placeholder="your answer here..." style={styles.input} />
        <Text style={[styles.text, { fontWeight: "400", marginTop: hp("3%") }]}>
          2. Question 02
        </Text>
        <TextInput placeholder="your answer here..." style={styles.input} />
        <Text style={[styles.text, { fontWeight: "400", marginTop: hp("3%") }]}>
          3. Question 03
        </Text>
        <TextInput
          placeholder="your answer here..."
          style={[styles.input, { marginBottom: 15 }]}
        />
        {/* end questions */}
        <BigButton type="normal" text="Save" />
      </View>
    </ScrollView>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F4F4F4",
    marginTop: 10,
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
