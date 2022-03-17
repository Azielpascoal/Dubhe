import React,{useState} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {BASE_URL} from "../../services/config"
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
} from "./style";
import AppStyle from "../../AppStyle";
import Input from "../../components/Input/input";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const [email,setEmail]= useState();
  const [password,setPassword]=useState();
  const navigation = useNavigation();
  // const getLoginData = async () => { 
  //   const response = await AsyncStorage.getItem("@token");
  // };
    
  // useEffect(() => {
  //   getLoginData();
  // }, []);
  const changePage= async ()=>{
    try {
      const res = await fetch(`${BASE_URL}/login`,{
        method: "POST",
        body: JSON.stringify({
          "email":`${email}`,
          "password":`${password}`
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res
        .json()
        .then((result) => {
          if (!result.errors) {
            Alert.alert("Welcome in Dubhe !");
            navigation.reset({
              routes: [{ name: "MainTab" }],
            });
            console.log("Efectuado ::", result);
            // AsyncStorage.setItem("@token", result?);
          } else {
          
          }
        })
        .catch((error) => {
          console.log("Erro ::", error);
        });
       }
       catch(error)
       {
        Alert.alert("Connection error","Cannot access your account, please try late !")
        console.log("Erro ::", error);
        navigation.reset({
          routes: [{ name: "Preload" }],
        });
       }
  };
  
  return (
    <Container>
      <LoginImage source={AppStyle.imageSet.logoLogin} />
      <FormArea>
        <Input inputText="EMAIL / PHONE NUMBER " value={email} onChangeText={t=>setEmail(t)} />
        <Input inputText="PASSWORD" password={true} value={password} onChangeText={t=>setPassword(t)}/>
        <ForgetPasswordButtom onPress={()=> navigation.navigate("MainLoginRecover")}>
          <TextNormal>Forgot your password?</TextNormal>
        </ForgetPasswordButtom>
        <SignInButtom onPress={changePage}>
          <ButtomText>OK</ButtomText>
        </SignInButtom>
        <TextNormal>Don’t have an account?</TextNormal>
        <SignUpButtom onPress={() => navigation.navigate("SignUp")}>
          <TextBold>Sign Up</TextBold>
        </SignUpButtom>
      </FormArea>
      <FooterArea>
        <IconFooter source={AppStyle.iconSet.facebook} />
        <IconFooter source={AppStyle.iconSet.twiter} />
        <IconFooter source={AppStyle.iconSet.instagram} />
      </FooterArea>
    </Container>
  );
};
