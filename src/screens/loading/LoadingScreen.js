import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    Image,
    ActivityIndicator,
  } from 'react-native';
  import React, {Component} from 'react';
  import {IMG_BackgroundScreen19, IMG_BellaOlonjeLogo} from '../../assets/images';
  import CUSTOM_COLOR from '../../constants/colors';
  import FONT_FAMILY from '../../constants/fonts';
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  export default class LoadingScreen extends Component {
    render() {
      return (
        <ImageBackground
          style={styles.backgroundContainer}
          source={IMG_BackgroundScreen19}>
          <View style={styles.mainContainer}>
            <View style={styles.blankContainer}></View>
            <View style={styles.logoContainer}>
              <Image source={IMG_BellaOlonjeLogo} />
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.sloganText}>Food for Everyone</Text>
              </View>
              <View style={styles.loadingContainer}>
                <ActivityIndicator
                  style={styles.activityCircle}
                  size="large"
                  color={CUSTOM_COLOR.SunsetOrange}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainContainer: {
      backgroundColor: CUSTOM_COLOR.White,
      width: '60%',
      borderRadius: (windowWidth * 60) / 200,
      aspectRatio: 1,
    },
    blankContainer: {
      flex: 5,
      //backgroundColor: 'yellow',
    },
    logoContainer: {
      flex: 3,
      //backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      flex: 6,
      //backgroundColor: 'pink',
    },
    textContainer: {
      flex: 1,
      //backgroundColor: 'grey',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    loadingContainer: {
      flex: 2,
      //backgroundColor: 'green',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    sloganText: {
      fontFamily: FONT_FAMILY.Semibold,
      fontSize: 12,
      color: CUSTOM_COLOR.SunsetOrange,
    },
  });
  