// src/navigation/AppNavigator.js
import React, { useEffect, useState } from 'react';
import JWT from 'expo-jwt';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import VerifyOTPScreen from '../screens/VerifyOTP';
import CompleteProfileScreen from '../screens/CompleteProfile';
import BottomTabNavigator from './BottomNavigator';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import { Appbar, Avatar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
// set initial route to home if user is logged in.
// const token = AsyncStorage.getItem('authToken');
// const decodedToken = jwtDecode(token);
// const initialRoute = decodedToken ? 'Home' : 'Login';

const CustomNavigationBar = ({ navigation, previous }) => {
    return (
        <Appbar.Header>
            {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title="Shelther" />
            <Avatar.Image size={40} source={{ uri: 'https://via.placeholder.com/150' }} onPress={() => navigation.navigate('Profile')} />
            <Appbar.Action icon="cog" onPress={() => navigation.navigate('Settings')} />
        </Appbar.Header>
    );
};

const AppNavigator = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [initialRoute, setInitialRoute] = useState('Login');
    const checkToken = async () => {
        try {
            const token = await AsyncStorage.getItem('authToken');
            if (token) {
                const decoded = JWT.decode(token);  // Use jwtDecode directly
                console.log('Decoded token:', decoded);  // For debugging
                // Check if the token is not expired
                // if (decoded.exp > Date.now() / 1000) {
                //     setInitialRoute('Home');
                // }
                setInitialRoute('Home');
            }
        } catch (error) {
            console.error('Error checking token:', error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {


        checkToken();
    }, []);

    if (isLoading) {
        // You can return a loading screen here if you want
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Home"
                    component={BottomTabNavigator}
                    options={{ header: (props) => <CustomNavigationBar {...props} /> }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ header: (props) => <CustomNavigationBar {...props} /> }}
                />
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ header: (props) => <CustomNavigationBar {...props} /> }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;