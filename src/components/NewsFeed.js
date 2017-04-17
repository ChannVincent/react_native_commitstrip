import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { navigateToPOIView, feedFetchPending } from '../actions';

class NewsFeed extends Component {

  componentWillMount() {
    this.props.feedFetchPending('https://api.morph.io/meandu229/CommitStrip/data.json?key=UUnt5d5dME%2BWtf2nnKyS&query=select%20*%20from%20%27data%27%20limit%2010000');
  }

  onRowPress() {
    this.props.navigateToPOIView({ title: 'title sent from list' });
  }

  render() {
    return (
      <View style={ styles.containerStyle }>
        <TouchableOpacity onPress={ this.onRowPress.bind(this) }>
          <Text>{ this.props.title }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#abc'
  }
}

const mapStateToProps = (state, ownProps) => {
  const { pending, newsList } = state.feed;
  console.log(newsList);
  return {
    pending,
    newsList
  }
}

export default connect(mapStateToProps, { navigateToPOIView, feedFetchPending })(NewsFeed);
