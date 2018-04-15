import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet
} from 'react-native';

class Setting extends Component {
  render(){
    return(
      <View style={stylses.contaniner}>
      </View>
    );
  }
}
const stylses = StyleSheet.create({
  contaniner: {
    flex: 1,
    backgroundColor: "red"
  }
});

Setting.prototypes = {};
Setting.defaultProps = {};

export default Setting;