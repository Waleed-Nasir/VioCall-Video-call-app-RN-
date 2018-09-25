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
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Mean from "./Mean";
import Loading from "./Loading";
import {Actions} from"react-native-router-flux"

import { Drawer ,Thumbnail} from "native-base";
export default class InnerView extends Component {

  render() {
    console.warn("Www",this.props.title)
    closeDrawer = () => {
      // this.drawer._root.close();
    };
    openDrawer = () => {
      // this.drawer._root.open();
    };
    return (
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../img/D2.jpg")}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>MENU</Text>
          <View style={styles.Actioncontainer}>
          <TouchableOpacity  onPress={()=>Actions.Home()}>
              <Text style={Actions.currentScene === "Home"?styles.ActionTextActive : styles.ActionText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>Actions.Profile()}>
              <Text style={Actions.currentScene === "Profile"?styles.ActionTextActive : styles.ActionText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>Actions.Settings()}>
              <Text style={Actions.currentScene === "Settings"?styles.ActionTextActive : styles.ActionText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>Actions.Contact()}>
              <Text style={Actions.currentScene === "Contact"?styles.ActionTextActive : styles.ActionText}>Contact</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>Actions.BlockContact()}>
              <Text style={Actions.currentScene === "BlockContact"?styles.ActionTextActive : styles.ActionText}>Block Contact</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Infocontainer} />
          <Thumbnail style={{marginLeft:20}} source={require("../img/D2.jpg")} />
          <Text style={styles.UserAbout}>Jhon Aurther</Text>
          <Text >Jhon Aurther</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:15,
    // justifyContent: 'center',
    // alignItems: "center",
    backgroundColor: "#434d57bd"
  },
  Actioncontainer: {
    // flex: 2,
    height: "70%",
    justifyContent: "center"
    // alignItems: "center",
  },
  Infocontainer: {
    width:'100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
  },
  ActionText: {
    textAlign: "left",
    fontSize: 20,
    // height:50,
    margin: 10,
    color: "#ffffff",
    // borderLeftColor: "red",
    // borderStyle: "solid",
    // borderLeftWidth: 3,
    // paddingLeft: 15
  },
  ActionTextActive: {
    textAlign: "left",
    fontSize: 20,
    // height:50,
    margin: 10,
    color: "#ffffff",
    borderLeftColor: "red",
    borderStyle: "solid",
    borderLeftWidth: 3,
    paddingLeft: 15
  },
  UserAbout: {
    textAlign: "left",
    fontSize: 16,
    color: "#ffffff",
    paddingLeft: 20
  }
});
