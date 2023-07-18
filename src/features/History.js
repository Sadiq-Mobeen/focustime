import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { spacing } from '../utils/sizing';
import colors from '../utils/colors';

export default History = ({ history }) => {

  if(!history || !history.length) return <Text style={styles.title}>You haven't focused on anything yet! </Text>

  const renderItem = ({item}) => <Text style = {styles.item}> > { item } </Text>

  // const item = ;
  return (
    <View>
      <Text style={styles.title}>Things you have focused on: </Text>
      <FlatList 
        data = { history }
        renderItem = {renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginLeft: spacing.sm,
    marginTop: spacing.sm,
    color: colors.white,
  },
  title: {
    flex: 'auto',
    marginLeft: spacing.sm,
    marginTop: spacing.md,
    color: colors.white,
    fontWeight: 'bold',
  },
});
