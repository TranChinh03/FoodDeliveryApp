import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import FONT_FAMILY from '../constants/fonts';
import CUSTOM_COLOR from '../constants/colors';

export default class CustomHeaderText extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: scale(34),
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.Black,
  },
});
