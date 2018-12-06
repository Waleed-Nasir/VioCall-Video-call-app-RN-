import React, { Component } from 'react';
// import { Container, Header,Icon, Content, List, SwipeRow,ListItem,Button, Left, Body, Right, Thumbnail, Text } from 'native-base';
// import { View, ImageBackground, TouchableOpacity } from 'react-native';
import {
  ListView, StyleSheet,
  View,
  TouchableHighlight,
  Animated
} from 'react-native';
import { Avatar } from 'react-native-elements'
import { Container, Header, List, Left, Body, Right, Thumbnail, ActionSheet, Content, Button, Icon, ListItem, Text, Root } from 'native-base';
import { Actions } from 'react-native-router-flux';



var isHidden = true;
const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];
var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  // { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  // { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  // { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  // { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class ContactListView extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
      bounceValue: new Animated.Value(100),  //This is the initial position of the subview
      buttonText: "Show Subview"
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  _toggleSubview() {
    this.setState({
      buttonText: !isHidden ? "Show Subview" : "Hide Subview"
    });

    var toValue = 0.1;

    if (isHidden) {
      toValue = 0;
    }

    //This will animate the transalteY of the subview between 0 & 100 depending on its current state
    //100 comes from the style below, which is the height of the subview.
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: toValue,
        velocity: 0,
        tension: 2,
        friction: 3,
      }
    ).start();

    isHidden = !isHidden;
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
        <Container style={styles.container} >
        <Content style={styles.container} >
          <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <View style={styles.ListView}>
                <Avatar
                  size="large"
                  // source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                  title="MT"
                  overlayContainerStyle={{ backgroundColor: '#e8c48b' }}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                  containerStyle={{ width: '18%', height: '90%', color: '#000', margin: '2%' }}
                />
                <View style={styles.mid}>
                  <Text> happy</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>

                </View>
                <View style={styles.end}>
                  <Text note>23:12</Text>
                </View>
              </View>

            }
            renderLeftHiddenRow={data =>
              <Button full success onPress={_ => this._toggleSubview()}>
                <Icon active name="trash" />
                {/* <Text note>{this.state.buttonText}</Text> */}
              </Button>

            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
                {/* <Text note>Remove</Text> */}
              </Button>
            }
          />
        </Content>
        {!isHidden ?
          <Animated.View
            style={[styles.subView,
            { transform: [{ translateY: this.state.bounceValue }] }]}>
            <View style={{ flexDirection: 'row' }}>
              <Button rounded danger style={{ marginTop: '5%', marginRight: '10%' }} onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>
              <View style={styles.inner}>

              </View>
              <Button onPress={()=>Actions.Camera()} rounded success style={{ marginTop: '5%', marginLeft: '10%' }} >
                <Icon active name="trash" />
              </Button>

            </View>
            <Text style={styles.buttonText}>This is a sub view</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button block dark onPress={()=>Actions.Post()}>
                <Text>Followe</Text>
              </Button>
              <Text>________</Text>
              <Button block success>
                <Text>  Profile  </Text>
              </Button>

            </View>
          </Animated.View>
          : null}
      </Container>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    backgroundColor: '#242541',
    // width:'100%',
    // height:80,
  },
  ListView: {
    backgroundColor: '#242541',
    width: '100%',
    height: 70,
    display: 'flex',
    color: '#fff',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: '#e8c48b',
    // borderLeftWidth: 10,
    borderBottomWidth: 0.5,
  },

  button: {
    padding: 8,
  },
  buttonText: {
    fontSize: 17,
    color: "#fff",
    marginTop: 10
  },
  inner: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 100,
    // marginTop:!isHidden?10:'100%',
  },
  subView: {
    flex: 1,
    height: "40%",
    width: '100%',
    backgroundColor: '#242541',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginTop: '60%',
    display: 'flex',
    borderStyle: 'solid',
    borderColor: 'green',
    // borderLeftWidth: 10,
    borderTopWidth: 2,
  },
  subHide: {
    flex: 0,
    height: 0,
    width: '100%',
    backgroundColor: '#242541',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    display: 'none'
  },
  mid:{
    width:'60%',
    color:'#fff'
  },
  end:{
    width:'20%',
    color:'#fff'
  }

});