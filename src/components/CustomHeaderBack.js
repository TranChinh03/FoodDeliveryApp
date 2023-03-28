import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {IMG_BackButton} from '../assets/images';
import FONT_FAMILY from '../constants/fonts';
import CUSTOM_COLOR from '../constants/colors';
import InputBox from '../components/InputBox';

export default class CustomHeaderBack extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.BackButtonContainer}
          onPress={this.props.onPress}
        >
          <Image source={IMG_BackButton} marginLeft={this.props.marginLeft}></Image>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          {this.props.input === true ? (
            <InputBox></InputBox>
          ) : (
            <Text style={styles.title}>{this.props.title}</Text>
          )}
        </View>
        <View style={styles.blankContainer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  BackButtonContainer: {
    flex: 1,
    // backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 2,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blankContainer: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  title: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
  },
});