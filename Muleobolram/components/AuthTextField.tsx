import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export type Props = {
  placeholder: string;
};

const AuthTextField = (props: Props) => {
  const [text, setText] = useState<string>('');

  return (
    <View>
      <TextInput
        style={styles.textField}
        value={text}
        placeholder={props.placeholder}
        onChangeText={txt => setText(txt)}
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
