import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import PasswordRecover from '../screens/PasswordRecover';
import PasswordRecoverChange from '../screens/PasswordRecoverChange';
import PasswordRecoverCode from '../screens/PasswordRecoverCode'

const Stack = createStackNavigator();
export default ()=>{
    return(
        <Stack.Navigator initialRouteName="PasswordRecover" screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen component={PasswordRecover} name="PasswordRecover"/>
            <Stack.Screen component={PasswordRecoverCode} name="PasswordRecoverCode"/>
            <Stack.Screen component={PasswordRecoverChange} name="PasswordRecoverChange"/>
        </Stack.Navigator>
    );
}