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
import HeaderBar from './HeaderBar'
import Ring from"../Sytles/Ring"

export default class Profile extends Component {
  render() {
    console.log(this.props)
    return (
      //   <LinearGradient
      //   start={{x: 1, y: 0}}
      //   end={{x: 0, y: 0}}
      //   locations={[0.1,0.9]}
      //   colors={['#66a6ff','#89f7fe']}
      //   style={styles.linearGradient}
      // >
      <View style={styles.container}>
      <View style={styles.Profile}>
   <Ring  style={styles.Ringpro}/>
   <Text style={styles.welcome}>
          Welcome to  Profile!
        </Text>
      </View>
   <View style={styles.Namecount}>
   <LinearGradient
                style={styles.buttoncontainer}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                locations={[0.1, 0.9]}
                colors={["#89f7fe","#93F9B9"]}
              >
                <Text>LOGIN</Text>
              </LinearGradient>
      </View>
        <Text style={styles.welcome}>
          Welcome to React Profile!
        </Text>
      
      </View>
      // </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#363636',
  },
  linearGradient: {
  flex: 1
  // paddingLeft: 15,
  // paddingRight: 15,
  // borderRadius: 5
},
// colors={["#353535", "#010101"]}
Profile:{
height:"50%",
backgroundColor: '#262626',
justifyContent: 'center',
alignItems: 'center',
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'white'
  },
  Namecount: {
  marginTop: -30,
  justifyContent: 'center',
alignItems: 'center',
  }, buttoncontainer: {
    // flex: 1,
    height: 50,
    width: 200,
    borderRadius: 20,    
    // marginTop:30,
    justifyContent: "center",
    alignItems: "center"
  },
});
