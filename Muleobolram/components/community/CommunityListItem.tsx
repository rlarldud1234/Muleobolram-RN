import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

export interface communityProps {
  title: string;
  description: string;
}

const CommunityListItem = ({
  item,
  onPress,
}: {
  item: communityProps;
  onPress: () => void;
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: '#000000',
    marginHorizontal: 20,
  },
});

export default CommunityListItem;
