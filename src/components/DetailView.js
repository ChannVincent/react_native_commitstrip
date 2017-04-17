import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';
import FitImage from 'react-native-fit-image';

class DetailView extends Component {
  render() {
    return (
      <View style={ styles.containerStyle }>
          <Text>{ this.props.title }</Text>
            <FitImage
              indicator
              indicatorColor="black"
              indicatorSize="large"
              source={{ uri: 'http://www.commitstrip.com/wp-content/uploads/2016/03/Strip-Reflexion-de-codeur-4-650-finalenglish.jpg' }}
          />
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
