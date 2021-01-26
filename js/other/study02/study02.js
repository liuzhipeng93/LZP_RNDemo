/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar, Dimensions} from 'react-native';

const Header = require('./study02/study02_header');
const Content = require('./study02/study02_content');

const {deviceWidth} = Dimensions.get('window');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data:['1.快速了解微信小程序的使用，一个根据小程序的框架开发的app。',
                '2.移动开发关于视频直播技术，你想要知道的都在这里了。',
                '3.谈谈CSS的一些有趣的事情',
                '4.将React Native整合进iOS项目超详细图文教程'],
        };
    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    {/*header*/}
                    <Header></Header>
                    {/*content*/}
                    <Content data={this.state.data}></Content>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 500,
        backgroundColor: 'yellow',
    },
});

export default App;
