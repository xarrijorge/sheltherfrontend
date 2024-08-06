// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import VerifyOTPScreen from '../screens/VerifyOTP';
import CompleteProfileScreen from '../screens/CompleteProfile';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} />
                <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;