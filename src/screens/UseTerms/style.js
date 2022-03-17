import React from 'react';
import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
`;
export const TermArea = styled.ScrollView`
    padding: 20px;
    background-color: #293443;
`;
export const TextNormal = styled.Text`
    color:#F7F700;
    font-size: 13px;
    margin-top: 20px;
`;
export const TextBold = styled.Text`
    color:#293443;
    font-size: 15px;
    font-weight: 500;
`;

export const ConfirmButtom = styled.TouchableOpacity`
  width: 260px;
  align-self: center;
  height: 47px;
  background-color:#f7f770;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top:30px;
  margin-bottom:30px;
`;