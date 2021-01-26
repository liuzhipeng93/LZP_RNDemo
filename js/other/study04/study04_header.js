import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

const {deviceWidth, deviceHeight} = Dimensions.get('window');

const bannerImageUrl =
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2722869058,3180804441&fm=26&gp=0.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerInputValue: '',
    };
  }
  handlePassword = (text) => {
    this.setState({bannerInputValue: text});
  };
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bannerImage} source={{uri: bannerImageUrl}} />
        <TextInput
          style={[styles.bannerInput]}
          placeholder={'请 输 入 搜 索 项'}
          onChangeText={this.handlePassword}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: deviceWidth,
    height: 220,
  },
  bannerImage: {
    width: deviceWidth,
    height: 220,
  },
  bannerInput: {
    height: 40,
    backgroundColor: 'white',
    position: 'absolute',
    top: 150,
    left: 20,
    right: 20,
    borderBottomWidth: 0.5,
    borderColor: 'lightcoral',
    borderRadius: 5,
    paddingLeft: 10,
  },
});

module.exports = Header;
