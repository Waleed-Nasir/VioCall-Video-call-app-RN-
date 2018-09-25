/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Actions,ActionConst} from"react-native-router-flux"
import { Container, Header, Content, Item, Input, Icon } from "native-base";
import Ring from './Sytles/Ring'
// Within your render function

export default class ogin extends Component {
  render() {
    console.log(this.props)
    return (
      <LinearGradient
        // start={{x: 1, y: 0}}
        // end={{x: 0, y: 0.0}}
        // locations={[0.1,1]}
        // colors={['#CBC9CF', '#67666A']}
        // start={{x: 1, y: 0}}
        // end={{x: 0, y: 0}}
        // locations={[0.1,0.9]}
        // colors={['#67666A','#393945']}
        // start={{x: 1, y: 0}}
        // end={{x: 0, y: 0}}
        // locations={[0.1,0.9]}
        // colors={['#66a6ff','#89f7fe']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        locations={[0, 0.99]}
        colors={["#353535", "#010101"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>LOGIN</Text>
         <Ring />
          <View style={styles.formcontainer}>
            <Item style={styles.textcontainer}>
              <Icon style={{ color: "green" }} name="home" />
              <Input placeholder="User email" />
            </Item>
            <Item style={styles.textcontainer}>
              <Icon style={{ color: "green" }} name="home" />
              <Input placeholder="password" />
            </Item>
            <TouchableOpacity onPress={()=>Actions.Home()}>
              <LinearGradient
                style={styles.buttoncontainer}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                locations={[0.1, 0.9]}
                colors={["#93F9B9", "#89f7fe"]}
              >
                <Text style={styles.welcome}>LOGIN</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <Text style={styles.buttonText} onPress={()=>Actions.Signup()}>Create New Account</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // backgroundColor: '#F5FCFF',
  // },
  container: {
    marginTop:15,
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center"
    // backgroundColor: '#F5FCFF',
  },
  innercontainer: {
    // flex: 1,
    height: 160,
    width: 160,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderRadius: 100
  },
  buttoncontainer: {
    // flex: 1,
    height: 50,
    width: "100%",
    marginTop:30,
    justifyContent: "center",
    alignItems: "center"
  },
  outercontainer: {
    // flex: 1,
    height: 180,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderRadius: 100
  },
  formcontainer: {    
    // flex: 1,    
    width: "80%",
    marginTop: 50,    
    justifyContent: "center"
  },
  textcontainer: {   
    marginTop: 10,
    color: "#ffffff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  linearGradient: {
    flex: 1
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 30,
    color: "#ffffff",
    backgroundColor: "transparent"
  }
});
