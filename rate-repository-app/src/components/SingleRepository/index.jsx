import React from "react";
import { useParams } from "react-router";
import { View, FlatList, StyleSheet } from "react-native";

import useRepository from "../../hooks/useRepository";
import Text from "../Text";
import RepositoryItem from "../RepositoryList/RepositoryItem";
import ReviewItem from "./ReviewItem"


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (
  <ReviewItem props={item} />
);

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository({
    id,
    first: 2
  });

  const onEndReach = () => {
    fetchMore();
  };

  if (!repository) return <Text>Loading...</Text>

  const reviews = repository.reviews.edges.map(edge => edge.node)

  return(
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <View>
          <RepositoryItem link props={repository} />
          <ItemSeparator />
        </View>
      )}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
}

export default SingleRepository;