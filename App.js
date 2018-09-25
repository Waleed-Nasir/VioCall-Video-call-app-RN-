import React, { Component } from 'react';
// import { Container, Header,Icon, Content, List, SwipeRow,ListItem,Button, Left, Body, Right, Thumbnail, Text } from 'native-base';

// import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { ListView ,  StyleSheet,
  View,
  TouchableHighlight,
  Animated} from 'react-native';
import { Container, Header, List, Left, Body, Right, Thumbnail,  ActionSheet,   Content, Button, Icon, ListItem, Text, Root } from 'native-base';



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
export default class App extends Component {
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

    if(isHidden) {
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
              <ListItem avatar   onPress={_ =>  this._toggleSubview()}>
              <View style={styles.container}>
              
              </View>
              <Body style={styles.container}>
                <Text> {data}</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right style={styles.container}>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

              }
            renderLeftHiddenRow={data =>
              <Button full danger onPress={_ =>  this._toggleSubview()}>
              <Icon active name="trash" />
              <Text note>{this.state.buttonText}</Text>
            </Button>

            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
                <Text note>Remove</Text>
              </Button>
              }
          />
        </Content>
          <Animated.View
            style={[ isHidden?styles.subView:styles.subHide,
              {transform: [{translateY: this.state.bounceValue}]}]}
          >
          <View style={{flexDirection:'row'}}>
          <Button rounded danger style={{marginTop:'5%',marginRight:'10%'}} onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>
          <View style={styles.inner}>

          </View>
          <Button rounded success style={{marginTop:'5%',marginLeft:'10%'}} onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>

          </View>
            <Text style={styles.buttonText}>This is a sub view</Text>
            <Text note>Followe</Text>
          </Animated.View>
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
  button: {
    padding: 8,
  },
  buttonText: {
    fontSize: 17,
    color: "#fff",
    marginTop:10
  },
  inner:{
      width:80,
    height:80,
    backgroundColor: '#fff', 
    borderRadius: 100,
  },
  subView: {
    flex: 1,
    height: 100,
    width: '100%', 
    backgroundColor: '#242541', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginTop:'60%'
  },
  subHide: {
    flex: 1,
    height: 200,
    width: '100%', 
    backgroundColor: '#242541', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
});