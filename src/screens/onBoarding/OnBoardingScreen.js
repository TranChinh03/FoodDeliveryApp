import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_Background, IMG_Logo} from '../../assets/images/index';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';
import CustomButton from '../../components/CustomButton';

class OnBoardingScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        {/* Logo */}
        <>
          <View style={styles.logoContainer}>
            <Image
              source={IMG_Logo}
              style={styles.logo}
              resizeMode={'contain'}
            />
          </View>
        </>
        {/* Title */}
        <>
          <Text style={styles.title}>{'Food for \nEveryone'}</Text>
        </>
        {/* Image */}
        <>
          <View style={styles.backgroundContainer}>
            <ImageBackground
              source={IMG_Background}
              style={styles.background}
              resizeMode={'contain'}>
              <View style={styles.buttonContainer}>
                <CustomButton
                  type="primary"
                  text="Get Started"
                  onPress={() => this.props.navigation.navigate('Login')}
                />
              </View>
            </ImageBackground>
          </View>
        </>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  logoContainer: {
    width: scale(74),
    height: scale(74, 'h'),
    borderRadius: scale(74) / 2,
    backgroundColor: CUSTOM_COLOR.White,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(50, 'h'),
    marginTop: scale(56),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: scale(50),
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.White,
    marginLeft: scale(50),
  },
  buttonContainer: {
    height: scale(90),
    width: '100%',
  },
  background: {
    width: '100%',
    height: scale(540, 'h'),
    justifyContent: 'flex-end',
  },
});

export default OnBoardingScreen;
