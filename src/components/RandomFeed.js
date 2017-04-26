import React, { Component } from 'react';
import { ListView, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { navigateToPOIView, feedFetchRandomPending } from '../actions';
import CellItem from './CellItem';
import { Spinner, Button, Card } from './common';

class RandomFeed extends Component {
  componentWillMount() {
    this.props.feedFetchRandomPending('https://api.morph.io/meandu229/CommitStrip/data.json?key=UUnt5d5dME%2BWtf2nnKyS&query=select%20*%20from%20%27data%27%20limit%201000');
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  renderRow(news) {
    return (
      <View>
        <CellItem
          title={ news.text }
          urlImage={ news.url }
          onPress={ () => { this.onRowPress({ title: news.text, urlImage: news.url }) } }
          />
      </View>
    );
  }

  onRowPress({ title, urlImage }) {
    this.props.navigateToPOIView({ title, urlImage });
  }

  renderListView() {
    if (this.props.pending) {
      return (
        <Spinner />
      )
    }
    else if (this.props.randomList.length > 0) {
      return (
        <ListView
          enableEmptySections
          dataSource={ this.dataSource }
          renderRow={ this.renderRow.bind(this) }
          />
      )
    }
    else {
      return (
        <Card>
          <Button onPress={ () => { this.props.feedFetchRandomPending('https://api.morph.io/meandu229/CommitStrip/data.json?key=UUnt5d5dME%2BWtf2nnKyS&query=select%20*%20from%20%27data%27%20limit%201000') } }>
            Reload
          </Button>
        </Card>
      )
    }
  }

  createDataSource({ randomList }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.dataSource = ds.cloneWithRows(randomList);
  }

  render() {
    return (
      <View style={ styles.containerStyle }>
        { this.renderListView() }
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
  const { pendingRandom, randomList } = state.feed;
  console.log(randomList);
  return {
    pending: pendingRandom,
    randomList
  }
}

export default connect(mapStateToProps, { navigateToPOIView, feedFetchRandomPending })(RandomFeed);
