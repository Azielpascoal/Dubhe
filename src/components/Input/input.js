import React from "react";
import { Container, InpuText, InputArea, Input } from "./style";

export default ({inputText, value, onChangeText, placeholder ,password }) => {
  return (
    <Container>
      <InpuText>{inputText}</InpuText>
      <InputArea>
        <Input value={value} onChangeText={onChangeText} placeholder={placeholder} secureTextEntry={password} />
      </InputArea>
    </Container>
  );
};
