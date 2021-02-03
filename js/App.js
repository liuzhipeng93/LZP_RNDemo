/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MyNavigation from './navigation/MyNavigation';
// import {Provider} from '@ant-design/react-native';

const App: () => React$Node = () => {
  return (
    // <Provider>
      <MyNavigation />
    // </Provider>
  );
};

export default App;
