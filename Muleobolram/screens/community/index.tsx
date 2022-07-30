import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';

const CommunityScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>커뮤니티</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    tintColor: 'red',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default CommunityScreen;
