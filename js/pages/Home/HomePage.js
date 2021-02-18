import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  AppState,
} from 'react-native';

import NavigationUtil from '../../navigation/NavigationUtil';
import EventBus from 'react-native-event-bus';

const FUNCTION_LIST = [
  {
    id: 0,
    title: 'Collapsible(手风琴、折叠抽屉)',
  },
  {
    id: 1,
    title: 'Icons(各种图标)',
  },
  {
    id: 2,
    title: 'AsyncStorage(本地存储)',
  },
  {
    id: 3,
    title: 'Unfold(展开收起功能)',
  },
  {
    id: 4,
    title: 'event-bus(通知)',
  },
];

export default class HomePage extends React.Component {
  state = {appState: AppState.currentState};

  constructor(props) {
    super(props);

    this.cellBeenClicked = this.cellBeenClicked.bind(this);
  }

  cellBeenClicked(index) {
    switch (index) {
      case 0:
        {
          NavigationUtil.goPage(null, 'Collapsible');
        }
        break;
      case 1:
        {
          NavigationUtil.goPage(null, 'Icons');
        }
        break;
      case 2:
        {
          NavigationUtil.goPage(null, 'AsyncStorage');
        }
        break;
      case 3:
        {
          NavigationUtil.goPage(null, 'Unfold');
        }
        break;
      case 4:
        {
          EventBus.getInstance().fireEvent('EventBusTest', {
            content: 'EventBusTestContent',
          });
        }
        break;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={FUNCTION_LIST}
          renderItem={({item}) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => this.cellBeenClicked(item.id)}>
                <View style={styles.cell}>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'blue',
    flex: 1,
  },
  cell: {
    height: 60,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  text: {
    // backgroundColor: 'yellow',
    textAlign: 'center',
    fontSize: 20,
  },
});
