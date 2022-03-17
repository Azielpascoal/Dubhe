import React from "react";
import {
  Container,
  InfoArea,
  TextTitle,
  TextNormal,
  SkipButtom,
} from "./style";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppStyle from "../../AppStyle";
import Swiper from "react-native-web-swiper";

export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Swiper
        autoplay={true}
        controlsProps={{
          dotsTouchable: true,
          nextTitle: "",
          prevTitle: "",
          dotActiveStyle: { backgroundColor: AppStyle.colorSet.yellowApp },
        }}
      >
        <InfoArea source={AppStyle.imageSet.firstView}>
          <TextTitle>
            Work out close to your home, or wherever you want.
          </TextTitle>
          <TextNormal>
            Dubhe finds activities close to you based on your location.
          </TextNormal>
        </InfoArea>
        <InfoArea source={AppStyle.imageSet.secondView}>
          <TextTitle>Find the best activity for you.</TextTitle>
          <TextNormal>Find one among many options offered by Dubhe.</TextNormal>
        </InfoArea>
        <InfoArea source={AppStyle.imageSet.thirdView}>
          <SkipButtom onPress={() => navigation.navigate("SignIn")}>
            <TextNormal>Skip</TextNormal>
          </SkipButtom>
          <TextTitle>Choose what you want to do with your free time.</TextTitle>
          <TextNormal>
            Choose any activity you want, we have options! No additional costs
            or subscription fees. Enjoy your freedom!
          </TextNormal>
        </InfoArea>
      </Swiper>
    </Container>
  );
};
