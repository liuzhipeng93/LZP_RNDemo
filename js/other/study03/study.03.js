/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';

const {deviceWidth} = Dimensions.get('window');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ['1', '2', '3', '4', '5'],
    };
  }
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item, index}) => {
            return (
              <TouchableWithoutFeedback
                onPress={this.cellBeenClicked.bind(this, index)}>
                <View style={styles.cell}>
                  <Text style={styles.text}>{item}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
    );
  }
  cellBeenClicked(index) {
    var tempArr = this.state.dataSource;
    tempArr.splice(index, 1);
    this.setState({
      dataSource: tempArr,
    });
    console.log(this.state.dataSource);
  }
}

const styles = StyleSheet.create({
  cell: {
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'yellow',
  },
});

export default App;
