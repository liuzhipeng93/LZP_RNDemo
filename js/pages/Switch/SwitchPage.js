import React from 'react';
import {SafeAreaView} from 'react-native';
import {List, Switch} from '@ant-design/react-native';

export default class SwitchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.onSwitchChange = (value) => {
      this.setState({
        checked: value,
      });
    };
  }

  render() {
    return (
      <SafeAreaView>
        <List style={{marginTop: 20}}>
          <List.Item
            extra={
              <Switch
                checked={this.state.checked}
                onChange={this.onSwitchChange}
                style={{width: 80}}
              />
            }>
            onChange event, switch status:{' '}
            {this.state.checked ? 'open' : 'close'}
          </List.Item>
        </List>
      </SafeAreaView>
    );
  }
}
