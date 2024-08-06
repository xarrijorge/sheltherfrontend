// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon, ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import {
    useFonts,
    Cardo_400Regular,
} from '@expo-google-fonts/cardo';


const SplashScreen = () => {
    const [fontsLoaded] = useFonts({
        Cardo_400Regular,
    })

    const navigation = useNavigation();

    useEffect(() => {
        // Simulate a loading process
        setTimeout(() => {
            navigation.replace('Login'); // Navigate to the Login screen after 3 seconds
        }, 3000);
    }, [navigation]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator color="#212121" size="large" />

            <Icon
                source="flower-tulip"
                color="#2196F3"
                size={50}
            />
            <Text style={styles.text}>Welcome to SheltHer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B3E5FC',
    },
    text: {
        marginTop: 20,
        color: '#212121',
        fontSize: 28,
        fontFamily: 'Cardo_400Regular',
    },
});

export default SplashScreen