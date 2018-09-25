/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import HeaderBar from './MeanComonets/HeaderBar'
import {Actions} from"react-native-router-flux"



export default class Home extends Component {
  render() {
    console.warn(Actions.currentScene)

    return (
        <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        locations={[0.1,0.9]}
        colors={['#66a6ff','#89f7fe']}
        style={styles.linearGradient}
      >
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={()=>Actions.Profile("PARAMS")}>
          Welcome to React Home!
        </Text>
      
      </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  linearGradient: {
  flex: 1
  // paddingLeft: 15,
  // paddingRight: 15,
  // borderRadius: 5
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
