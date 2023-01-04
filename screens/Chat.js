import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { EvilIcons } from "@expo/vector-icons";
import { COLORS, Styles } from "../theme";
import { useState } from "react";

const Online = ({ pic, navigation }) => {
  return (
    <TouchableOpacity style={{ marginRight: 15, position: "relative" }}>
      <View
        style={{
          backgroundColor: "green",
          width: 10,
          height: 10,
          borderRadius: 5,
          position: "absolute",
          right: 0,
          zIndex: 40,
          marginTop: 2,
        }}
      />
      <Image source={pic} style={{}} />
    </TouchableOpacity>
  );
};

const ChatMessage = ({ pic, name, message, count, navigation, img }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("chatscreen", { pic: img, name, message })
      }
      style={{
        borderBottomColor: "#eee",
        borderBottomWidth: 0.5,
        height: 55,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Image source={pic} />
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <Text style={[Styles.HeaderText, { fontSize: 15 }]}>{name}</Text>
        <Text style={[Styles.normalText, { fontSize: 13 }]}>{message}</Text>
      </View>
      {count && (
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 20,
            width: 20,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={[
              Styles.HeaderText,
              { fontSize: 13, color: "white", marginBottom: 3 },
            ]}
          >
            {count}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const Chat = ({ navigation }) => {
  const [showSearchInputField, hideInput] = useState(false);

  const searching = () => {
    // this is where searching take place
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        {showSearchInputField && (
          <TextInput
            placeholder="Search..."
            onChangeText={(text) => searching(text)}
            onBlur={() => hideInput(false)}
            style={{
              backgroundColor: "whitesmoke",
              flex: 1,
              paddingHorizontal: 10,
              height: 30,
            }}
          />
        )}
        {!showSearchInputField && (
          <Text style={Styles.HeaderText}>Messages</Text>
        )}
        <TouchableOpacity
          style={{ paddingLeft: 20 }}
          onPress={() => hideInput(true)}
        >
          <EvilIcons name="search" size={27} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 15 }}>
        <Text style={[Styles.HeaderText, { fontSize: 16, fontWeight: "400" }]}>
          Online
        </Text>
        <View
          style={{
            height: 60,
            borderBottomColor: "lightgray",
            borderBottomWidth: 1,
            paddingTop: 5,
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Online pic={require(`../assets/users/1.png`)} />
            <Online pic={require(`../assets/users/5.png`)} />
            <Online pic={require(`../assets/users/2.png`)} />
            <Online pic={require(`../assets/users/3.png`)} />
            <Online pic={require(`../assets/users/4.png`)} />
            <Online pic={require(`../assets/users/1.png`)} />
            <Online pic={require(`../assets/users/5.png`)} />
            <Online pic={require(`../assets/users/2.png`)} />
            <Online pic={require(`../assets/users/3.png`)} />
            <Online pic={require(`../assets/users/4.png`)} />
          </ScrollView>
        </View>
        <Text
          style={[
            Styles.HeaderText,
            {
              fontSize: 16,
              fontWeight: "400",
              marginTop: 10,
              marginBottom: -10,
            },
          ]}
        >
          My Chats
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{
            height: "100%",
            width: "100%",
            paddingHorizontal: 15,
          }}
        >
          <ChatMessage
            navigation={navigation}
            message="Hello there"
            name="Jeff Charles"
            count={3}
            img={1}
            pic={require(`../assets/users/5.png`)}
          />
          <ChatMessage
            navigation={navigation}
            message="Okay, later"
            name="Chris Chef"
            count={1}
            img={1}
            pic={require(`../assets/users/1.png`)}
          />
          <ChatMessage
            navigation={navigation}
            message="Can I call you"
            name="John Sonmez"
            img={1}
            pic={require(`../assets/users/3.png`)}
          />
          <ChatMessage
            navigation={navigation}
            message="Bye then"
            name="Ammie Smith"
            count={2}
            img={1}
            pic={require(`../assets/users/4.png`)}
          />
          <ChatMessage
            navigation={navigation}
            message="Okay, later"
            name="Chris Chef"
            count={1}
            img={1}
            pic={require(`../assets/users/1.png`)}
          />
          <ChatMessage
            navigation={navigation}
            message="Can I call you"
            name="John Sonmez"
            count={5}
            img={1}
            pic={require(`../assets/users/2.png`)}
          />
        </ScrollView>
      </View>
      {/*  */}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
