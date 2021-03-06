import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import AuthButton from '../components/AuthButton';
import AuthTextField from '../components/AuthTextField';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text1}>물어</Text>
      <Text style={styles.text2}>볼램</Text>
      <View style={styles.textInput}>
        <AuthTextField placeholder={'아이디를 입력하세요.'} />
        <AuthTextField placeholder={'비밀번호를 입력하세요.'} />
      </View>
      <AuthButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 50,
    color: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 16,
  },
  text2: {
    fontSize: 50,
    color: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginLeft: 16,
  },
  textInput: {
    top: 50,
    marginHorizontal: 16,
  },
});

export default LoginScreen;
