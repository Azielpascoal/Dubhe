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
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import Header from "../../components/Header/header";
import AppStyle from "../../AppStyle";

export default () => {
  onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error("An error occured", err)
    );
  };
  useEffect(() => {
    Alert.alert("Erro ao comunicar com o servidor !");
  }, []);
  const navigation = useNavigation();
  return (
    <Container>
      <Header title="QR Code" onPress={() => navigation.goBack()} />
      <ProfileArea>
        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <Text style={styles.centerText}>
              Go to{" "}
              <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
              your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
      </ProfileArea>
    </Container>
  );
};
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  },
  buttonTouchable: {
    padding: 16,
  },
});
