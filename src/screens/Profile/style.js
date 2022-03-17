import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;
export const SearchBarArea = styled.View`
    align-self:center;
    justify-content: center;
    align-items: center;
    width: 333px;
    height: 40px;
    background-color:#fff;
    border-radius: 8px;
    margin-top: 30px;
    flex-direction:row;
    position: absolute;

`;
export const ProfileArea = styled.View`
    width: 100%;
    background-color: #ff0;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    margin-top: -35%;
`;
export const ProfileImage = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 100px;
    background-color: #ccc;
`;
export const ProfileInfoArea = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;
export const ProfileInfo = styled.View`
    margin-top: 10px;
    flex-direction: row;
    width: 353px;
    border-color:#fff;
    border-width: 1px;
    border-bottom-color:#c4c4c4;
`;
export const ProfileUserInfo = styled.View`
    width: 90%;
`;
export const FirstText = styled.Text`
    font-size: 10px;
    color: #c4c4c4;
`;
export const SecondText = styled.Text`
    font-size: 15px;
    color: #c4c4c4;
`;
export const GoButtom = styled.TouchableOpacity``;
export const Image = styled.Image`
    width:20px;
    height:20px;
    background-color:#c4c4c4;
`;