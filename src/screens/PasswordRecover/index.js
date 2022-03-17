import React from "react";
import {
  Container,
  LoginImage,
  FormArea,
  ForgetPasswordButtom,
  TextNormal,
  ButtomText,
  TextBold,
  SignInButtom,
  SignUpButtom,
  FooterArea,
  IconFooter,
  TextTitle,
  BackButton,
  BackButtonImage
} from "./style";
import AppStyle from "../../AppStyle";
import Input from "../../components/Input/input";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <BackButton onPress={()=>navigation.goBack()}>
        <BackButtonImage source={AppStyle.iconSet.backArrow} />
      </BackButton>
      <LoginImage source={AppStyle.imageSet.logoLogin2} />
      <FormArea>
        <TextTitle>FOR GOT YOUR PASSWORD?</TextTitle>
        <Input inputText="EMAIL / PHONE NUMBER " />
        <SignInButtom  onPress={()=>navigation.navigate("PasswordRecoverCode")}>
          <ButtomText>OK</ButtomText>
        </SignInButtom>
        <TextNormal>Don’t have an account?</TextNormal>
        <SignUpButtom onPress={() => navigation.navigate("SignUp")}>
          <TextBold>Sign Up</TextBold>
        </SignUpButtom>
      </FormArea>
    </Container>
  );
};
