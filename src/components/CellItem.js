import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { CardSection, Card, Spinner, Button } from './common';

class ListItem extends Component {

  state = {
    imageLoaded: 'pending'
  }

  renderLoader() {
    console.log(this.state.imageLoaded);
    switch (this.state.imageLoaded) {
      case 'pending':
        return (
          <Spinner style={ styles.imageContainerStyle } />
        );

      case 'error':
        return (
          <Button onPress={ () => { this.setState({ imageLoaded: 'pending' }) } }>
            Reload
          </Button>
        );

      case 'success':
        return (
          null
        );

      default:
        return null;
    }
  }

  renderImage(urlImage) {
      switch (this.state.imageLoaded) {
        case 'error':
          return null;

        default:
          return (
            <Image
              onError={ () => { this.setState({ imageLoaded: 'error' }) } }
              onLoad={ () => { this.setState({ imageLoaded: 'success' }) } }
              style={ styles.imageStyle }
              source={{ uri: urlImage, cache: 'force-cache' }}
              />
          );
      }
  }

  render() {
    const { onPress, title, urlImage } = this.props;
    return (
      <TouchableWithoutFeedback onPress={ onPress }>
        <Card>
          <CardSection>
            <Text style={ styles.titleStyle }>{ title }</Text>
          </CardSection>
          <CardSection>
            <View style={ styles.imageContainerStyle }>
              { this.renderLoader() }
              { this.renderImage(urlImage) }
            </View>
          </CardSection>
        </Card>
      </TouchableWithoutFeedback>
    )
  }
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
    resizeMode: 'contain'
  },
  imageContainerStyle: {
    flex: 1,
    height: 250
  }
}

export default ListItem;
