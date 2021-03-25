import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  // props are properies receivd from other components
  return (
    <View>
      <Text style={styles.text}>Hi!1</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate("Components")}
      />

      <Button
        title="Go to counter screen"
        onPress={() => props.navigation.navigate("CounterScreen")}
      />

      <Button
        title="Go to colors screen"
        onPress={() => props.navigation.navigate("ColorsScreen")}
      />

      <Button
        title="Go to squares screen"
        onPress={() => props.navigation.navigate("SquareScreen")}
      />

      <Button
        title="Go to text screen"
        onPress={() => props.navigation.navigate("TextScreen")}
      />
      <Button
        title="Go to box screen"
        onPress={() => props.navigation.navigate("BoxScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
