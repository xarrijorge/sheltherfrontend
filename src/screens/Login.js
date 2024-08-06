// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import axios from '../utils/axiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/auth/login', { email, password });
            const { token } = response.data;

            // Store the token in AsyncStorage
            await AsyncStorage.setItem('authToken', token);

            Alert.alert('Success', 'Login successful', [
                { text: 'OK', onPress: () => navigation.navigate('Home') },
            ]);
        } catch (error) {
            Alert.alert('Error', error.response?.data?.error || 'Login failed');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                label="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />
            <Button mode="contained" onPress={handleLogin} style={styles.button}>
                Login
            </Button>
            <Button mode="text" onPress={() => navigation.navigate('Register')} style={styles.button}>
                Don't have an account? Register
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        marginBottom: 12,
    },
    button: {
        marginTop: 12,
    },
});

export default LoginScreen;