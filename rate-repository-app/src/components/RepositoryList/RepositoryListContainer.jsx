import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

import theme from '../../theme';
import RepositoryItem from './RepositoryItem';


const styles = StyleSheet.create({
  separator: {
    height: 10
  },
  picker: {
    backgroundColor: theme.colors.background
  }
});

export class RepositoryListContainer extends React.Component {
  
  renderHeader = () => {
    const { selectedSorter, setSelectedSorter, searchQuery, setSearchQuery } = this.props;
    const onChangeSearch = query => setSearchQuery(query);


    return (
      <View>
        <Searchbar 
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Picker 
          selectedValue={selectedSorter}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedSorter(itemValue)
        }>
            <Picker.Item label="Latest" value={0} />
            <Picker.Item label="Highest Rated" value={1} />
            <Picker.Item label="Lowest Rated" value={2} />
        </Picker>
      </View>
    );
  };

  render() {
    const { repositories, onEndReach } = this.props;

    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    const ItemSeparator = () => <View style={styles.separator} />;

    const renderItem = ({ item }) => (
      <RepositoryItem props={item} />
    );

    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        // by default will use item.key or item.id or index
        //keyExtractor={item => item.id}
      />
    );
  }
}

export default RepositoryListContainer;