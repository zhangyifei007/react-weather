import React, { Component } from "react";
import {View} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screen';
import configureStore  from './store/configureStore';
import {
  WEATHER_CONTAINER_SCREEN
} from './constants/scrrenKey';

const store = configureStore();
registerScreens(store, Provider);

class App {

  constructor(props) {
    this.startApp();
  }

  startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: WEATHER_CONTAINER_SCREEN,
        title: '天气',
        navigatorStyle: {
          navBarBackgroundColor:'#f7f7f7',
          navBarTextColor: '#000000'
        }
      }
    });
  }
}

export default App;
