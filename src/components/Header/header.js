import React from 'react';
import {Container,LogoImage,BackButton,BackButtonImage,TextInfo} from './style';
import AppStyle from '../../AppStyle';


export default ({onPress,title})=>{
    return(
        <Container>
            <LogoImage source={AppStyle.imageSet.logo}/>
            <BackButton onPress={onPress}>
                <BackButtonImage source={AppStyle.iconSet.backArrow}/>
            </BackButton>
            <TextInfo>{title}</TextInfo>
        </Container>
    );
}