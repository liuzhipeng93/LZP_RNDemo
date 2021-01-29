import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

export default class MinePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>MinePage</Text>
        </View>
      </SafeAreaView>
    );
  }
}
