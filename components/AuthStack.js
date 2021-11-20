import React, {Component, useEffect, useState} from 'react';
import {
  Image,
  FlatList,
  View,
  StatusBar,
  StyleSheet,
  TextInput,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Container,
  Header,
  Content,
  Card,
  ScrollableTab,
  Tabs,
  Tab,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Footer,
  FooterTab,
} from 'native-base';
import Login from './login'
import Register from './register';
import RootStack from './RootStack'

const AuthNav = createStackNavigator();

export default AuthNavigation = ({navigation}) => (
  <AuthNav.Navigator initialRouteName="login">
    <AuthNav.Screen
      name="login"
      options={{
        headerShown: false,
      }}
      component={Login}
    />
    <AuthNav.Screen
      name="register"
      component={Register}
      options={{
        headerShown: true,
      }}
    />
    <AuthNav.Screen
      name="mainscreen"
      component={RootStack}
      options={{
        headerShown: false,
      }}
    />
  </AuthNav.Navigator>
);

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },

  TopView: {
    width: '100%',
    paddingTop: 20,
    height: 60,
    flexDirection: 'column',
    backgroundColor: '#7BDF7B',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 45,
    flexDirection: 'row',
  },
  SearchView: {
    width: '100%',
    paddingVertical: 30,
    height: 45,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#7BDF7B',
    paddingHorizontal: 10,
  },
  inputs: {
    height: 45,
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
  },
});
