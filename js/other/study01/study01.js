/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {Dimensions} from 'react-native';

const {deviceWidth} = Dimensions.get('window');

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <View style={[styles.commonView, styles.topView]}>
                    <View style={[styles.commonItem, styles.leftItem]}>
                        <Text style={[styles.commonText]}>酒店</Text>
                    </View>
                    <View style={[styles.commonItem, styles.midItem]}>
                        <View style={[styles.commonItemInItem,styles.topItemInMidItem]}>
                            <Text style={[styles.commonText]}>海外酒店</Text>
                        </View>
                        <View style={[styles.commonItemInItem]}>
                            <Text style={[styles.commonText]}>特价酒店</Text>
                        </View>
                    </View>
                    <View style={[styles.commonItem, styles.rightItem]}>
                        <View style={[styles.commonItemInItem, styles.topItemInMidItem]}>
                            <Text style={[styles.commonText]}>团购</Text>
                        </View>
                        <View style={[styles.commonItemInItem]}>
                            <Text style={[styles.commonText]}>民宿客栈</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.midView, styles.commonView]} />
                <View style={[styles.bottomView, styles.commonView]} />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    topView: {
        backgroundColor: 'white',
        flexDirection: 'row',
        margin:5,
    },
    midView: {
        backgroundColor: 'yellow',
    },
    bottomView: {
        backgroundColor: 'blue',
    },
    commonView: {
        width: deviceWidth,
        height: 200,
    },
    leftItem: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    midItem: {},
    rightItem: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    commonItem: {
        backgroundColor: 'hotpink',
        flex: 1,
        height: 200,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    commonText: {
        textAlign: 'center',
    },
    commonItemInItem: {
        flex: 1,
        justifyContent: "center",
        width: 120,
    },
    topItemInMidItem: {
        borderBottomWidth: 2,
        borderBottomColor: "white"
    },
});

export default App;
