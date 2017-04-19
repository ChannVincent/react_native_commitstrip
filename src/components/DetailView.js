import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';
import Image from 'react-native-transformable-image';
import { Actions } from 'react-native-router-flux';

class DetailView extends Component {

  componentWillMount() {
    Actions.refresh({title: this.props.title })
  }

  render() {
    return (
      <View style={ styles.containerStyle }>
        <Image
          style={ styles.imageStyle }
          source={{ uri: this.props.urlImage }}
          />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#ccc'
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
