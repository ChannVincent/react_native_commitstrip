import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';

class LoveFeed extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
        <Text>{ this.props.title }</Text>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#ccc'
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
      title: 'In construction'
    }
}

export default connect(mapStateToProps, {})(LoveFeed);
