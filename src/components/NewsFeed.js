import React, { Component } from 'react';
import { ListView, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { navigateToPOIView, feedFetchPending } from '../actions';
import CellItem from './CellItem';
import { Spinner } from './common';

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
        <CellItem
          title={ news.text }
          urlImage={ news.url }
          onPress={ () => { console.log('click') } }
          />
      </View>
    );
  }

  onRowPress() {
    this.props.navigateToPOIView({ title: 'title sent from list' });
  }

  renderListView() {
    if (this.props.pending) {
      return (
        <Spinner />
      )
    }
    else if (this.props.newsList.length > 0) {
      return (
        <ListView
          enableEmptySections
          dataSource={ this.dataSource }
          renderRow={ this.renderRow }
          />
      )
    }
    else {
      return (
        <Text>Vérifiez votre connexion internet</Text>
      )
    }
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
  const { pending, newsList } = state.feed;
  console.log(newsList);
  return {
    pending,
    newsList
  }
}

export default connect(mapStateToProps, { navigateToPOIView, feedFetchPending })(NewsFeed);
