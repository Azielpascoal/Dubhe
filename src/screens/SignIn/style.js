import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #293443;
`;
export const LoginImage = styled.Image`
  align-self: center;
  margin-left: 20px;
  margin-bottom: 20px;
  
`;
export const FormArea = styled.View`
  width: 320px;
`;
export const ForgetPasswordButtom = styled.TouchableOpacity`
  align-self: flex-end ;
  margin-top:10px;
`;
export const TextNormal = styled.Text`
  font-size: 12px;
  color: #f7f700;
  align-self: center;
`;
export const SignInButtom = styled.TouchableOpacity`
  width: 260px;
  align-self: center;
  height: 47px;
  background-color: #f7f700;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top:30px;
  margin-bottom:20px;
`;
export const ButtomText = styled.Text`
  font-size: 15px;
  color: #1e2630;
`;
export const TextBold = styled.Text`
  font-size: 16px;
  color: #f7f700;
  font-weight: bold;
`;
export const SignUpButtom = styled.TouchableOpacity`
  align-self: center;
  margin-top: 10px;
`;
export const FooterArea = styled.View`
  width: 320px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 30px;
`;
export const IconFooter = styled.Image`
  margin-right: 10px;
`;
