import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Toast} from '@ant-design/react-native';

function successToast() {
  Toast.success('Load success !!!', 1);
}
function showToastNoMask() {
  Toast.info('Toast without mask !!!', 1, undefined, false);
}
function failToast() {
  Toast.fail('Load failed !!!');
}
function offline() {
  Toast.offline('Network connection failed !!!');
}
function loadingToast() {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
  });
}

export default class ToastPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={successToast}>
            <Text style={{fontSize: 18}}>successToast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={showToastNoMask}>
            <Text style={{fontSize: 18}}>showToastNoMask</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={failToast}>
            <Text style={{fontSize: 18}}>failToast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={offline}>
            <Text style={{fontSize: 18}}>offline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={loadingToast}>
            <Text style={{fontSize: 18}}>loadingToast</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
  },
});
