// src/navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ContactsScreen from '../screens/Contacts';
import PlacesScreen from '../screens/Places';
import { IconButton } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'HomeScreen') {
                        iconName = 'home';
                    } else if (route.name === 'ContactsScreen') {
                        iconName = 'account';
                    } else if (route.name === 'PlacesScreen') {
                        iconName = 'map';
                    }

                    return <IconButton icon={iconName} color={color} size={size} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { display: 'flex' },
                headerShown: false
            })}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
            <Tab.Screen name="PlacesScreen" component={PlacesScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;