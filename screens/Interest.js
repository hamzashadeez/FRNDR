import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomScreen from "../components/CustomScreen";
import Logo from "../assets/logo.svg";
import One from "../assets/One.svg";
import Two from "../assets/Two.svg";
import Three from "../assets/Three.svg";
import Four from "../assets/Four.svg";
import Five from "../assets/Five.svg";
import { hp, Styles, wp } from "../theme";
import BigButton from "../components/BigButton";

const Interest = ({ navigation }) => {
  return (
    <CustomScreen>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Logo width={76} height={76} />
      </View>
      <Text style={[Styles.HeaderText, { marginBottom: hp("1.10%") }]}>
        Pick your interests...
      </Text>
      <TextInput placeholder="Search" style={styles.input} />
      <Text style={[styles.text, { color: "#3B3237", marginVertical: 5 }]}>
        You should select at least 5 interests
      </Text>
      <View
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 10,
          flexShrink: 1,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <One width={wp("24%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Three width={wp("23%")} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Two width={wp("34%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Four width={wp("29%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Five width={wp("25%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <One width={wp("24%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Two width={wp("34%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Three width={wp("23%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Four width={wp("29%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Five width={wp("25%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <One width={wp("24%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Two width={wp("34%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Three width={wp("23%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Four width={wp("29%")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Five width={wp("25%")} />
        </TouchableOpacity>
      </View>
      <BigButton
        text={"Next"}
        type="normal"
        onClick={() => navigation.navigate("questions")}
      />
    </CustomScreen>
  );
};

export default Interest;

const styles = StyleSheet.create({
  input: {
    height: hp("5.7%"),
    borderWidth: 1,
    borderColor: "#DBDBDB",
    paddingLeft: 15,
    marginTop: 5,
    borderRadius: 5,
    fontFamily: "Hellix-Regular",
  },
  text: {
    fontFamily: "Hellix-Regular",
    fontSize: 13,
  },
});
