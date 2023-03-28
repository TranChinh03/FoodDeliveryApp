import {Text, StyleSheet, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import FONT_FAMILY from '../../../constants/fonts';
import scale from '../../../constants/responsive';
import CUSTOM_COLOR from '../../../constants/colors';

export default class CustomInput extends Component {
  render() {
    return (
      <>
        <Text style={styles.inputLabel}> {this.props.label}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry={this.props.secureText}
            placeholder={this.props.label}
            style={styles.input}
            onChangeText={this.props.onChangeText}
            autoCapitalize={this.props.autoCap} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  inputLabel: {
    marginTop: 20,
    fontFamily: FONT_FAMILY.Semibold,
    fontSize: scale(17),
  },
  inputContainer: {
    borderBottomColor: CUSTOM_COLOR.Black,
    borderBottomWidth: 1,
  },
  input: {
    fontFamily: FONT_FAMILY.Bold,
  },
});
