/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
  
  
  import { Platform, StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native';
  import { Container, Header, Content, Item, Input } from "native-base";
  import Icon from 'react-native-vector-icons/FontAwesome';

export default class Signin extends Component {
  render() {
    return (
      <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={require("./img/d10.jpg")}
    >
      <View style={styles.container}>
      <View style={styles.formcontainer}>
            <Item style={styles.textcontainer}>
              <Icon name="facebook" size={30} color="#900" />
              <Input placeholder="User email" />
            </Item>
            <Item style={styles.textcontainer}>
              <Icon style={{ color: "green" }} name="home" />
              <Input placeholder="password" />
            </Item>
      </View>
            <TouchableOpacity style={styles.Buttoncontainer}>
             
                <Text style={styles.welcome}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View>
             
             <Text style={styles.welcome}>Don`t have a Accoutnt</Text>
         </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(169,169,169,0.5)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  formcontainer: {    
    // flex: 1,    
    width: "95%",
    marginTop: 250,
    marginLeft:'5%',    
    justifyContent: "center"
  },
  textcontainer: {   
    marginTop: 10,
    color: "#ffffff",
    width:'100%'
  },
  Buttoncontainer:{
      fontSize: 18,
      fontFamily: "Gill Sans",
      textAlign: "center",
      marginTop: 30,
      color: "#ffffff",
      backgroundColor: "red",
      width:"80%",
      borderRadius: 30
  }
});
