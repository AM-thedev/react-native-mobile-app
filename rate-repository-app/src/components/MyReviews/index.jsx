import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useQuery } from '@apollo/client';

import Text from "../Text";
import MyReviewItem from "./MyReviewItem"
import { GET_USER } from "../../graphql/queries";


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (
  <MyReviewItem props={item} />
);

const MyReviews = () => {
  const { data } = useQuery(GET_USER, {
    variables: { includeReviews: true }
  });

  if (!data) return <Text>Loading...</Text>

  const reviews = data.authorizedUser.reviews.edges.map(edge => edge.node)

  return(
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
}

export default MyReviews;