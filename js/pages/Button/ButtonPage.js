import React from 'react';
import {Button, WhiteSpace, WingBlank} from '@ant-design/react-native';
import {SafeAreaView} from 'react-native';

export default class ButtonPage extends React.Component {
  clickEvent() {
    console.log('clickEvent');
  }
  render() {
    return (
      <SafeAreaView>
        <WingBlank>
          <WhiteSpace />
          <Button onPress={this.clickEvent}>default</Button>
          <WhiteSpace />
          <Button disabled>default disabled</Button>
          <WhiteSpace />

          <Button type="primary">primary</Button>
          <WhiteSpace />
          <Button type="primary" disabled>
            primary disabled
          </Button>
          <WhiteSpace />

          <Button type="warning">warning</Button>
          <WhiteSpace />
          <Button type="warning" disabled>
            warning disabled
          </Button>
          <WhiteSpace />

          <Button loading>loading button</Button>
          <WhiteSpace />
          <Button activeStyle={false}>无点击反馈</Button>
          <WhiteSpace />
          <Button activeStyle={{backgroundColor: 'red'}}>
            custom feedback style
          </Button>
          <WhiteSpace />

          <WingBlank
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Button type="ghost">ghost</Button>
            <Button type="ghost" disabled>
              ghost disabled
            </Button>
            <Button type="ghost" size="small">
              ghost
            </Button>
          </WingBlank>
        </WingBlank>
      </SafeAreaView>
    );
  }
}
