import React,{useEffect} from "react";
import AppStyle from "../../AppStyle"
import {Alert} from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  Container,
  TermArea,
  TextNormal,
  TextBold,
  ConfirmButtom,
} from "./style";
import Header from "../../components/Header/header";
import { useNavigation } from "@react-navigation/native";

function Activities() {
  return <Container></Container>;
}
function Custom() {
  return <Container></Container>;
}

const Tab = createMaterialTopTabNavigator();

export default () => {
  useEffect(() => {
    Alert.alert("Atenção !","Verifique sua conexão de internet,dados não encontrados !")
  },[])
  const navigation = useNavigation();
  return (
    <Container>
      <Header
        title="Select your activity"
        onPress={() => navigation.goBack()}
      />
      <Tab.Navigator screenOptions={{
         tabBarLabelStyle:{color:AppStyle.colorSet.yellowApp},
         tabBarStyle: { backgroundColor:AppStyle.backgroundColorSet.blackAppThird},
         tabBarIndicatorStyle:{backgroundColor:AppStyle.backgroundColorSet.yellowApp}
      }}>
        <Tab.Screen name="AllActivities" component={Activities} options={{
          title:"All Activities"
        }} />
        <Tab.Screen name="Custom" component={Custom}options={{
          title:"Custom",
        }} />
      </Tab.Navigator>
    </Container>
  );
};
