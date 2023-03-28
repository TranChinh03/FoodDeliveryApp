import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import scale from '../../../../constants/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import CUSTOM_COLOR from '../../../../constants/colors';

class MenuBlock extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
        <Text style={styles.price}>{this.props.price}</Text>
      </View>
    );
  }
}

export default MenuBlock;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.White,
    width: '100%',
    height: scale(300, 'h'),
    position: 'absolute',
    bottom: 0,
    borderRadius: scale(30),
  },
  text: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: scale(22),
    color: CUSTOM_COLOR.Black,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: scale(145, 'h'),
  },
  price: {
    fontFamily: FONT_FAMILY.Rounded,
    fontSize: scale(17),
    color: CUSTOM_COLOR.Vermilion,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: scale(15, 'h'),
  },
});
