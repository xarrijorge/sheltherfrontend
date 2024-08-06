// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
// import ProfileScreen from '../screens/ProfileScreen';
// import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;