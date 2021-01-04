import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';

const ColorsScreen = () => {
  // empty array in useState is the array initialization 
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button title="colors" onPress={() => {
        // setoperator - adding new element to the colors array
        setColors([...colors, randomRgb()]);
      }} />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        // renderItem will take the item from the array 
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
        }} />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
  buttonStyle: {

  }
});

export default ColorsScreen;