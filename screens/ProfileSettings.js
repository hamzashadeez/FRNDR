import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Cancel from "../assets/cancel.svg";
import React from "react";
import { hp, Styles } from "../theme";
import BigButton from "../components/BigButton";
import { IntSkills } from "./Profile";
import SelectDropdown from "react-native-select-dropdown";

export const DropDown = () => {
  const listData = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
  return (
    <SelectDropdown
      data={listData}
      buttonStyle={styles.input}
      renderDropdownIcon={() => (
        <Entypo name="chevron-down" size={24} color="#555" />
      )}
      dropdownIconPosition="right"
      buttonTextStyle={{ fontSize: 16, marginLeft: -150 }}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
    />
  );
};

const Number = ({ num }) => {
  return (
    <View
      style={{
        width: 25,
        height: 25,
        borderRadius: 12.5,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{num}</Text>
    </View>
  );
};

const ProfileSettings = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
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
        <View style={{ position: "relative" }}>
          {/* <One /> */}
          <Image
            style={{ width: 219, height: 219 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=1iL9zbxqTlOBNYZ1GqB7nDTGFcZzIpu3l",
            }}
          />
          <TouchableOpacity style={{ position: "absolute", right: 5, top: 5 }}>
            <Cancel />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", right: 5, bottom: 5 }}
          >
            <Number num={1} />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 10 }}>
          <View style={{ position: "relative" }}>
            <Image
              style={{ width: 103, height: 103 }}
              source={{
                uri: "https://drive.google.com/uc?export=view&id=1AqMJ14FVhPLU6bV8xk0wGGSD-_DcVBhw",
              }}
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 5, top: 5 }}
            >
              <Cancel />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ position: "absolute", right: 5, bottom: 5 }}
            >
              <Number num={2} />
            </TouchableOpacity>
          </View>
          <View style={{ height: 10 }} />
          <View style={{ position: "relative" }}>
            <Image
              style={{ width: 103, height: 103 }}
              source={{
                uri: "https://drive.google.com/uc?export=view&id=1MHwkLC_fJi7Tv9V62Au-2ghM-LlHFJ9J",
              }}
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 5, top: 5 }}
            >
              <Cancel />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ position: "absolute", right: 5, bottom: 5 }}
            >
              <Number num={3} />
            </TouchableOpacity>
          </View>
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
        <View style={{ position: "relative" }}>
          <Image
            style={{ width: 103, height: 103 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=1ELXPTpnKUx4RxsIq1kBkZC-D8o9jXRma",
            }}
          />
          <TouchableOpacity style={{ position: "absolute", right: 5, top: 5 }}>
            <Cancel />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", right: 5, bottom: 5 }}
          >
            <Number num={4} />
          </TouchableOpacity>
        </View>
        <View style={{ position: "relative" }}>
          <Image
            style={{ width: 103, height: 103 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=1P_IoFW65qnaxEIjoDR1wDGtFS011RyiD",
            }}
          />
          <TouchableOpacity style={{ position: "absolute", right: 5, top: 5 }}>
            <Cancel />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", right: 5, bottom: 5 }}
          >
            <Number num={5} />
          </TouchableOpacity>
        </View>
        <View style={{ position: "relative" }}>
          <Image
            style={{ width: 103, height: 103 }}
            source={{
              uri: "https://drive.google.com/uc?export=view&id=14GSxCblVrOuCMI_1cX-997ZRg4RR8kTL",
            }}
          />
          <TouchableOpacity style={{ position: "absolute", right: 5, top: 5 }}>
            <Cancel />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", right: 5, bottom: 5 }}
          >
            <Number num={6} />
          </TouchableOpacity>
        </View>
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
        {/* interst */}
        <Text
          style={[
            Styles.normalText,
            { textTransform: "uppercase", marginTop: 10 },
          ]}
        >
          Interest
        </Text>
        <IntSkills />
        {/* questions */}
        <Text
          style={[
            Styles.normalText,
            { textTransform: "uppercase", marginVertical: 10 },
          ]}
        >
          Questions
        </Text>
        <Text style={[styles.text, { fontWeight: "400" }]}>1. Question 01</Text>
        <DropDown />
        <Text style={[styles.text, { fontWeight: "400", marginTop: hp("3%") }]}>
          2. Question 02
        </Text>
        <DropDown />
        {/* <TextInput placeholder="your answer here..." style={styles.input} /> */}
        <Text style={[styles.text, { fontWeight: "400", marginTop: hp("3%") }]}>
          3. Question 03
        </Text>
        <DropDown />

        {/* end questions */}
        <View style={{ marginTop: 20 }}>
          <BigButton type="normal" text="Save" />
        </View>
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
    width: "100%",
  },
});
