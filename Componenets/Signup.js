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
  TouchableOpacity,
  ScrollView
  
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Container, Header, Content, Item, Input, Icon,SwipeRow } from "native-base";
// Within your render function

export default class Signup extends Component {
  render() {
    return (
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        locations={[0, 0.99]}
        colors={["#353535", "#010101"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>SIGN UP</Text>
          <LinearGradient
            style={styles.outercontainer}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            locations={[0.1, 0.9]}
            colors={["#93F9B9", "#89f7fe"]}
          >
            <View style={styles.innercontainer} />
          </LinearGradient>
          <View style={styles.formcontainer}>

    <ScrollView>
          
            <Item style={styles.textcontainer}>
              <Icon style={{ color: "green" }}active name='lock' />
              <Input placeholder="User name" />
            </Item>
            <Item style={styles.textcontainer}>
              <Icon style={{ color: "green" }} name="home" />
              <Input placeholder="Phone number" />
            </Item>
            <Item style={styles.textcontainer}>
              <Icon style={{ color: "green" }}active name='lock' />
              <Input placeholder="User email" />
            </Item>
            <Item style={styles.textcontainer}>
              <Icon style={{ color: "green" }} name="home" />
              <Input placeholder="password" />
            </Item>
            <TouchableOpacity onPress={this._onPressButton}>
              <LinearGradient
                style={styles.buttoncontainer}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                locations={[0.1, 0.9]}
                colors={["#93F9B9", "#89f7fe"]}
              >
                <Text style={styles.welcome}>SIGN UP</Text>
              </LinearGradient>
            </TouchableOpacity>
    </ScrollView>
          
          </View>
          {/* <Text style={styles.buttonText}>Sign in with Facebook</Text> */}
        </View>
          <Text style={styles.buttonText} onPress={() => this.props.navigation.goBack(false)}>Already have an account</Text>
        
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
    flex: 1,    
    width: "80%",
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
    // margin: 10,
    color: "#ffffff",
    // backgroundColor: "transparent"
  }
});
