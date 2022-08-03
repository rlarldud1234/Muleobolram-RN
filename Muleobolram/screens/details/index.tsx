import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootScreens, RootStackList} from '../../navigators';
import details from '../../api/details';

type DetailsCommunityScreenNavigationProps = StackNavigationProp<
  RootStackList,
  RootScreens.Details
>;

export type DetailParams = {
  id: number;
};

interface DetailsCommunityScreenProps {
  route: {params: DetailParams};
  navigation: DetailsCommunityScreenNavigationProps;
}

interface Props {
  id: number;
  title: string;
  description: string;
  status: string;
}

const DetailsCommunityScreen: React.FunctionComponent<
  DetailsCommunityScreenProps
> = props => {
  const {id} = props.route.params;
  const [item, setItem] = useState<Props>({
    id: 0,
    title: '',
    description: '',
    status: '',
  });

  useEffect(() => {
    details(id).then(response => {
      setItem(response?.data);
    });
  });

  return (
    <SafeAreaView>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.status}</Text>
    </SafeAreaView>
  );
};

export default DetailsCommunityScreen;
