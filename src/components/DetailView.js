import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';
import Image from 'react-native-transformable-image';

class DetailView extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
          <Text>{ this.props.title }</Text>
          <Image
            style={ styles.imageStyle }
            source={{ uri: urlImage, cache: 'force-cache' }}
            />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#aab'
  },
  imageStyle: {
    flex: 1,
    width: 300,
    resizeMode: 'contain'
  }
}

DetailView.propTypes = {
  title: React.PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
    const { title } = state.navigation;
    return {
      title
    }
}

export default connect(mapStateToProps, {})(DetailView);
