/**
 * Created by hmlk on 2019-09-18 09:27
 */
import React, { Component } from 'react'
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export default class TreePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orgTrees: [
        {
          id: '1',
          isOpen: false,
          name: '1',
          layer: 0,
          children: [
            {
              id: '1-1',
              isOpen: false,
              layer: 1,
              name: '1-1'
            },
            {
              id: '1-2',
              isOpen: false,
              layer: 1,
              name: '1-2'
            },
            {
              id: '1-3',
              isOpen: false,
              layer: 1,
              name: '1-3'
            }
          ]
        },
        {
          id: '2',
          isOpen: false,
          name: '2',
          layer: 0,
          children: [
            {
              id: '2-1',
              isOpen: false,
              name: '2-1',
              layer: 1,
              children: [
                {
                  id: '2-1-1',
                  isOpen: false,
                  name: '2-1-1',
                  layer: 2,
                  children: [
                    {
                      id: '2-1-1-1',
                      name: '2-1-1-1',
                      layer: 3,
                      children: [
                        {
                          id: '2-1-1-1-1',
                          layer: 4,
                          name: '2-1-1-1-1'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: '3',
          isOpen: false,
          layer: 0,
          name: '3'
        }
      ],
    }
  }

  onItemClick = (item) => {
    if (item.children && item.children.length > 0) {
      item.isOpen = !item.isOpen
      this.setState({ orgTrees: this.state.orgTrees })
    } else {
      // 叶子节点 处理下一步操作
      alert(item.name)
    }
  }

  renderItem = ({ item, index }, style) => {
    // console.log('==renderItem==', item)
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.onItemClick(item)}
          style={{
            height: 45,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignItems: 'center',
            ...style
          }}
        >
          <View style={{
            marginLeft: 10,
            flexDirection: 'row',
            backgroundColor: 'transparent',
            alignItems: 'center'
          }}>
            {/* <Image source={item.isOpen ? Images.button.arrowBottom : Images.button.arrowRight} style={{ height: 18, width: 18 }} /> */}
            <Text style={{
              fontSize: 16,
              color: '#4C5361',
              marginLeft: 10
            }}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        {item.isOpen && this.renderFlatList(item.children, ({ item, index }) => this.renderItem({ item, index }, { paddingLeft: 16 * item.layer }))}
      </View>)
  }

  renderFlatList = (data, renderItem) => {
    return <FlatList
      data={data}
      renderItem={renderItem}
      extraData={this.state}
    />
  }

  render() {
    const { orgTrees } = this.state
    return (
      <View style={{ flex: 1 }}>
        {
          this.renderFlatList(orgTrees, this.renderItem)
        }
      </View>
    )
  }
}