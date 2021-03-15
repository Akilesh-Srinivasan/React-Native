import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


const reducer = (state, action) => {
  // state ==== { counte: number}
  // action === { type: increase || decrease, payload: 1}
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload }
    case "decrease":
      return { ...state, counter: state.counter - action.payload }
    default:
      return state
  }

}

const CounterScreen = () => {
  // array destructuring
  // const arrrays = ['red', 'green'];
  // const [colorOne, colorTwo] = arrays;
  // use state where we initialize the variable
  // setCounter is the setState where we update the state
const [ state, dispatch ] = useReducer(reducer, { counter: 0})

const { counter } = state
  return (
    <View>
      <Button title= "Increase" onPress= {() => {
        dispatch({ type: "increase", payload: 1})
      }}/>
      <Button title= "Decrease" onPress= {() => {
        dispatch({ type: "decrease", payload: 1})
      }}/>
      <Text>Counter:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default CounterScreen;