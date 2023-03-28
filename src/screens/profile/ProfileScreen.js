import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import {IMG_Marvis} from '../../assets/images/index';
import CustomButton from '../../components/CustomButton';
import CustomHeaderBack from '../../components/CustomHeaderBack';
import CustomSelected from '../../components/CustomSelected';
import SCREEN_NAME from '../../constants/screens';


class ProfileScreen extends Component {
  state = {
    pagePayment: '',
  };

  setPagePayment = newPagePayment => {
    this.setState({
      pagePayment: newPagePayment,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.navigationBar}>
          <CustomHeaderBack
            title="My profile"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>

        {/* Personal Infomation */}
        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => {
            this.props.navigation.navigate(SCREEN_NAME.PROFILE_EDIT);
          }}>
          <Text style={styles.title}>{'Information'}</Text>
          <View style={styles.information}>
            <Image source={IMG_Marvis} style={styles.img_marvis} />
            <View style={styles.infomationContainer}>
              <Text style={styles.name}>{'Marvis Ighedosa'}</Text>
              <Text style={styles.content}>{'dosamarvis@gmail.com'}</Text>
              <Text style={styles.content}>
                {' No 15 uti street off ovie palace road effurun delta state'}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Payment Method */}
        <View style={styles.methodContainer}>
          <Text style={styles.title}>{'Payment Method'}</Text>
          <View style={styles.paymentMethodContainer}>
            <TouchableOpacity
              style={styles.method}
              onPress={() => this.setPagePayment('Card')}>
              <CustomSelected
                label="Card"
                pageSelected={this.state.pagePayment}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.method}
              onPress={() => this.setPagePayment('Bank account')}>
              <CustomSelected
                label="Bank account"
                pageSelected={this.state.pagePayment}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.method}
              onPress={() => this.setPagePayment('Paypal')}>
              <CustomSelected
                label="Paypal"
                pageSelected={this.state.pagePayment}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Button */}
        <View style={styles.buttonContainer}>
          <CustomButton type="secondary" text="Updated" style={styles.button} />
        </View>
      </SafeAreaView>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },

  navigationBar: {
    flex: 0.8,
    //backgroundColor: 'pink',
    marginHorizontal: scale(50),
  },

  infoContainer: {
    // backgroundColor: 'green',
    //marginTop: scale(20, 'h'),
    marginHorizontal: scale(50),
    flex: 1.5,
  },

  methodContainer: {
    // height: scale(272, 'h'),
    // width: scale(315),
    //backgroundColor: 'pink',
    marginTop: scale(48, 'h'),
    marginHorizontal: scale(50),
    flex: 2,
  },

  buttonContainer: {
    //backgroundColor: 'yellow',
    //position: 'absolute',
    alignSelf: 'center',
    flex: 1,
  },

  ic_back: {
    position: 'absolute',
    bottom: scale(10),
    marginLeft: scale(50),
  },

  text: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    fontSize: scale(18),
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.Medium,
  },

  title: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Medium,
  },

  information: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 2,
    borderRadius: scale(20),
    flexDirection: 'row',
  },

  img_marvis: {
    marginTop: scale(20, 'h'),
    marginLeft: scale(16),
  },

  infomationContainer: {
    // backgroundColor: 'pink',
    flex: 1,
    marginLeft: scale(15),
    marginRight: scale(15),
    marginTop: scale(20, 'h'),
  },

  name: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(18),
    fontFamily: FONT_FAMILY.Medium,
  },

  content: {
    color: CUSTOM_COLOR.SilverChalice,
    fontSize: scale(13),
    fontFamily: FONT_FAMILY.Light,
  },

  ic_pen: {
    marginTop: scale(27, 'h'),
    marginRight: scale(28),
  },

  paymentMethodContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(20),
  },

  method: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  ic_dot: {
    marginLeft: scale(25),
  },

  symbol: {
    marginLeft: scale(15),
  },

  textMethod: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Light,
    marginLeft: scale(11),
  },
});
