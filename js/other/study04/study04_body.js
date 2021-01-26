import React from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const itemWidth = (deviceWidth - 40) / 3;

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.itemBeenClick = this.itemBeenClick.bind(this);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contentView}>
          {this.props.data.map((item) => {
            return (
              <TouchableWithoutFeedback onPress={this.itemBeenClick} key={item.title}>
                <View style={[styles.item]}>
                  <Image
                    style={[
                      styles.image,
                      {width: itemWidth, height: itemWidth},
                    ]}
                    source={{uri: item.img}}
                  />
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </ScrollView>
    );
  }
  itemBeenClick() {
    this.props.navigation.navigate('Mine');
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightcyan',
    flex: 1,
    marginBottom: 10,
  },
  contentView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: 'lightcyan',
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    borderRadius: 7,
  },
  text: {
    marginTop: 7,
    textAlign: 'center',
  },
});

module.exports = Body;
