import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomScreen from "../components/CustomScreen";
import Logo from "../assets/logo.svg";
import { COLORS, hp, wp } from "../theme";
import BigButton from "../components/BigButton";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import CountryPicker, {
  getAllCountries,
  getCallingCode,
  FlagButton,
} from "react-native-country-picker-modal";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const Register = ({ navigation }) => {
  const [withFlag, setWithFlag] = useState(true);
  const [country, setCountry] = useState({ callingCode: ["1264"] });
  return (
    <CustomScreen>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Logo width={76} height={76} />
        </View>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            fontFamily: "Hellix-Bold",
          }}
        >
          Register to your account
        </Text>
        <Text
          style={{
            fontFamily: "Hellix-Regular",
            fontSize: 14,
            textAlign: "center",
            marginTop: hp("1%"),
            lineHeight: 22,
          }}
        >
          Fill the following essential details to getting registered.
        </Text>
        <Text
          style={{
            fontFamily: "Hellix-Bold",
            fontSize: 16,
            marginTop: hp("4.3%"),
          }}
        >
          Email
        </Text>
        <TextInput placeholder="Enter your email" style={styles.input} />

        <Text
          style={{
            fontFamily: "Hellix-Bold",
            fontSize: 16,
            marginTop: hp("2%"),
          }}
        >
          Mobile number
        </Text>
        <View
          style={[
            styles.input,
            { alignItems: "center", flexDirection: "row", paddingLeft: 2 },
          ]}
        >
          {/*  */}
          {/* <TouchableOpacity
          style={{
            height: "100%",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <CountryPicker
            withCallingCode
            withFlag
            withFlagButton={true}
            countryCodes
            renderFlagButton={() => <FlagButton />}
            onSelect={(e) => setCountry(e)}
          />
          <FlagButton
            withEmoji={true}
            withCallingCodeButton={true}
            withFlagButton={true}
            withCurrencyButton={true}
          />
          <Text>+{country?.callingCode[0]}</Text>
        </TouchableOpacity> */}
          {/* <View
          style={{
            width: 1,
            height: "60%",
            backgroundColor: "#263238",
            marginHorizontal: 3,
          }}
        /> */}
          <TextInput
            placeholder="Enter your mobile number"
            style={{ height: "100%", width: "100%", paddingLeft: 13 }}
            keyboardType="phone-pad"
          />
        </View>

        <Text
          style={{
            fontFamily: "Hellix-Bold",
            fontSize: 16,
            marginTop: hp("2%"),
          }}
        >
          Password
        </Text>
        <TextInput placeholder="Enter password" style={styles.input} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: hp("2.6%"),
            marginBottom: hp("9.5%"),
          }}
        >
          <BouncyCheckbox
            size={20}
            fillColor={COLORS.primary}
            unfillColor="#eee"
            iconStyle={{ borderRadius: 1 }}
            innerIconStyle={{ borderWidth: 2, borderRadius: 1 }}
            isChecked={true}
          />
          <Text
            style={{
              color: COLORS.primary,
              fontFamily: "Hellix-Regular",
              width: "90%",
              fontSize: 13,
              lineHeight: 18,
            }}
          >
            I agree to that FRNDR terms and conditons.{" "}
            <Text style={{ fontWeight: "bold" }}>Learn more.</Text>
          </Text>
        </View>

        <BigButton
          text="Register"
          type="normal"
          onClick={() => navigation.navigate("verify")}
        />

        {/* Login */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: hp("5.4%"),
          }}
        >
          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={[styles.text, { fontWeight: "bold", marginLeft: 5 }]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </CustomScreen>
  );
};

export default Register;

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
