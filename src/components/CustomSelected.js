import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {
  IC_Bank,
  IC_Card,
  IC_nonSelected,
  IC_Selected,
  IC_PayPal,
} from '../assets/icons/index.js';
import scale from '../constants/responsive';

export default class CustomSelected extends Component {
  state = {
    selected: true,
  };

  render() {
    return (
      <View style={styles.pmContent}>
        {this.props.label === this.props.pageSelected
          ? (this.state.selected = true)
          : (this.state.selected = false)}
        {this.state.selected === true ? <IC_Selected /> : <IC_nonSelected />}
        {this.props.label === 'Card' ? <IC_Card marginLeft={20} /> : null}
        {this.props.label === 'Bank account' ? (
          <IC_Bank marginLeft={20} />
        ) : null}
        {this.props.label === 'Paypal' ? <IC_PayPal marginLeft={20} /> : null}
        <Text style={styles.labelText}>{this.props.label}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pmContent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginLeft: 30,

    //backgroundColor: 'pink',
  },
  labelText: {
    color: 'black',
    marginLeft: 20,
    fontSize: scale(17),
    justifyContent: 'center',
  },
});
