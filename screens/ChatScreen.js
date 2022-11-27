import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Ionicons, Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { COLORS, Styles } from "../theme";
import Lock from "../assets/lock.svg";
import Send from "../assets/plus.svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BottomSheet from "@gorhom/bottom-sheet";

const Message = ({ type, text }) => {
  return (
    <View
      style={{
        marginBottom: 10,
        padding: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: type === 1 ? "flex-end" : "flex-start",
      }}
    >
      {/* message component */}
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 7,
          backgroundColor: type === 1 ? COLORS.primary : "#E9E9E9",
          width: "60%",
          height: 58,
          borderRadius: 10,
          borderBottomEndRadius: type === 1 ? 0 : 10,
          borderBottomStartRadius: type === 1 ? 10 : 0,
        }}
      >
        <Text
          style={{
            fontFamily: "Hellix-Regular",
            fontSize: 14,
            color: type === 1 ? "white" : "black",
          }}
        >
          {text}
        </Text>
        <Text
          style={{
            fontFamily: "Hellix-Regular",
            fontSize: 10,
            textAlign: "right",
            color: type === 1 ? "lightgray" : "gray",
          }}
        >
          20/09/14 13:09
        </Text>
      </View>
    </View>
  );
};

const ChatScreen = ({ navigation, route }) => {
  const bottomSheetRef = useRef();
  const handleClosePress = () => bottomSheetRef.current.close();
  const handleExpandPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const { pic, name, message } = route.params;
  console.log(route);
  return (
    <View style={{ flex: 1, backgroundColor: "white", position: "relative" }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Entypo name="chevron-left" size={30} color="black" />
          <View style={{ position: "relative" }}>
            <View
              style={{
                backgroundColor: "green",
                width: 10,
                height: 10,
                borderRadius: 5,
                position: "absolute",
                right: 0,
              }}
            />
            <Image
              source={require(`../assets/users/3.png`)}
              style={{ marginLeft: 5 }}
            />
          </View>
        </TouchableOpacity>
        <View style={{ paddingLeft: 10 }}>
          <Text style={[Styles.HeaderText, { fontSize: 15 }]}>{name}</Text>
          <Text style={[Styles.normalText, { fontSize: 13 }]}>Online</Text>
        </View>
      </View>
      {/* alert message */}
      <View
        style={{
          backgroundColor: "#EBEBEB63",
          borderRadius: 5,
          marginHorizontal: "5%",
          flexDirection: "row",
          justifyContent: "center",
          padding: 5,
        }}
      >
        <View style={{ marginRight: -5, marginTop: 5 }}>
          <Lock />
        </View>
        <Text
          style={{
            fontFamily: "Hellix-Regular",
            fontSize: 13,
            textAlign: "center",
            marginHorizontal: 15,
            color: "#0000008C",
          }}
        >
          Messages are end-to-end encrypted. No one outside of this chat, not
          even TLC, can read or listen to them.
        </Text>
      </View>
      {/* end alert message */}
      {/* <KeyboardAwareScrollView enableOnAndroid={true}> */}
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <Message type={1} text="Hi. What’s up? how are you?" />
        <Message type={2} text="Hi. I’m doing great.How about u?" />
        <Message type={1} text="I’m also fine.Can we hang out today?" />
        <Message type={2} text="Great idea. Let’s meet today." />
      </View>

      {/* form */}
      <View style={styles.form}>
        <TouchableOpacity
          onPress={() => {
            // setIndex(1);
            handleExpandPress();
          }}
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 5,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 20,
              height: 20,
              borderWidth: 2,
              borderRadius: 5,
              borderBottomLeftRadius: 0,
              borderColor: COLORS.primary,
            }}
          >
            <Entypo name="plus" size={15} color={COLORS.primary} />
          </View>
        </TouchableOpacity>
        <TextInput placeholder="Messsage" style={styles.input} />
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 5,
          }}
        >
          <Send />
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        enablePanDownToClose={true}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
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
          {/* body */}
          <TouchableOpacity style={styles.btn}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 27,
                height: 27,
                borderRadius: 7,
                backgroundColor: COLORS.primary,
              }}
            >
              <Ionicons name="image" size={15} color="white" />
            </View>
            <Text style={[Styles.HeaderText, { marginLeft: 15, fontSize: 15 }]}>
              Send Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 27,
                height: 27,
                borderRadius: 7,
                backgroundColor: "#5FD772",
              }}
            >
              <Ionicons name="play" size={15} color="white" />
            </View>
            <Text style={[Styles.HeaderText, { marginLeft: 15, fontSize: 15 }]}>
              Send Video
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 27,
                height: 27,
                borderRadius: 7,
                backgroundColor: "#DD88CF",
              }}
            >
              <Ionicons name="md-musical-notes" size={15} color="white" />
            </View>
            <Text style={[Styles.HeaderText, { marginLeft: 15, fontSize: 15 }]}>
              Send Audio
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 27,
                height: 27,
                borderRadius: 7,
                backgroundColor: "#4595FF",
              }}
            >
              <FontAwesome name="file" size={13} color="white" />
            </View>
            <Text style={[Styles.HeaderText, { marginLeft: 15, fontSize: 15 }]}>
              Send Document
            </Text>
          </TouchableOpacity>
          {/* end body */}
        </View>
      </BottomSheet>
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingHorizontal: 25,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 0.7,
    marginBottom: 10,
  },
  form: {
    backgroundColor: "#F7F7F7",
    height: 60,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "white",
    height: 37,
    flex: 1,
    borderRadius: 18.5,
    paddingHorizontal: 15,
  },
});
