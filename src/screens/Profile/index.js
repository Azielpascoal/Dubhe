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
  const navigation = useNavigation();
  return (
    <Container>
      <Header title="" onPress={() => navigation.goBack()} />
      <ProfileArea>
        <ProfileImage />
        <ProfileInfoArea>
          <ProfileInfo>
            <ProfileUserInfo>
              <FirstText>Nome</FirstText>
              <SecondText>Aziel</SecondText>
            </ProfileUserInfo>
            <GoButtom>
              <Image />
            </GoButtom>
          </ProfileInfo>
          <ProfileInfo>
            <ProfileUserInfo>
              <FirstText>Sobrenome</FirstText>
              <SecondText>Pascoal</SecondText>
            </ProfileUserInfo>
            <GoButtom>
              <Image />
            </GoButtom>
          </ProfileInfo>
          <ProfileInfo>
            <ProfileUserInfo>
              <FirstText>Sexo</FirstText>
              <SecondText>Masculino</SecondText>
            </ProfileUserInfo>
            <GoButtom>
              <Image />
            </GoButtom>
          </ProfileInfo>
          <ProfileInfo>
            <ProfileUserInfo>
              <FirstText>Data de Nascimento</FirstText>
              <SecondText>10/01/2004</SecondText>
            </ProfileUserInfo>
            <GoButtom>
              <Image />
            </GoButtom>
          </ProfileInfo>
          <ProfileInfo>
            <ProfileUserInfo>
              <FirstText>CPF</FirstText>
              <SecondText>009276233la049</SecondText>
            </ProfileUserInfo>
            <GoButtom>
              <Image />
            </GoButtom>
          </ProfileInfo>
          <ProfileInfo>
            <ProfileUserInfo>
              <FirstText>Telefone</FirstText>
              <SecondText>+244929050149</SecondText>
            </ProfileUserInfo>
            <GoButtom>
              <Image />
            </GoButtom>
          </ProfileInfo>
          <ProfileInfo>
            <ProfileUserInfo>
              <FirstText>Nome</FirstText>
              <SecondText>azielpascoalmuanzaantonio@gmail.com</SecondText>
            </ProfileUserInfo>
            <GoButtom>
              <Image />
            </GoButtom>
          </ProfileInfo>
        </ProfileInfoArea>
      </ProfileArea>
    </Container>
  );
};
