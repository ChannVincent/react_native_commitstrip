import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';

class ProfileView extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
        <Text style={ styles.textStyle }>{ this.props.title }</Text>
        <Image
          style={ styles.imageStyle }
          source={{ uri: "http://i.imgur.com/Rhpui1g.gif"}}
          />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex:1,
    backgroundColor: '#ccc'
  },
  imageStyle: {
    flex: 1,
    height: 200,
    resizeMode: 'contain'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 50,
    paddingLeft: 30
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Coming soon ...'
  }
}

export default connect(mapStateToProps, {})(ProfileView);
