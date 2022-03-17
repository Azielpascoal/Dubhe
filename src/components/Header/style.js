import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.View`
    width: 100%;
    height: 138px;
    background-color: #293443;
    border-width: 2px;
    border-color: #293443 ;
    border-bottom-color: #f7f770;
`;
export const LogoImage = styled.Image`
    align-self: flex-end;
    width: 41px;
    height: 34px;
    margin-top: 10px;
    margin-right: 10px;
`;
export const BackButton = styled.TouchableOpacity`
    margin-left: 10px;
`;
export const BackButtonImage = styled.Image``;
export const TextInfo = styled.Text`
    font-size: 20px;
    color: #F7F700;
    text-align: center;
    font-weight: bold;
    margin-top: 25px;
`;