import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { COLORS, Styles } from "./theme";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Register from "./screens/Register";
import VerifyNumber from "./screens/VerifyNumber";
import Interest from "./screens/Interest";
import Questions from "./screens/Questions";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Info from "./screens/Info";
import Settings from "./screens/Settings";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Hellix-Regular": require("./assets/fonts/Hellix-Regular.ttf"),
    "Hellix-Bold": require("./assets/fonts/Hellix-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" backgroundColor={COLORS.primary} />
        {/* <Welcome /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <VerifyNumber /> */}
        {/* <Interest /> */}
        {/* <Questions /> */}
        {/* <Home /> */}
        {/* <Profile /> */}
        {/* <Info /> */}
        <Settings />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: StatusBar.currentHeight,
  },
});
