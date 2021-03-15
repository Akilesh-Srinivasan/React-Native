import React, { useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

const ColorsScreen = () => {
  const [colors, setColors] = useState([]);
  // empty array in useState is the array initialization
  return (
    <View>
      <Button
        title="add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  buttonStyle: {},
});

export default ColorsScreen;
