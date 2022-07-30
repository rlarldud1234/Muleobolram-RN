import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {AuthButton} from '../../components/auth';
import {AuthTextField} from '../../components/auth';
import {RootScreens, RootStackList} from '../../navigators';

type LoginScreenNavigationProps = StackNavigationProp<
  RootStackList,
  RootScreens.Login
>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProps;
}

const LoginScreen: React.FunctionComponent<LoginScreenProps> = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <Text style={styles.text1}>물어</Text>
      <Text style={styles.text2}>볼램</Text>
      <View style={styles.textInput}>
        <AuthTextField placeholder={'아이디를 입력하세요.'} />
        <AuthTextField placeholder={'비밀번호를 입력하세요.'} />
      </View>
      <View style={styles.button}>
        <AuthButton
          buttonColor="#008000"
          title="로그인"
          tintColor="#ffffff"
          onPress={() => navigation.navigate(RootScreens.Community)}
        />
        <Button
          title="회원가입 하러 가기"
          onPress={() => navigation.navigate(RootScreens.Signup)}
        />
      </View>
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
  button: {
    top: 100,
    marginHorizontal: 16,
  },
});

export default LoginScreen;
