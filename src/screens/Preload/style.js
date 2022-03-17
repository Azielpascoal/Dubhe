import React from "react";
import AppStyle from "../../AppStyle";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
export const InfoArea = styled.ImageBackground`
  flex: 1;
  height: 100%;
  resize-mode:contain;

`;
export const TextTitle = styled.Text`
  color: #f7f770;
  font-size: 25px;
  text-align: center;
  justify-content: center;
  margin-top: 100%;
`;
export const TextNormal = styled.Text`
  color: #f7f770;
  font-size: 14px;
  text-align: center;
  justify-content: center;
  margin-top: 10px;
`;
export const SkipButtom = styled.TouchableOpacity`
    align-self: flex-end;
    margin-right: 5px;
`;
