import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
          <Card>
            <CardItem  style={styles.card}>
              <Left>
                <Thumbnail source={require("../img/d10.jpg")} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require("../img/d10.jpg")} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={styles.card}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
    );
  }
}
var styles = StyleSheet.create({
    card: {
      backgroundColor: '#e8c48b',
    },
  });