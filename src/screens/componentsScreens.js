import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    //Text is a primitive react element
    const greeting = 'React native!';
    const name = 'Akil';
    return (
        <View>
    <Text style={styles.textStyle}>{greeting}</Text>
    <Text style={styles.nameStyle}>{name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    nameStyle: {
        fontSize: 10
    }
});

export default ComponentsScreen;