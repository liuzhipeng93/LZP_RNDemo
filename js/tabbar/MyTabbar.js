import React from 'react';
import {Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import HomePage from '../pages/Home/HomePage';
import MinePage from '../pages/Mine/MinePage';

const homeIcon = require('../../resources/images/home.png');
const mineIcon = require('../../resources/images/mine.png');

export default class MyTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          renderIcon={() => <Image source={homeIcon} />}
          renderSelectedIcon={() => <Image source={homeIcon} />}
          badgeText="1"
          onPress={() => this.setState({selectedTab: 'home'})}>
          {<HomePage navigation={this.props.navigation} />}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'mine'}
          title="我的"
          renderIcon={() => <Image source={mineIcon} />}
          renderSelectedIcon={() => <Image source={mineIcon} />}
          onPress={() => this.setState({selectedTab: 'mine'})}>
          {<MinePage navigation={this.props.navigation} />}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
