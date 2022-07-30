import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {AuthButton, AuthTextField} from '../../components/auth';
import {RootScreens, RootStackList} from '../../navigators';

type SignUpScreenNavigationProps = StackNavigationProp<
  RootStackList,
  RootScreens.Signup
>;

interface SignUpScreenProps {
  navigation: SignUpScreenNavigationProps;
}

const SignupScreen: React.FunctionComponent<SignUpScreenProps> = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <View style={styles.textField}>
        <AuthTextField placeholder="이름을 입력하세요." />
        <AuthTextField placeholder="아이디를 입력하세요." />
        <AuthTextField placeholder="비밀번호를 입력하세요." />
      </View>
      <View style={styles.button}>
        <AuthButton
          buttonColor="#008000"
          tintColor="#ffffff"
          title="회원가입"
          onPress={() => navigation.pop()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textField: {
    top: 50,
    marginHorizontal: 20,
  },
  button: {
    top: 100,
    marginHorizontal: 20,
  },
});

export default SignupScreen;
