import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
  // here props we are receiving from parent component to child component
  // props are received from imageScreen to imageDetail
  console.log(props);
  return (
    <View>
      <Image source={props.image} />
      <Text>{props.title}</Text>
      <Text>Image Score = {props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ImageDetail;