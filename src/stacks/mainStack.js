import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import UseTerms from '../screens/UseTerms';
import Activities from '../screens/Activities';
import MainLoginRecover from './mainLoginRecover';
import MainTab from './mainTab';

const Stack = createStackNavigator();
export default ()=>{
    return(
        <Stack.Navigator initialRouteName="Preload" screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen component={Preload} name="Preload"/>
            <Stack.Screen component={SignIn} name="SignIn"/>
            <Stack.Screen component={SignUp} name="SignUp"/>
            <Stack.Screen component={UseTerms} name="UseTerms"/>
            <Stack.Screen component={Activities} name="Activities"/>
            <Stack.Screen component={MainLoginRecover} name="MainLoginRecover"/>
            <Stack.Screen component={MainTab} name="MainTab"/>
        </Stack.Navigator>
    );
}