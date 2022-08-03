import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
};

const AuthTextField = (props: Props) => {
  return (
    <View>
      <TextInput
        style={styles.textField}
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {
    backgroundColor: '#D3D3D3',
    fontSize: 20,
    height: 50,
    marginTop: 10,
  },
});

export default AuthTextField;
