import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import CustomScreen from "../components/CustomScreen";
import Logo from "../assets/logo.svg";
import { hp, Styles, wp } from "../theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BigButton from "../components/BigButton";
import { useRecoilState } from "recoil";
import userData from "../recoil/userData";

const Questions = ({ navigation }) => {
  const [user_data, setUser] = useRecoilState(userData);

  return (
    <CustomScreen>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Logo width={76} height={76} />
          </View>
          <Text style={[Styles.HeaderText, { marginBottom: 10 }]}>
            Answer to the following question...
          </Text>
          <Text style={[styles.text, { fontWeight: "400" }]}>
            1. Question 01
          </Text>
          <TextInput placeholder="your answer here..." style={styles.input} />
          <Text
            style={[styles.text, { fontWeight: "400", marginTop: hp("3%") }]}
          >
            2. Question 02
          </Text>
          <TextInput placeholder="your answer here..." style={styles.input} />
          <Text
            style={[styles.text, { fontWeight: "400", marginTop: hp("3%") }]}
          >
            3. Question 03
          </Text>
          <TextInput placeholder="your answer here..." style={styles.input} />
        </View>
      </KeyboardAwareScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 15,
          left: 0,
          right: 0,
          width: wp("100%"),
          alignItems: "center",
          paddingHorizontal: 20,
          justifyContent: "center",
          height: 60,
        }}
      >
        <BigButton text="Finish" type="normal" onClick={() => setUser(true)} />
      </View>
    </CustomScreen>
  );
};

export default Questions;

const styles = StyleSheet.create({
  input: {
    height: hp("6.3%"),
    borderWidth: 1,
    borderColor: "#DBDBDB",
    paddingLeft: 15,
    marginTop: 5,
    borderRadius: 5,
    fontFamily: "Hellix-Regular",
  },
  text: {
    fontFamily: "Hellix-Regular",
    fontSize: 14,
  },
});
