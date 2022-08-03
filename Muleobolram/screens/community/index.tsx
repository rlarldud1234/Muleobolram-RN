import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-navigation';
import community from '../../api/community';
import CommunityListItem from '../../components/community/CommunityListItem';
import {RootScreens, RootStackList} from '../../navigators';

type CommunityScreenNavigationProps = StackNavigationProp<
  RootStackList,
  RootScreens.Community
>;

interface CommunityScreenProps {
  navigation: CommunityScreenNavigationProps;
}

interface Props {
  id: number;
  title: string;
  description: string;
  status: string;
}

const CommunityScreen: React.FunctionComponent<
  CommunityScreenProps
> = props => {
  const {navigation} = props;
  const [data, setData] = useState<Props[]>([]);
  useEffect(() => {
    community().then(response => {
      setData(response?.data);
    });
  }, []);

  const renderItem = ({item}: {item: Props}) => {
    return (
      <CommunityListItem
        item={item}
        onPress={() =>
          navigation.navigate(RootScreens.Details, {
            id: item.id,
          })
        }
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
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
