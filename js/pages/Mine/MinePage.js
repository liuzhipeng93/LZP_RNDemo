import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import EventBus from 'react-native-event-bus';

export default class MinePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'MinePage',
    };
  }

  componentDidMount() {
    EventBus.getInstance().addListener(
      'EventBusTest',
      (this.listener = ({content}) => {
        // handle the event
        this.setState({
          content: content,
        });
      }),
    );
  }

  componentWillUnmount() {
    EventBus.getInstance().removeListener(this.listener);
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>{this.state.content}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
