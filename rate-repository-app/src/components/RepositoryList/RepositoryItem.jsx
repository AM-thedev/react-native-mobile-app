import React from 'react';
import { StyleSheet, View, Image, Button, Pressable } from 'react-native';
import { useHistory } from 'react-router';
import * as Linking from 'expo-linking';

import Text from '../Text';


const cardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 8,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
    flexShrink: 1
  },
});

const CardBody = ({ avatar, name, description, language }) => {
  return (
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
        <Image style={cardHeaderStyles.avatar}
          source={{uri: avatar}}
          testID="itemAvatar" />
      </View>
      <View style={cardHeaderStyles.infoContainer}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          testID="itemName"
          >{name}</Text>
        <Text
          color="textSecondary"
          fontSize="subheading"
          testID="itemDescription"
          >{description}</Text>
        <Text
          color="textTab"
          fontSize="subheading"
          backgroundColor="primary"
          testID="itemLanguage"
          >{language}</Text>
      </View>
    </View>
  );
};

const cardFooterItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center'
  },
});

const intToKilo = ( number ) => {
  const float = parseFloat(number);
  if (float < 1000) return  `${float}`;
  else {
    return `${Math.round((float / 1000) * 10) / 10}k`;
  }
};

const CardFooterItem = ({ name, item }) => {
  return (
    <View style={cardFooterItemStyles.container}>
      <Text fontWeight="bold" testID="itemFooterValue">{intToKilo(item)}</Text>
      <Text color="textSecondary" testID="itemFooterName">{name}</Text>
    </View>
  );
};

const cardFooterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
  }
});

const CardFooter = ({ stars, forks, reviews, rating }) => {
  return (
    <View style={cardFooterStyles.container}>
      <CardFooterItem name="Stars" item={stars} />
      <CardFooterItem name="Forks" item={forks} />
      <CardFooterItem name="Reviews" item={reviews} />
      <CardFooterItem name="Rating" item={rating} />
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: 'white',
    padding: 10,
  }
});

const RepositoryItem = ({ props, link }) => {
  const history = useHistory();

  const onItemPress = () => {
    history.push(`/${props.id}`)
  };

  const onButtonPress = () => {
    Linking.openURL(props.url);
  };

  return (
    <Pressable
      style={cardStyles.container}
      onPress={() => onItemPress()}
    >
      <CardBody
        avatar={props.ownerAvatarUrl}
        name={props.fullName}
        description={props.description}
        language={props.language}
      />
      <CardFooter
        stars={props.stargazersCount}
        forks={props.forksCount}
        reviews={props.reviewCount}
        rating={props.ratingAverage}
      />
      {
        link
        ? <Button
            title="Open in Github"
            onPress={() => onButtonPress()}
          />
        : null
      }
    </Pressable>
  );
};

export default RepositoryItem;