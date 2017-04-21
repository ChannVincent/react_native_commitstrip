import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';

class ProfileView extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
        <Text style={ styles.textStyle }>{ this.props.title }</Text>
        <Text style={ styles.copyrightTitleStyle }>
          CopyRight
        </Text>
        <Text style={ styles.copyrightStyle }>
          This app is not affiliated with CommitStrip in any way. All rights stay with their respective owners.
        </Text>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex:1,
    backgroundColor: '#ccc'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 50,
    paddingLeft: 30
  },
  copyrightTitleStyle: {
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 50,
    paddingLeft: 50
  },
  copyrightStyle: {
    fontSize: 15,
    fontWeight: '400',
    paddingTop: 10,
    paddingLeft: 50
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Coming soon ...'
  }
}

export default connect(mapStateToProps, {})(ProfileView);
