import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';
import { CardSection, Card, Spinner, Button } from './common';
import Image from 'react-native-transformable-image';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');

class DetailView extends Component {

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
              pixels={{ width: width * 1.5, height: height * 1.4 }}
              source={{ uri: urlImage, cache: 'force-cache' }}
              />
          );
      }
  }

  componentWillMount() {
    Actions.refresh({title: this.props.title })
  }

  render() {
    const { imageStyle, urlImage } = this.props;
    return (
      <View style={ styles.containerStyle }>
        { this.renderLoader() }
        { this.renderImage(urlImage) }
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#ccc',
    overflow: 'hidden'
  },
  imageStyle: {
    flex: 1,
    right: 0,
    left: 0,
    bottom: 0
  }
}

DetailView.propTypes = {
  title: React.PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
    const { title, urlImage } = state.navigation;
    return {
      title,
      urlImage
    }
}

export default connect(mapStateToProps, {})(DetailView);
