/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import MyNavigation from './navigation/MyNavigation';
import {AppState} from 'react-native';
import {Provider} from '@ant-design/react-native';

export default class App extends Component {
  state = {appState: AppState.currentState};

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      // console.log('App has come to the foreground!');
    }
    this.setState({appState: nextAppState});
    // console.log('nextAppState-----', nextAppState);
  };

  constructor(props) {
    super(props);
    const currentState = AppState.currentState;
    // console.log('currentState-----', currentState);
  }

  render() {
    return (
      <Provider>
        <MyNavigation />
      </Provider>
    );
  }
}
