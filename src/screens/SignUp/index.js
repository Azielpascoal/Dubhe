import React, { useState } from "react";
import {
  Container,
  LoginImage,
  FormArea,
  ForgetPasswordButtom,
  UpImage,
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
import {BASE_URL} from "../../services/config"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
export default () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const [genero,setGenero] = useState();
  const gender =[
    "Masculino",
    "Feminino"
  ]
  const onSbumit=()=>{
    //try {
      //     const res = await fetch(`${BASE_URL}`, {
      //       method: "POST",
      //       body: JSON.stringify({
             
      //       }),
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     });
      //     const data = await res
      //       .json()
      //       .then((result) => {
      //         if (!result.errors) {
      //           navigation.reset({
      //             routes: [{ name: "UseTerms" }],
      //           });
      //           console.log("Efectuado ::", result);
      //           // AsyncStorage.setItem("@token", result?);
      //         } else {
              
      //         }
      //       })
      //       .catch((error) => {
      //         console.log("Erro ::", error);
      //       });
      //      }
      //      catch(error)
      //      {
      //       Alert.alert("Erro de conexão","Não foi possível criar a tua conta tente mais tarde !")
      //       console.log("Erro ::", error);
      //       navigation.reset({
      //         routes: [{ name: "Preload" }],
      //       });
      //      }
  }
  return (
    <Container>
      <UpImage onPress={() => Alert.alert("Diretŕio não encontrado!")}>
        <LoginImage source={AppStyle.imageSet.uploadPicture} />
      </UpImage>
      <FormArea>
        <Input inputText="First Name " />
        <Input inputText="Last Name" />
        <TextNormal style={{color:"#f7f700",alignSelf:"flex-start",marginTop:10}}>Gender</TextNormal>
        <ModalDropdown
              options={gender}
              style={{
                width: "100%",
                height: 40,
                borderRadius: 8,
                backgroundColor: "#fff",
                marginTop:10,
                borderWidth: 1,
                padding:10 ,
              }}
              defaultValue={genero}
              textStyle={{
                fontSize: 13,
                color: "#1A2A3A",
                textAlign: "center",
              }}
              dropdownTextStyle={{
                fontSize: 13,
              }}
              dropdownStyle={{ marginBottom: 15, width: "82%", marginLeft: 21 }}
              onSelect={(item, index) => {
                setGenero(index);
              }}
            ></ModalDropdown>
        <Input inputText="Birthdate" />
        <Input inputText="ID" />
        <Input inputText="Phone Number" />
        <Input inputText="E-mail " />
        <Input inputText="Password" password={true} />
        <Input inputText="Password Confirmation" password={true} />
        <FooterArea>
          <Checkbox
            status={isSelected ? "checked" : "unchecked"}
            onPress={() => {
              setSelection(!isSelected);
            }}
            color={AppStyle.colorSet.yellowApp}
          />
          <TextNormal>
            I confirm I am over 18 years old, and I agree to the Terms&
            Conditions.
          </TextNormal>
        </FooterArea>
        <SignInButtom onPress={() => Alert.alert("Erro","Não consegumimos comunicar com o servidor !")}>
          <ButtomText>Sign Up</ButtomText>
        </SignInButtom>
        <SignUpButtom onPress={() => navigation.navigate("SignIn")}>
          <TextBold>
            Already have an account?<TextNormal>LOG IN HERE</TextNormal>
          </TextBold>
        </SignUpButtom>
        <FooterArea>
          <IconFooter source={AppStyle.iconSet.facebook} />
          <IconFooter source={AppStyle.iconSet.twiter} />
          <IconFooter source={AppStyle.iconSet.instagram} />
        </FooterArea>
      </FormArea>
    </Container>
  );
};
