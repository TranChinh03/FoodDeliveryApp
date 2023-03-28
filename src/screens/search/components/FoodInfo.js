import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import scale from '../../../constants/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import CUSTOM_COLOR from '../../../constants/colors';
import {
  IMG_Dishes_1,
  IMG_Dishes_3,
  IMG_Dishes_4,
  IMG_Dishes_5,
} from '../../../assets/images/index';
import SCREEN_NAME from '../../../constants/screens';

class FoodInfo extends React.Component {
  render() {
    return (
      <View
        style={styles.container}
        marginTop={this.props.id % 2 == 0 ? 50 : 0}>
        <TouchableOpacity
          style={styles.subContainer}
          onPress={() => this.props.navigation.navigate(SCREEN_NAME.FOOD_DETAIL)}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} 
            source={this.props.id%4==1?IMG_Dishes_1:(this.props.id%4==2?IMG_Dishes_3:(this.props.id%4==3?IMG_Dishes_4:IMG_Dishes_5))}
            resizeMode={'stretch'}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{this.props.text}</Text>
            <Text style={styles.price}>{this.props.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FoodInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: scale(350, 'h'),
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
    width: scale(156),
    height: scale(212, 'h'),
    backgroundColor: CUSTOM_COLOR.White,
    marginTop: scale(100, 'h'),
    borderRadius: 30,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontFamily: FONT_FAMILY.Light,
    fontSize: scale(22),
    color: CUSTOM_COLOR.Black,
    textAlign: 'center',
  },
  price: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: scale(17),
    color: CUSTOM_COLOR.Vermilion,
  },
  image: {
    position: 'absolute',
    top: -50,
    width: 150,
    height: 150,
    borderRadius: 100,
  }
});
