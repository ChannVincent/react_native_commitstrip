import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';

class DetailView extends Component {
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
    backgroundColor: '#aab'
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
