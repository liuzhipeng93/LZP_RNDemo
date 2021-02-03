import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const {deviceWidth} = Dimensions.get('window');

//定义组件
class Content extends Component {
  constructor(props) {
    super(props);
  }
  show(text) {
    alert(text);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>今日要闻</Text>
        {this.props.data.map((item) => {
          return (
            <Text style={styles.content} onPress={() => this.show(item)}>
              {item}
            </Text>
          );
        })}
      </View>
    );
  }
}
//定义样式
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    color: 'red',
    marginTop: 10,
  },
  content: {
    marginTop: 10,
  },
});
//导出组件
module.exports = Content;
