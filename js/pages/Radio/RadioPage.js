import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {List, Radio} from '@ant-design/react-native';

const RadioItem = Radio.RadioItem;

export default class RadioPage extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      part2Value: 1,
    };
  }
  render() {
    return (
      <SafeAreaView>
        <List>
          <Text style={{marginTop: 12}}>
            Form radio, radio in general list.
          </Text>
          <RadioItem
            checked={this.state.part2Value === 1}
            onChange={(event) => {
              if (event.target.checked) {
                this.setState({part2Value: 1});
              }
            }}>
            Use Ant Desgin Component
          </RadioItem>
          <RadioItem
            checked={this.state.part2Value === 2}
            onChange={(event) => {
              if (event.target.checked) {
                this.setState({part2Value: 2});
              }
            }}>
            Use Ant Desgin Component
          </RadioItem>
          <RadioItem disabled>Set disabled</RadioItem>
          <RadioItem disabled checked>
            Set disabled
          </RadioItem>
        </List>
      </SafeAreaView>
    );
  }
}
