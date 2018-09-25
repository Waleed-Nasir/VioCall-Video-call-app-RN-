/**
 * Sample React Native Pro
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Item, Input } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from "react-native-linear-gradient";
import Hexa from './Componenets/Sytles/Ring'
export default class Pro extends Component {
  render() {
    return (
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("./img/d10.jpg")}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.30, 0.50]}
          colors={["rgba(0,0,0,0.5)", "#242541"]}
          style={styles.linearGradient}
        >
          <View style={styles.container}>
            <Hexa imgData={"img/d10.jpg"} style={styles.hexa} />
            <View style={{ flexDirection: "column", width: "80%",paddingTop: 40,paddingBottom: 50, }}>


              <Text style={styles.Subscript}>Waleed Nasir</Text>
              <Text style={styles.Super}>They say a picture is worth a thousand
               words. But I wonder, what else do “they” say? In order to find
                out I’ve culled together the best quotes on
              the subject of photography. I hope they inspire you</Text>
            </View>
            <View style={styles.Procontainer}>
              <View style={{ flexDirection: "row", }}>
                <View style={{ flexDirection: "column", width: "33%" }}>


                  <Text style={styles.Subscript}>178</Text>
                  <Text style={styles.Super}>SHORTS TAKEN</Text>
                </View>
                <View style={{ flexDirection: "column", width: "33%" }}>


                  <Text style={styles.Subscript}>246</Text>
                  <Text style={styles.Super}>FOLLOWERS</Text>
                </View>
                <TouchableOpacity style={styles.Buttoncontainer}>

                  <Text style={styles.welcome}>HELLO</Text>
                </TouchableOpacity >
              </View>
              <Text style={styles.RPC}>RECEN UPLOADS</Text>

            </View>
            <View style={{ flexDirection: "column", width: "33%" }}>


                  <Text style={styles.Subscript}>246</Text>
                  <Text style={styles.Super}>FOLLOWERS</Text>
                </View>
          </View>
        </LinearGradient>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(169,169,169,0.5)',
  },
  hexa:{
    flex: 1,
    marginTop:100
  },

  Subscript: {
    fontSize: 20,
    textAlign: 'left',
    color: 'white',
    // marginLeft:20

  },
  Super: {
    fontSize: 12,
    textAlign: 'left',
    color: 'gray',
    // marginLeft:40
  },
  RPC: {
    fontSize: 16,
    textAlign: 'left',
    color: 'gray',
    paddingTop: 30
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
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Procontainer: {
    width: '90%',
    marginLeft: '10%',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    // borderLeftWidth: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 10,

    // borderLeftColor: 'transparent',
    borderColor: 'gray',
  },
  textcontainer: {
    marginTop: 10,
    color: "#ffffff",
    width: '100%'
  },
  Buttoncontainer: {
    fontSize: 14,
    fontFamily: "Gill Sans",
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "#fe727b",
    width: "40%",
    borderRadius: 30,
    // marginLeft:"5%"
  }
  // listItemStyle:{
  //   borderWidth: 0.5,
  //   borderBottomWidth: 1,
  //   // borderLeftColor: '#008000',
  //   borderLeftWidth: 10,
  //   backgroundColor: 'white',
  //   // borderColor: '#DCDCDC',
  //   // borderRadius: 10,
  //   borderBottomRightRadius: 10,
  //   borderTopLeftRadius: 10,
  //   borderTopRightRadius: 10,
  //   borderTopColor: '#DCDCDC',
  //   borderBottomColor: '#DCDCDC',
  //   borderLeftColor: '#008000',
  //   borderRightColor: '#DCDCDC',
  // },
});
