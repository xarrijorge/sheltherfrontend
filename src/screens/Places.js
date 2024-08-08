// src/screens/PlacesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlacesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Places Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PlacesScreen;