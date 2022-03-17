import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #293443;
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
export const SearchBarIcon = styled.Image``;
export const SearchBar = styled.TextInput`
    width: 226px;
    height: 90%;
`;