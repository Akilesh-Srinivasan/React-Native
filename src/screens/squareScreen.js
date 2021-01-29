import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import ColorCounter from './colorCounter';

const COLOR_INCREMENT = 15;

// state === {red:0, green:0, blue:0}
// action - what change we are making to the state
const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state : { ...state, blue: state.blue + action.payload };
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
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 + COLOR_INCREMENT })}
        color="red" />

      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 + COLOR_INCREMENT })}
        color="green" />

      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 + COLOR_INCREMENT })}
        color="blue" />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }}></View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SquareScreen;

