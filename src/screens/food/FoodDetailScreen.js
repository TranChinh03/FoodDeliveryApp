import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import {IC_Back, IC_Heart2} from '../../assets/icons';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import CustomButton from '../../components/CustomButton';
import {IMG_Dishes_1} from '../../assets/images';

class FlatListItem extends React.Component {
  render() {
    return (
      <View style={styles.imageContainer}>
        <Image source={IMG_Dishes_1} style={styles.image} />
      </View>
    );
  }
}

class FoodDetailScreen extends React.Component {
  state = {
    isSelected: false,
  };
  setIsSelected = newIsSelected => {
    this.setState({
      isSelected: newIsSelected,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.ic_back}
            onPress={() => this.props.navigation.goBack()}>
            <IC_Back />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ic_heart}
            onPress={() => this.setIsSelected(!this.state.isSelected)}>
            <IC_Heart2
              selected={this.state.isSelected}
              fill={this.state.isSelected === true ? '#FA4A0C' : 'none'}
              stroke={this.state.isSelected === true ? '#FA4A0C' : '#000000'}
            />
          </TouchableOpacity>
        </View>

        {/* Image List */}
        <View style={styles.imageListContainer}>
          <FlatList
            data={[{}, {}, {}, {}]}
            renderItem={({item}) => {
              return <FlatListItem item={item} />;
            }}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}></FlatList>
        </View>

        {/* Content */}
        <View style={styles.contentContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{'Veggie tomato mix'}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{'N1,900'}</Text>
          </View>
          <View style={[styles.boxContainer, styles.deliveryContainer]}>
            <Text style={styles.title}>{'Delivery info'}</Text>
            <Text style={styles.info}>
              {
                'Delivered between monday aug and thursday 20 from 8pm to 91:32 pm'
              }
            </Text>
          </View>
          <View style={[styles.boxContainer, styles.returnContainer]}>
            <Text style={styles.title}>{'Return policy'}</Text>
            <Text style={styles.info}>
              {
                'All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.'
              }
            </Text>
          </View>
        </View>

        {/* Button */}
        <View style={styles.buttonContainer}>
          <CustomButton type="secondary" text="Add to cart"></CustomButton>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },

  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'pink',
  },

  imageListContainer: {
    flex: 4,
  },

  contentContainer: {
    flex: 5,
  },

  buttonContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: scale(41, 'h'),
  },

  ic_back: {
    marginLeft: scale(50),
    position: 'absolute',
    bottom: 0,
  },

  ic_heart: {
    marginLeft: scale(341.29),
    position: 'absolute',
    bottom: 0,
  },

  nameContainer: {
    // backgroundColor: 'orange',
    width: scale(318),
    height: scale(70, 'h'),
    marginHorizontal: scale(48),
    alignItems: 'center',
    alignContent: 'flex-start',
  },

  name: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(28),
    fontFamily: FONT_FAMILY.Medium,
  },

  priceContainer: {
    height: scale(35, 'h'),
    width: scale(172),
    marginHorizontal: scale(121),
    zIndex: 5,
    marginTop: scale(-20, 'h'),
    alignItems: 'center',
    // backgroundColor: 'blue',
  },

  price: {
    color: CUSTOM_COLOR.Vermilion,
    fontSize: scale(22),
    fontFamily: FONT_FAMILY.Bold,
  },

  boxContainer: {
    // backgroundColor: 'pink',
    width: scale(297),
    marginLeft: scale(53),
  },

  deliveryContainer: {
    marginTop: scale(35, 'h'),
    height: scale(104, 'h'),
  },

  returnContainer: {
    marginTop: scale(6, 'h'),
  },

  title: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.Medium,
    fontSize: scale(17),
  },

  info: {
    color: CUSTOM_COLOR.Manatee,
    fontSize: scale(15),
    fontFamily: FONT_FAMILY.Regular,
  },

  imageContainer: {
    // backgroundColor: 'green',
    height: scale(269.09, 'h'),
    width: scale(405.73),
    marginLeft: scale(3.74),
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: '100%',
    width: scale(269.09, 'h'),
    resizeMode: 'stretch',
    borderRadius: 130,
  },
});

export default FoodDetailScreen;
