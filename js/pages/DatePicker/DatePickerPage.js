import React from 'react';
import {SafeAreaView} from 'react-native';
import {DatePicker, List} from '@ant-design/react-native';
export default class DatePickerPage extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = (value) => {
      console.log(value);
      this.setState({value});
    };
    this.state = {
      value: undefined,
    };
  }
  render() {
    return (
      <SafeAreaView>
        <DatePicker
          value={this.state.value}
          mode="date"
          title="123"
          extra="请选择"
          defaultDate={new Date()}
          minDate={new Date(2015, 7, 6)}
          maxDate={new Date(2026, 11, 3)}
          onChange={this.onChange}
          format="YYYY-MM-DD">
          <List.Item>Select Date</List.Item>
        </DatePicker>
      </SafeAreaView>
    );
  }
}
