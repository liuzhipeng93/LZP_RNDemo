import React from 'react';

import MyTabBar from '../../tabbar/MyTabbar';
import NavigationUtil from '../../navigation/NavigationUtil';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    NavigationUtil.navigation = this.props.navigation;
  }
  render() {
    return <MyTabBar navigation={this.props.navigation} />;
  }
}
