import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IndexPage from '../pages/Index/IndexPage';
import CollapsiblePage from '../pages/Collapsible/CollapsiblePage';
import IconsPage from '../pages/Icons/IconsPage';

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
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Collapsible"
            component={CollapsiblePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Icons"
            component={IconsPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
