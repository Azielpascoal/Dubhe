import React from "react";
import AppStyle from "../../AppStyle"
import {
  Container,
  TermArea,
  TextNormal,
  TextBold,
  ConfirmButtom,
} from "./style";
import Header from "../../components/Header/header";
import { useNavigation } from "@react-navigation/native";


export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header
        title=" Martial arts and combat"
        onPress={() => navigation.goBack()}
      />
      <TextNormal>Selct your favourite activity</TextNormal>
      
    </Container>
  );
};
