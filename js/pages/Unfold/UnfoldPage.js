import React from 'react';
import {SafeAreaView, View, Text, TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

export default class UnfoldPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isUnfold: false,
    };

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    let tempIsUnfold = !this.state.isUnfold;
    this.setState({
      isUnfold: tempIsUnfold,
    });
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
          <Text>4</Text>
          <Text>5</Text>
          {this.state.isUnfold ? (
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text>6</Text>
              <Text>7</Text>
              <Text>8</Text>
              <Text>9</Text>
              <Text>10</Text>
              <TouchableWithoutFeedback onPress={this.buttonClicked}>
                <Icon name={'chevrons-up'} size={20} color="#A4A4A4" />
              </TouchableWithoutFeedback>
            </View>
          ) : (
            <TouchableWithoutFeedback onPress={this.buttonClicked}>
              <Icon name={'chevrons-down'} size={20} color="#A4A4A4" />
            </TouchableWithoutFeedback>
          )}
        </View>
      </SafeAreaView>
    );
  }
}
