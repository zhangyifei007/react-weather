import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.menu}>
          <Icon name='ios-list' size={35} color='#8F97A4' />
        </View>
        <View style={styles.center}>
          <Text>ddd</Text>
        </View>
        <View style={styles.setting}>
          <Icon name='ios-settings-outline' size={25} color='#8F97A4' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row", //排列方式
    justifyContent: "center", //在主轴上的对齐方式
    alignItems: "center", //在侧轴上的对齐方式
    backgroundColor: "#f8f8f8",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#c4c4c4"
  },
  menu: {
    flex: 1 //flex 由flex-grow flex-shrink flex-basic
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  setting: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  }
});

export default Footer;
