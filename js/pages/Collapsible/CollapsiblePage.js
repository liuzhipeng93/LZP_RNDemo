import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

export default class CollapsiblePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>CollapsiblePage</Text>
        </View>
      </SafeAreaView>
    );
  }
}
