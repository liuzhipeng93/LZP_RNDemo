import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>HomePage</Text>
        </View>
      </SafeAreaView>
    );
  }
}
