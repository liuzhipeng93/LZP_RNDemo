import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

const FUNCTION_LIST = [
  {
    id: 0,
    title: 'Collapsible(手风琴、折叠抽屉)',
  },
];

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.cellBeenClicked = this.cellBeenClicked.bind(this);
  }

  cellBeenClicked(index) {
    switch (index) {
      case 0:
        {
          this.props.navigation.navigate('Collapsible');
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
