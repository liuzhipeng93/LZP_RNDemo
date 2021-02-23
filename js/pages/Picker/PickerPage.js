import React from 'react';
import {SafeAreaView} from 'react-native';
import {List, Picker} from '@ant-design/react-native';

const data = require('./data.json');

export default class PopupExample extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = (value) => {
      this.setState({value});
      console.log(value);
    };
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
    };
  }
  render() {
    return (
      <SafeAreaView>
        <List>
          <Picker
            data={data}
            cols={3}
            value={this.state.value}
            onChange={this.onChange}>
            <List.Item arrow="horizontal" onPress={this.onPress}>
              省市选择
            </List.Item>
          </Picker>
          <Picker
            data={this.state.data}
            cols={2}
            value={this.state.value}
            onChange={this.onChange}>
            <List.Item arrow="horizontal" onPress={this.onPress}>
              省市选择(异步加载)
            </List.Item>
          </Picker>
        </List>
      </SafeAreaView>
    );
  }
}
