import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import userData from "../recoil/userData";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import TabStack from "./TabStack";

const MainStack = () => {
  const [user_data, setUser] = useRecoilState(userData);

  return (
    <View style={{ flex: 1 }}>
      {user_data === null ? <AuthStack /> : <AppStack />}
    </View>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
