import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import ColorCounter from './colorCounter';

const COLOR_INCREMENT = 15;

// state === {red:0, green:0, blue:0}
// action - what change we are making to the state
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // state is equal to the color object in the usereducer
  // useReducer will give the current state
  // dispatch will run the reducer
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        // callback function to pass props/state from child to parent
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 + COLOR_INCREMENT })}
        color="red" />

      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 + COLOR_INCREMENT })}
        color="green" />

      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 + COLOR_INCREMENT })}
        color="blue" />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }}></View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SquareScreen;

