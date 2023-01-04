import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomScreen from "../components/CustomScreen";
import PasswordField from "../components/PasswordField";
import Logo from "../assets/logo.svg";
import { hp, wp } from "../theme";
import BigButton from "../components/BigButton";
import GoogleIcon from "../assets/google.svg";
import FacebookIcon from "../assets/facebook.svg";
import AppleIcon from "../assets/apple.svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = ({ navigation }) => {
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
          Login to your account
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
          Welcome to <Text style={{ fontWeight: "bold" }}>FRNDR</Text>, enter
          your details below to continue
        </Text>
        <Text
          style={{
            fontFamily: "Hellix-Bold",
            fontSize: 16,
            marginTop: hp("4.3%"),
          }}
        >
          Email/ Mobile Number
        </Text>
        <TextInput
          placeholder="Enter your username or email"
          style={styles.input}
        />
        <Text
          style={{
            fontFamily: "Hellix-Bold",
            fontSize: 16,
            marginTop: hp("2%"),
          }}
        >
          Password
        </Text>
        <PasswordField placeholder="Enter password" style={styles.input} />
        {/* <TextInput placeholder="Enter password" style={styles.input} /> */}
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "Hellix-Bold",
              fontSize: 16,
              marginTop: hp("1.8%"),
              textAlign: "center",
              marginBottom: hp("6.4%"),
            }}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>
        <BigButton
          text="Login"
          type="normal"
          onClick={() => navigation.navigate("register")}
        />
        {/* OR */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: hp("4.55%"),
          }}
        >
          <View
            style={{
              height: 1,
              flex: 1,
              backgroundColor: "#BFBFBF",
            }}
          />
          <Text style={{ fontSize: 14, color: "#BFBFBF", marginHorizontal: 5 }}>
            OR
          </Text>
          <View
            style={{
              height: 1,
              flex: 1,
              backgroundColor: "#BFBFBF",
            }}
          />
        </View>
        {/* social btns */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: hp("4.45%"),
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity>
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <FacebookIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <AppleIcon />
          </TouchableOpacity>
        </View>

        {/* Register */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: hp("3.3%"),
          }}
        >
          <Text style={styles.text}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={[styles.text, { fontWeight: "bold", marginLeft: 5 }]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </CustomScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    height: 50,
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
