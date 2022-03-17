import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ProfileArea,
  ProfileImage,
  ProfileInfoArea,
  ProfileInfo,
  ProfileUserInfo,
  FirstText,
  SecondText,
  GoButtom,
  Image,
} from "./style";
import { Alert } from "react-native";
import Header from "../../components/Header/header";
import AppStyle from "../../AppStyle";

export default () => {
  useEffect(() => {
    Alert.alert("Erro ao comunicar com o servidor !")
  },[])
  const navigation = useNavigation();
  return (
    <Container>
      <Header title="Agende um horário" onPress={() => navigation.goBack()} />
      <ProfileArea>
       
      </ProfileArea>
    </Container>
  );
};
