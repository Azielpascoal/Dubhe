import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, View, Text } from "react-native";
import Mapa from "../screens/Mapa";
import Profile from "../screens/Profile";
import Calendary from "../screens/Calendary";
import QrCode from "../screens/QrCode";
import AppStyle from "../AppStyle";


const tab = createBottomTabNavigator();
export default () => {
  return (
    <tab.Navigator
      initialRouteName="Mapa"
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          backgroundColor: "#ffffff",
          height: 90,
          ...style.shadow,
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#fff",
        },
      }}
    >
      <tab.Screen
        name="Mapa"
        component={Mapa}
        options={{ tabBarIcon: homeIcon }}
      />
       <tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarIcon: profileIcon }}
      />
       <tab.Screen
        name="Calendary"
        component={Calendary}
        options={{ tabBarIcon: agendaIcon }}
      />
       <tab.Screen
        name="3"
        component={Mapa}
        options={{ tabBarIcon: eventoIcon }}
      />
       <tab.Screen
        name="4"
        component={Mapa}
        options={{ tabBarIcon: dubheBackIcon }}
      />
       <tab.Screen
        name="QrCode"
        component={QrCode}
        options={{ tabBarIcon: qrcodeIcon }}
      />
    </tab.Navigator>
  );
};

export const homeIcon = ({focused}) => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginRight: 15,
        backgroundColor:focused ? "#293443" : "#fff",
        borderRadius:12
      }}
    >
      <Image
      source={AppStyle.iconSet.mapa}
        style={{ width: 25, height: 25, tintColor: focused ? "#fff" : "#293443" }}
      />
    </View>
  );
};
export const profileIcon = ({focused}) => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginRight: 15,
        backgroundColor:focused ? "#293443" : "#fff",
        borderRadius:12
      }}
    >
      <Image
      source={AppStyle.iconSet.profile}
        style={{ width: 25, height: 25, tintColor: focused ? "#fff" : "#293443" }}
      />
    </View>
  );
  
};
export const agendaIcon = ({focused}) => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginRight: 15,
        backgroundColor:focused ? "#293443" : "#fff",
        borderRadius:12
      }}
    >
      <Image
      source={AppStyle.iconSet.agenda}
        style={{ width: 25, height: 25, tintColor: focused ? "#fff" : "#293443" }}
      />
    </View>
  );
};
export const eventoIcon = ({focused}) => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginRight: 15,
        backgroundColor:focused ? "#293443" : "#fff",
        borderRadius:12
      }}
    >
      <Image
      source={AppStyle.iconSet.evento}
        style={{ width: 25, height: 25, tintColor: focused ? "#fff" : "#293443" }}
      />
    </View>
  );
};
export const dubheBackIcon = ({focused}) => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginRight: 15,
        backgroundColor:focused ? "#293443" : "#fff",
        borderRadius:12
      }}
    >
      <Image
      source={AppStyle.iconSet.dback}
        style={{ width: 25, height: 25, tintColor: focused ? "#fff" : "#293443" }}
      />
    </View>
  );
};
export const qrcodeIcon = ({focused}) => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginRight: 15,
        backgroundColor:focused ? "#293443" : "#fff",
        borderRadius:12
      }}
    >
      <Image
      source={AppStyle.iconSet.qrcode}
        style={{ width: 25, height: 25, tintColor: focused ? "#fff" : "#293443" }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 0,
    },
    shadowRadius: 30,
    shadowOpacity: 0.12,
    elevation: 12,
  },
});
// {Object.keys(cart.length)}
