import React from 'react';
import { Platform, Dimensions, I18nManager } from 'react-native';


const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const colorSet ={
    yellowApp: '#f7f770',
    blackAppFirst:'#0b1726',
    blackAppSecond:'#19212c',
    blackAppThird:'#222c38',

};
const backgroundColorSet ={
    yellowApp: '#f7f770',
    blackAppFirst:'#0b1726',
    blackAppSecond:'#19212c',
    blackAppThird:'#293443',
};
const imageSet={
    logo:require('./assets/image/logo.png'),
    firstView :require('./assets/image/first.png'),
    secondView :require('./assets/image/second.png'),
    thirdView : require('./assets/image/third.png'),
    logoLogin :require('./assets/image/logoLogin.png'),
    logoLogin2 :require('./assets/image/logotipo.png'),
    uploadPicture :require('./assets/image/foto.png')

};
const iconSet = {
    facebook:require('./assets/icon/facebook.png'),
    twiter :require('./assets/icon/twiter.png'),
    instagram :require('./assets/icon/instagram.png'),
    backArrow: require('./assets/icon/backArrow.png'),
    profile: require('./assets/icon/1.png'),
    agenda: require('./assets/icon/2.png'),
    evento: require('./assets/icon/3.png'),
    dback: require('./assets/icon/4.png'),
    qrcode: require('./assets/icon/5.png'),
    mapa: require('./assets/icon/6.png'),
    lupa: require('./assets/icon/lupa.png')
    
    
};
const fontSet = {
    xxlarge: 40,
    xlarge: 30,
    large: 25,
    middle: 20,
    normal: 16,
    small: 13,
    xsmall: 11,
    title: 30,
    content: 20,
  };
  const StyleDict = {
    imageSet,
    backgroundColorSet,
    iconSet,
    colorSet,
    fontSet,
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
  };
  
  export default StyleDict;