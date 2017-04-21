import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

class SplashScreen extends Component {

  startMain() {
    Actions.main();
  }

  componentWillMount() {
    setTimeout(
      this.startMain,
      1500
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={ this.startMain }>
        <View style={ styles.containerStyle }>
          <Image
            resizeMode='cover'
            style={ styles.imageStyle }
            source={ require('../../assets/launch_image.jpg') }
            />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#000'
  },
  imageStyle: {
    flex: 1,
    right: 0,
    left: 0,
    bottom: 0
  }
}

export default SplashScreen;
