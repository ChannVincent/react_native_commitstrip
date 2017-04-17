import React, { Component } from 'react';
import { ListView, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { navigateToPOIView, feedFetchPending } from '../actions';

class NewsFeed extends Component {

  componentWillMount() {
    this.props.feedFetchPending('https://api.morph.io/meandu229/CommitStrip/data.json?key=UUnt5d5dME%2BWtf2nnKyS&query=select%20*%20from%20%27data%27%20limit%201000');
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  renderRow(news) {
    return (
      <View>
        <Text>{ news.text }</Text>
        <Image
          style={ styles.imageStyle }
          source={{ uri: news.url }}
          />
      </View>
    );
  }

  onRowPress() {
    this.props.navigateToPOIView({ title: 'title sent from list' });
  }

  createDataSource({ newsList }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.dataSource = ds.cloneWithRows(newsList);
  }

  render() {
    return (
      <View style={ styles.containerStyle }>
        <ListView
          enableEmptySections
          dataSource={ this.dataSource }
          renderRow={ this.renderRow }
          />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  imageStyle: {
    flex: 1,
    height: 250,
    justifyContent: 'flex-end',
    resizeMode: 'cover'
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
