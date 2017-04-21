import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Platform, Text } from 'react-native';
import NewsFeed from './components/NewsFeed';
import RandomFeed from './components/RandomFeed';
import ProfileView from './components/ProfileView';
import DetailView from './components/DetailView';
import SplashScreen from './components/SplashScreen';

class TabIcon extends React.Component {
    render() {
        const { selected, title } = this.props;
        var color = selected ? '#fff' : '#777';
        return (
            <Text style={{ color, fontWeight: '500' }}>{ title }</Text>
        );
    }
}

const RouterComponent = () => {
    return (
      <Router navigationBarStyle={ styles.navBarStyle } titleStyle={ styles.navTitle }>
        <Scene key="intro" initial>
          <Scene
            key="splash"
            component={ SplashScreen }
            hideNavBar
            />
        </Scene>
        <Scene key="main">
          <Scene key="tabBar" tabs tabBarStyle={ styles.tabBarStyle }>
            <Scene
              key="tab2"
              title="Random"
              component={ RandomFeed }
              icon={ TabIcon }
              sceneStyle={ styles.sceneStyle }
              />
            <Scene
              key="tab1"
              title="News"
              component={ NewsFeed }
              icon={ TabIcon }
              sceneStyle={ styles.sceneStyle }
              />
            <Scene
              key="tab3"
              title="Soon"
              component={ ProfileView }
              icon={ TabIcon }
              sceneStyle={ styles.sceneStyle }
              />
          </Scene>
          <Scene key="detailView" title="Detail View" component={ DetailView } sceneStyle={ styles.sceneStyle } />
        </Scene>
      </Router>
    )
}

const styles = {
  sceneStyle: {
    marginTop: (Platform.OS === 'ios') ? 64 : 54
  },
  tabBarStyle: {
    backgroundColor: '#000'
  },
  navBarStyle: {
    backgroundColor: '#000'
  },
  navTitle: {
    color: '#fff'
  }
}

export default RouterComponent;
