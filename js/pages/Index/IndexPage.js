import React from 'react';

import MyTabBar from '../../tabbar/MyTabbar';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <MyTabBar navigation={this.props.navigation} />;
  }
}
