import HomeScreen from '../home/HomeScreen';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  IMG_Marvis,
  IMG_Cart2,
  IMG_Paper,
  IMG_ProfileLogo,
  IMG_Shield,
  IMG_Tag,
  IMG_ToRightArrow,
} from '../../../assets/images';
import {Image, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import scale from '../../../constants/responsive';
import CUSTOM_COLOR from '../../../constants/colors';
import CartScreen from '../../cart/CartScreen';
import ProfileScreen from '../../profile/ProfileScreen';
import ProfileEditScreen from '../../profile/ProfileEditScreen';
import OfferScreen from '../offer';
import PrivacyScreen from '../privacy';
import SecurityScreen from '../security';
// import auth from '@react-native-firebase/auth';

const Button = props => {
  return (
    <TouchableOpacity
      style={{height: scale(78), justifyContent: 'center'}}
      onPress={() => props.navigation.jumpTo(props.component)}>
      <Image source={props.source} />
      <Text
        style={[
          styles.text,
          {
            width: scale(132),
            height: '100%',
            textAlignVertical: 'center',
            marginLeft: scale(35),
            borderBottomColor: CUSTOM_COLOR.AthensGray,
            borderBottomWidth: 0.3,
          },
        ]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const CustomScrollDrawer = props => {
    return (
      <DrawerContentScrollView
        contentContainerStyle={{flex: 1, flexGrow: 1}}
        style={styles.container}>
        <Image source={IMG_Marvis} style={styles.user}></Image>
        <View style={styles.buttonContainer}>
          <Button
            label="Profile"
            source={IMG_ProfileLogo}
            component="Profile"
            navigation={props.navigation}
          />
          <Button
            label="Orders"
            source={IMG_Cart2}
            component="Orders"
            navigation={props.navigation}
          />
          <Button
            label="Offer and promo"
            source={IMG_Tag}
            component="Offer"
            navigation={props.navigation}
          />
          <Button
            label="Privacy policy"
            source={IMG_Paper}
            component="Privacy"
            navigation={props.navigation}
          />
          <Button
            label="Security"
            source={IMG_Shield}
            component="Security"
            navigation={props.navigation}
          />
        </View>
        {/* <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: scale(36),
            left: scale(35),
            width: '100%',
            flexDirection: 'row',
          }}

          onPress={() => {auth()
            .signOut()
            .then(() =>  props.navigation.replace("Login"))
            .catch((error) => console.log(error.message))}}>
          <Text style={[styles.text, { position: 'relative' }]}>
          {'Sign-out'}
          </Text>
          <Image
            source={IMG_ToRightArrow}
            style={{ marginLeft: scale(12), alignSelf: 'center' }}
          />

        </TouchableOpacity> */}
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: scale(259)},
        swipeEdgeWidth: scale(40),
      }}
      drawerContent={CustomScrollDrawer}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Orders" component={CartScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Offer" component={OfferScreen} />
      <Drawer.Screen name="Privacy" component={PrivacyScreen} />
      <Drawer.Screen name="Security" component={SecurityScreen} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    flex: 1,
  },
  user: {
    alignSelf: 'center',
    marginTop: scale(65),
  },
  signOut: {
    top: '83%',
    marginLeft: scale(40),
  },
  buttonContainer: {
    marginLeft: scale(40),
    marginTop: scale(29),
    marginRight: scale(50),
  },
  home: {
    height: scale(78),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: CUSTOM_COLOR.White,
    fontSize: scale(17),
    lineHeight: scale(25.5),
    position: 'absolute',
  },
});
