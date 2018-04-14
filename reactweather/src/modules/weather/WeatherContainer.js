import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import Footer from "./footer";

class WeatherContainer extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Footer></Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  }
});

export default connect()(WeatherContainer);
