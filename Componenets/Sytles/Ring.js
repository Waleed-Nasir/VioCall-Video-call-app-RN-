/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Actions,ActionConst} from"react-native-router-flux"
// Within your render function

export default class Ring extends Component {
  render() {
    console.log(this.props)
    return (
          <LinearGradient
            style={styles.outercontainer}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            locations={[0.1, 0.9]}
            colors={["#93F9B9", "#89f7fe"]}
          >
           <Image style={styles.innercontainer} source={require('../../img/d10.jpg')} />
            {/* <View style={styles.innercontainer} /> */}
          </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({

  innercontainer: {
    // flex: 1,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderRadius: 100,
    marginTop:"57%"
    // marginRight:'40%'
  },
  outercontainer: {
    // flex: 1,
    height: 90,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderRadius: 100,
    marginRight:'50%',
    marginTop:"20%",
    // paddingTop:30

  }
});
