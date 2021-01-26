import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IndexPage from '../pages/Index/IndexPage';
import CollapsiblePage from '../pages/Collapsible/CollapsiblePage';

const Stack = createStackNavigator();

export default class MyNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={IndexPage}
            options={{
              title: '',
              headerStyle: {
                height: 0, //隐藏导航栏
              },
            }}
          />
          <Stack.Screen
            name="Collapsible"
            component={CollapsiblePage}
            options={{
              title: '',
              headerStyle: {
                height: 0, //隐藏导航栏
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
