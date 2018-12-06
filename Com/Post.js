import React, { Component } from 'react';
// import { Container, Header,Icon, Content, List, SwipeRow,ListItem,Button, Left, Body, Right, Thumbnail, Text } from 'native-base';
// import { View, ImageBackground, TouchableOpacity } from 'react-native';
import {
  ListView, StyleSheet,
  View,
  TouchableHighlight,
  ScrollView,
  FlatList,
  Animated
} from 'react-native';
import { Avatar } from 'react-native-elements'
import { Container, Header, List, Left, Body, Right, Thumbnail, ActionSheet, Content, Button, Icon, ListItem, Text, Root } from 'native-base';
import { Actions } from 'react-native-router-flux';
import PostCards from './PostCards'


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
export default class Post extends Component {
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

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
        <ScrollView  style={styles.container}>

        {/* <View> */}
        <Text style={styles.StStyle}>Stories</Text>
        <View style={styles.ListView}>
            <View style={styles.stories}></View>
            <View style={styles.stories}></View>
            <View style={styles.stories}></View>
            <View style={styles.stories}></View>
        </View>
        <Text style={styles.StStyle}>Post`s</Text>
        <View style={styles.PosttView}>
            <PostCards/>
            <PostCards/>
            <PostCards/>
            <PostCards/>
        </View>
        {/* </View> */}
        </ScrollView>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    backgroundColor: '#242541',
    width:'100%',
    height:'100%',
  },
  ListView: {
    backgroundColor: '#242541',
    width: 300,
    height: 100,
    display: 'flex',
    color: '#fff',
    flexDirection: 'row',
    // borderStyle: 'solid',
    // borderColor: '#e8c48b',
    // borderLeftWidth: 10,
    // borderBottomWidth: 0.5,
    padding:8
  },
  PosttView: {
    // backgroundColor: '#000',
    width: '100%',
    // height: '100%',
    display: 'flex',
    color: '#fff',
    flexDirection: 'column',
    // borderStyle: 'solid',
    // borderColor: '#e8c48b',
    // borderLeftWidth: 10,
    // borderBottomWidth: 0.5,
    padding:'2%'
  },
  button: {
    padding: 8,
  },
  StStyle: {
    fontSize: 18,
    color: "#fff",
    padding:'2%',
    marginLeft:'2%'
    // marginTop: 10
    // f9b954
  },
  stories: {
    width: '35%',
    height: "100%",
    backgroundColor: '#e8c48b',
    borderRadius: 5,
    marginTop:'1%',
    marginLeft:'3%'
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