import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyles}>
            <Text style={styles.textStyles1}>box screen</Text>
            <Text style={styles.textStyles2}>box screen1</Text>
            <Text style={styles.textStyles3}>box screen2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyles: {
        borderColor: 'black',
        borderWidth: 3,
        height: 200,
        flexDirection: 'row'
    },
    textStyles1: {
        borderColor: 'red',
        borderWidth: 3,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute'
    },
    textStyles2: {
        borderColor: 'red',
        borderWidth: 3,
    },
    textStyles3: {
        borderColor: 'red',
        borderWidth: 3,
    }
})

export default BoxScreen