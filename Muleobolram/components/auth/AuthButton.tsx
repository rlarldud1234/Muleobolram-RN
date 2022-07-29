import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProp {
  title: string;
  buttonColor: string;
  tintColor: string;
  onPress: () => void;
}

const AuthButton = (props: ButtonProp) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: props.buttonColor}]}
      onPress={props.onPress}>
      <Text style={[styles.title, {color: props.tintColor}]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 60,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default AuthButton;
