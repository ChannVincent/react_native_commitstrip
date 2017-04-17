import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { CardSection, Card } from './common';

const ListItem = ({ onPress, title, urlImage }) => {

    return (
      <TouchableWithoutFeedback onPress={ onPress }>
        <Card>
          <CardSection>
            <Text style={ styles.titleStyle }>{ title }</Text>
          </CardSection>
          <CardSection>
            <Image
              style={ styles.imageStyle }
              source={{ uri: urlImage }}
              />
          </CardSection>
        </Card>
      </TouchableWithoutFeedback>
    )

}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  imageStyle: {
    flex: 1,
    height: 250,
    justifyContent: 'flex-end',
    resizeMode: 'cover'
  }
}

export default ListItem;
