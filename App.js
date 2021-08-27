import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import FbSCreen from './Screens/FbScreen';
import InScreen from './Screens/InScreen';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
      );
}}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen:BookTransactionScreen},
   Search : {screen:SearchScreen},

})

const AppContainer = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
