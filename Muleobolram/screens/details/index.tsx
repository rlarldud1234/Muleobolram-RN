import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootScreens, RootStackList} from '../../navigators';

type DetailsCommunityScreenNavigationProps = StackNavigationProp<
  RootStackList,
  RootScreens.Community
>;

interface DetailsCommunityScreenProps {
  route: {name: string; title: string};
  navigation: DetailsCommunityScreenNavigationProps;
}

const DetailsCommunityScreen: React.FunctionComponent<
  DetailsCommunityScreenProps
> = props => {
  const {name, title} = props.route;

  return (
    <SafeAreaView>
      <Text>{name}</Text>
      <Text>{title}</Text>
    </SafeAreaView>
  );
};

export default DetailsCommunityScreen;
