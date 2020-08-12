import React, { Component, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { AppLoading } from "expo";
import io from "socket.io-client";
import {
  useFonts,
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";
import { render } from "react-dom";

const Stack = createStackNavigator();

export default () => {
  let [fontsLoaded] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Choice" component={choice} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

var batting = 0;
var userHolder = 0;
var computerHolder = 0;
var user = 0;
var computer = 0;
var out = 0;
function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 90,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSans_700Bold",
        }}
      >
        ODD
        <Text
          style={{
            color: "#000",
            fontSize: 90,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: "JosefinSans_700Bold",
          }}
        >
          {" "}
          EVE
        </Text>
      </Text>
      <Button
        color="red"
        title="Play"
        onPress={() => navigation.navigate("Choice")}
      />
    </View>
  );
}

function innings(you, pc) {
  if (you == pc) {
    if (batting == 1) {
      batting = 0;
    } else if (batting == 0) {
      batting = 1;
    }
    out = out + 1;
  }
  if (out > 1) {
    if (user > computer) {
      userHolder = 7;
      computerHolder = 8;
    } else if (computer > user) {
      userHolder = 8;
      computerHolder = 7;
    }
  }
  if (out == 1) {
    if (batting == 1 && computer > user) {
      userHolder = 8;
      computerHolder = 7;
    } else if (batting == 0 && user > computer) {
      userHolder = 7;
      computerHolder = 8;
    }
  }
}

function uOne() {
  computerHolder = Math.floor(Math.random() * 6) + 1;
  userHolder = 1;
  if (batting == 0 && userHolder != computerHolder) {
    user = user + 1;
  } else if (batting == 1 && userHolder != computerHolder) {
    computer = computer + computerHolder;
  }
  innings(userHolder, computerHolder);
}
function uTwo() {
  computerHolder = Math.floor(Math.random() * 6) + 1;
  userHolder = 2;
  if (batting == 0 && userHolder != computerHolder) {
    user = user + 2;
  } else if (batting == 1 && userHolder != computerHolder) {
    computer = computer + computerHolder;
  }
  innings(userHolder, computerHolder);
}
function uThree() {
  computerHolder = Math.floor(Math.random() * 6) + 1;
  userHolder = 3;
  if (batting == 0 && userHolder != computerHolder) {
    user = user + 3;
  } else if (batting == 1 && userHolder != computerHolder) {
    computer = computer + computerHolder;
  }
  innings(userHolder, computerHolder);
}
function uFour() {
  computerHolder = Math.floor(Math.random() * 6) + 1;
  userHolder = 4;
  if (batting == 0 && userHolder != computerHolder) {
    user = user + 4;
  } else if (batting == 1 && userHolder != computerHolder) {
    computer = computer + computerHolder;
  }
  innings(userHolder, computerHolder);
}
function uFive() {
  computerHolder = Math.floor(Math.random() * 6) + 1;
  userHolder = 5;
  if (batting == 0 && userHolder != computerHolder) {
    user = user + 5;
  } else if (batting == 1 && userHolder != computerHolder) {
    computer = computer + computerHolder;
  }
  innings(userHolder, computerHolder);
}
function uSix() {
  computerHolder = Math.floor(Math.random() * 6) + 1;
  userHolder = 6;
  if (batting == 0 && userHolder != computerHolder) {
    user = user + 6;
  } else if (batting == 1 && userHolder != computerHolder) {
    computer = computer + computerHolder;
  }
  innings(userHolder, computerHolder);
}
function reset() {
  out = 0;
  userHolder = 0;
  computerHolder = 0;
  user = 0;
  computer = 0;
}
function setBat(n) {
  if (n == 0) {
    batting = 0;
  } else if (n == 1) {
    batting = 1;
  }
}
/*function coin(odd) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        {computerHolder}
        {userHolder}
      </Text>
      <Button
        title="1"
        onPress={() => {
          uOne();
        }}
      />
      <Button
        title="2"
        onPress={() => {
          uTwo();
        }}
      />
      <Button
        title="3"
        onPress={() => {
          uThree();
        }}
      />
      <Button
        title="4"
        onPress={() => {
          uFour();
        }}
      />
      <Button
        title="5"
        onPress={() => {
          uFive();
        }}
      />
      <Button
        title="6"
        onPress={() => {
          uSix();
        }}
      />
      <Button title="QUIT" onPress={() => navigation.push("Home")} />
    </View>
  );
}*/
function choice({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setBat(0);
          navigation.push("Details");
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            borderRadius: 30,
            paddingHorizontal: 30,
            paddingVertical: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "JosefinSans_600SemiBold_Italic",
              fontSize: 40,
              color: "#fff",
            }}
          >
            BAT First
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setBat(1);
          navigation.push("Details");
        }}
      >
        <View
          style={{
            marginTop: 10,
            backgroundColor: "red",
            borderRadius: 30,
            paddingHorizontal: 25,
            paddingVertical: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "JosefinSans_600SemiBold_Italic",
              fontSize: 40,
              color: "#fff",
            }}
          >
            BOWL First
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
/*function toss({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={()=>coin(1)}>
        <Text>ODD</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>coin(0)}>
        <Text>EVEN</Text>
      </TouchableOpacity>
    </View>
  );
}*/
function DetailsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow",
      }}
    >
      {batting === 1 ? (
        <Text
          style={{
            top: 5,
            left: 40,
            position: "absolute",
            fontSize: 50,
            fontFamily: "JosefinSans_600SemiBold_Italic",
          }}
        >
          Batting -
        </Text>
      ) : null}
      <Text
        style={{
          position: "absolute",
          backgroundColor: "blue",
          color: "#fff",
          fontSize: 40,
          fontFamily: "JosefinSans_500Medium",
          top: 10,
          right: 5,
          borderRadius: 20,
          padding: 5,
        }}
      >
        Computer - {computer}
      </Text>
      <Text
        style={{
          marginTop: -30,
          color: "blue",
          fontFamily: "JosefinSans_700Bold_Italic",
          fontSize: 200,
        }}
      >
        {userHolder === 0 ? (
          <Text> - </Text>
        ) : userHolder === computerHolder ? (
          <Text>OUT</Text>
        ) : userHolder === 7 ? (
          <Text>LOST </Text>
        ) : userHolder === 8 ? (
          <Text> WON </Text>
        ) : (
          <Text>{computerHolder}</Text>
        )}
      </Text>
      {userHolder < 7 ? (
        <Text style={{ fontFamily: "JosefinSans_300Light", fontSize: 40 }}>
          Pick your run
        </Text>
      ) : null}
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {userHolder < 7 ? (
          <TouchableOpacity
            onPress={() => {
              uOne();
              navigation.push("Details");
            }}
          >
            <Text
              style={{
                fontSize: 30,
                borderRadius: 50,
                backgroundColor: "red",
                color: "#fff",
                paddingHorizontal: 15,
                paddingTop: 5,
                marginHorizontal: 5,
              }}
            >
              1
            </Text>
          </TouchableOpacity>
        ) : null}
        {userHolder < 7 ? (
          <TouchableOpacity
            onPress={() => {
              uTwo();
              navigation.push("Details");
            }}
          >
            <Text
              style={{
                fontSize: 30,
                borderRadius: 50,
                backgroundColor: "red",
                color: "#fff",
                paddingHorizontal: 15,
                paddingTop: 5,
                marginHorizontal: 5,
              }}
            >
              2
            </Text>
          </TouchableOpacity>
        ) : null}
        {userHolder < 7 ? (
          <TouchableOpacity
            onPress={() => {
              uThree();
              navigation.push("Details");
            }}
          >
            <Text
              style={{
                fontSize: 30,
                borderRadius: 50,
                backgroundColor: "red",
                color: "#fff",
                paddingHorizontal: 15,
                paddingTop: 5,
                marginHorizontal: 5,
              }}
            >
              3
            </Text>
          </TouchableOpacity>
        ) : null}
        {userHolder < 7 ? (
          <TouchableOpacity
            onPress={() => {
              uFour();
              navigation.push("Details");
            }}
          >
            <Text
              style={{
                fontSize: 30,
                borderRadius: 50,
                backgroundColor: "red",
                color: "#fff",
                paddingHorizontal: 15,
                paddingTop: 5,
                marginHorizontal: 5,
              }}
            >
              4
            </Text>
          </TouchableOpacity>
        ) : null}
        {userHolder < 7 ? (
          <TouchableOpacity
            onPress={() => {
              uFive();
              navigation.push("Details");
            }}
          >
            <Text
              style={{
                fontSize: 30,
                borderRadius: 50,
                backgroundColor: "red",
                color: "#fff",
                paddingHorizontal: 15,
                paddingTop: 5,
                marginHorizontal: 5,
              }}
            >
              5
            </Text>
          </TouchableOpacity>
        ) : null}
        {userHolder < 7 ? (
          <TouchableOpacity
            onPress={() => {
              uSix();
              navigation.push("Details");
            }}
          >
            <Text
              style={{
                fontSize: 30,
                borderRadius: 50,
                backgroundColor: "red",
                color: "#fff",
                paddingHorizontal: 15,
                paddingTop: 5,
                marginHorizontal: 5,
              }}
            >
              6
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <Button
        title="QUIT"
        onPress={() => {
          navigation.push("Home");
          reset();
        }}
      />
      <Text
        style={{
          color: "black",
          fontFamily: "JosefinSans_700Bold_Italic",
          fontSize: 200,
        }}
      >
        {userHolder === 0 ? (
          <Text>-</Text>
        ) : userHolder === computerHolder ? (
          <Text>OUT</Text>
        ) : userHolder === 7 ? (
          <Text>WON </Text>
        ) : userHolder === 8 ? (
          <Text> LOST </Text>
        ) : userHolder === 0 ? (
          <Text> - </Text>
        ) : (
          <Text>{userHolder}</Text>
        )}
      </Text>
      <Text
        style={{
          position: "absolute",
          backgroundColor: "black",
          padding: 15,
          color: "#fff",
          fontSize: 40,
          fontFamily: "JosefinSans_500Medium",
          bottom: 10,
          left: 5,
          borderRadius: 20,
        }}
      >
        You - {user}
      </Text>
      {batting === 0 ? (
        <Text
          style={{
            bottom: 5,
            right: 40,
            position: "absolute",
            fontSize: 50,
            fontFamily: "JosefinSans_600SemiBold_Italic",
          }}
        >
          - Batting
        </Text>
      ) : null}
      <Text></Text>
    </View>
  );
}
