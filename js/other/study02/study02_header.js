import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

const {deviceWidth} = Dimensions.get('window');

//定义组件
class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text,styles.textLeft]}>网易</Text>
        <Text style={[styles.text,styles.textMid]}>新闻</Text>
        <Text style={[styles.text]}>有态度</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 40,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        borderBottomWidth: .5,
        borderBottomColor: 'red',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textLeft: {
        color: 'red',
    },
    textMid: {
        color: 'white',
        backgroundColor: 'red',
    },
});

//导入模块
module.exports = Header;
