import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-navigation';
import CommunityListItem, {
  communityProps,
} from '../../components/community/CommunityListItem';
import {RootScreens, RootStackList} from '../../navigators';

type CommunityScreenNavigationProps = StackNavigationProp<
  RootStackList,
  RootScreens.Community
>;

interface CommunityScreenProps {
  navigation: CommunityScreenNavigationProps;
}

const CommunityScreen: React.FunctionComponent<
  CommunityScreenProps
> = props => {
  const {navigation} = props;

  let arr: Array<communityProps> = [
    {
      name: '김기영',
      title: '김기영바보',
    },
    {
      name: '김시안',
      title: '김시안 개발해!',
    },
  ];

  const renderItem = ({item}: {item: communityProps}) => {
    return (
      <CommunityListItem
        item={item}
        onPress={() =>
          navigation.navigate(RootScreens.Details, {
            name: item.name,
            title: item.title,
          })
        }
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={arr}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default CommunityScreen;
