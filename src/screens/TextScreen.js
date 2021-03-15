import React, { useState } from 'react'
import { Text, Button, View, StyleSheet, TextInput } from 'react-native'


const TextScreen = () => {
    const [ name, setName ] = useState('')
    return (
        <View>
            <Text>Enter Password</Text>
            <TextInput style={ styles.inputStyle} 
            autoCapitalize="none" 
            autoCorrect="false"
            value={name}
            onChangeText={(newValue) => {
                setName(newValue)
            }}
            />
           {name.length < 8 ? <Text>password must be 8 digits</Text> : null } 
            {}
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 30,
        margin: 15,
        borderWidth: 2,
        borderColor: 'black',
    }
})

export default TextScreen