/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Dimensions, View} from 'react-native';
import Header from './study04_header';
import Body from './study04_body';

import MyTabBar from './tabbar/tabbar';

import CryptoJS from 'react-native-crypto-js';

const deviceWidth = Dimensions.get('window').width;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  getDataSource() {
    return [
      {
        title: '茄子',
        img:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=995991226,1118330180&fm=26&gp=0.jpg',
      },
      {
        title: '香蕉',
        img:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa2.att.hudong.com%2F31%2F20%2F14300000876508129939200008520.jpg&refer=http%3A%2F%2Fa2.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613026743&t=0c161cdb574264d5595867ac97231660',
      },
      {
        title: '苹果',
        img:
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1621431005,1388131397&fm=26&gp=0.jpg',
      },
      {
        title: '芹菜',
        img:
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1104263532,435991775&fm=26&gp=0.jpg',
      },
      {
        title: '蒜薹',
        img:
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4010379145,1750477414&fm=26&gp=0.jpg',
      },
      {
        title: '橙子',
        img:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20191228ac%2F263%2Fw1080h783%2F20191228%2F6c36-imkzenp2208450.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613026856&t=a2349867a4dad356bce1d17f6bd028ed',
      },
      {
        title: '葡萄',
        img:
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1826653433,3881143338&fm=26&gp=0.jpg',
      },
      {
        title: '草莓',
        img:
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3555731326,364145845&fm=26&gp=0.jpg',
      },
      {
        title: '土豆',
        img:
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=196173889,1466710425&fm=26&gp=0.jpg',
      },
    ];
  }
  render() {
    return (
      <SafeAreaView style={[styles.safeArea]}>
        <Header />
        <Body data={this.state.dataSource} navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
  componentDidMount() {
    let tempArr = this.getDataSource();
    this.setState({
      dataSource: tempArr,
    });

    // Encrypt
    let ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
    console.log(ciphertext); // 'my message'

// Decrypt
    let bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    let originalText = bytes.toString(CryptoJS.enc.Utf8);

    console.log(originalText); // 'my message'
  }
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'lightcyan',
    flex: 1,
  },
});

module.exports = Home;
