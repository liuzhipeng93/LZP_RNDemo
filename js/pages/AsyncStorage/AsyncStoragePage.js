import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default class AsyncStoragePage extends React.Component {
  constructor(props) {
    super(props);

    //SAVE
    AsyncStorage.setItem('name', '刘志鹏', (error) => {
      if (error) {
        console.log('存储====' + '存储失败');
      } else {
        console.log('存储====' + '存储成功');
      }
    });
    //READ
    AsyncStorage.getItem('name', (error, result) => {
      if (error) {
        console.log('获取====' + '读取失败');
      } else {
        console.log('获取====' + result);
      }
    });
    //DELETE
    AsyncStorage.removeItem('name', (error) => {
      if (error) {
        console.log('删除====' + '删除失败');
      } else {
        console.log('删除====' + '删除成功');
      }
    });
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>AsyncStorage</Text>
        </View>
      </SafeAreaView>
    );
  }
}
