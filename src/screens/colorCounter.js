import React from "react";
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';


const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`decrease ${color}`} onPress={() => onDecrease()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  colorStyle: {

  }
});

export default ColorCounter;