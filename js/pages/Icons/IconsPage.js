import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const icon = <Icon name={'up'} size={30} color="#900" />;

export default class IconsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <View>{icon}</View>
      </SafeAreaView>
    );
  }
}
