import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import scale from '../constants/responsive';
import FONT_FAMILY from '../constants/fonts';

export class CustomButton extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity
            style={[
              styles.button,
              this.props.type === 'primary'
                ? styles.buttonPrimary
                : styles.buttonSecondary,
            ]}
            onPress={this.props.onPress}>
            <Text
              style={[
                styles.textButton,
                this.props.type === 'primary'
                  ? styles.textButtonPrimary
                  : styles.textButtonSecondary,
              ]}>
              {this.props.text}
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    //backgroundColor: 'pink',
  },

  button: {
    height: scale(70, 'h'),
    width: scale(314),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
    alignSelf: 'center',
  },

  buttonPrimary: {
    backgroundColor: CUSTOM_COLOR.White,
  },

  buttonSecondary: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  textButton: {
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Bold,
  },

  textButtonPrimary: {
    color: CUSTOM_COLOR.SunsetOrange,
  },

  textButtonSecondary: {
    color: CUSTOM_COLOR.White,
  },
});
