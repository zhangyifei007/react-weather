import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import Footer from "./footer";
import {
  WEATHER_SETTING_SCREEN,
  WEATHER_MENU_SCREEN
} from '../../constants/scrrenKey';

class WeatherContainer extends Component {
  
  constructor(props) {
    super(props);

    this.handleOnMenuClick = this.handleOnMenuClick.bind(this);
    this.handleOnSettingClick = this.handleOnSettingClick.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Footer
          onMenuClick={this.handleOnMenuClick}
          onSettingClick={this.handleOnSettingClick}
        >
        </Footer>
      </View>
    );
  }

  handleOnMenuClick() {
    this.props.navigator.push({
      screen: WEATHER_SETTING_SCREEN,
      title: '设置'
    });
  }

  handleOnSettingClick() {
    this.props.navigator.push({
      screen: WEATHER_MENU_SCREEN,
      title: '菜单'
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  }
});

export default connect()(WeatherContainer);
