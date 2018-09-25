/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {Actions} from"react-native-router-flux"

export default class HeaderBar extends Component {
  render() {
    return (
     <Header transparent>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{Actions.currentScene}</Title>
          </Body>
          <Right>
            <Button transparent>
            <Icon name='home' />
          <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
          <Icon type="FontAwesome" name="home" />
            </Button>
          </Right>
        </Header>
    );
  }
}