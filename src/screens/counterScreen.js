import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  // array destructuring
  // const arrrays = ['red', 'green'];
  // const [colorOne, colorTwo] = arrays;
  // use state where we initialize the variable
  // setCounter is the setState where we chnage the state
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="icrease" onPress={() => {
        // setCounter is setState which changes the state
        setCounter(counter + 1);
      }} />
      <Button title="decrese" onPress={() => {
        setCounter(counter - 1);
      }} />
      <Text>counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default CounterScreen;