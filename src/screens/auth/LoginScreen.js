import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';

import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import {IMG_Logo} from '../../assets/images/index';
import scale from '../../constants/responsive';
import CustomInput from './components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SCREEN_NAME from '../../constants/screens';
import { firebaseApp } from '../../components/FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const LOGIN = 'LOGIN';
const SIGNUP = 'SIGN_UP';

export class LoginScreen extends Component {
  state = {
    page: LOGIN,
    email: '',
    pass: '',
    confirmPass: '',
  };

  signUp = () => {
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
    .then((userCredential) => {
      Alert.alert(
        "Successfull",
        "Sign up Successfullly"+this.state.email,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      this.setState({
        email:'',
        pass:'',
        confirmPass: '',
      })
      
      
    })
    .catch((error) => {
      Alert.alert(
        "Failed",
        "Sign up Failed",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => this.setPage(LOGIN) }
        ]
      );
    });
  };

  setPage = newPage => {
    this.setState({
      page: newPage,
    });
  };

  correctConFirmPassword = (pass, confirmPass) => {
    if (pass === confirmPass) return true;
    return false;
  };

  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <KeyboardAvoidingView style={styles.Container}>
          {/* Heading */}
          <View style={styles.headingContainer}>
            {/* Logo */}
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={IMG_Logo}
                resizeMode={'contain'}
              />
            </View>
            {/* Navigation */}
            <View style={styles.navigationContainer}>
              {/* Login */}
              <TouchableOpacity
                style={styles.touchableContainer}
                onPress={() => {
                  this.setPage(LOGIN);
                }}>
                <Text style={styles.textLabel}> Login</Text>
                {this.state.page === LOGIN ? (
                  <View style={styles.pickerLiner}></View>
                ) : null}
              </TouchableOpacity>
              {/* Signup */}
              <TouchableOpacity
                style={styles.touchableContainer}
                onPress={() => {
                  this.setPage(SIGNUP);
                }}>
                <Text style={styles.textLabel}> Sign-up</Text>
                {this.state.page === SIGNUP ? (
                  <View style={styles.pickerLiner}></View>
                ) : null}
              </TouchableOpacity>
            </View>
          </View>

          {/* Body */}

          <View style={styles.contentContainer}>
            <View>
              <CustomInput
                label={'Email address'}
                onChangeText={email => this.setState({email: email})}
                autoCap="none"
              />
              <CustomInput
                label={'Password'}
                secureText={true}
                onChangeText={pass => this.setState({pass: pass})}
                autoCap="none"
              />
            </View>
            {this.state.page === LOGIN ? (
              <TouchableOpacity
                onPress={() => alert('Email xác nhận vừa được gửi về mail!')}>
                <Text style={styles.forgetPasscode}> Forgot Passcode? </Text>
              </TouchableOpacity>
            ) : (
              <CustomInput
                label={'Comfirm password'}
                secureText={true}
                onChangeText={confirmPass =>
                  this.setState({confirmPass: confirmPass})
                }
              />
            )}
          </View>

          {/* Button */}

          <View style={styles.buttonContainer}>
            <CustomButton
              type={'secondary'}
              text={this.state.page === LOGIN ? 'Login' : 'Sign Up'}
              onPress={() => {
                if (this.state.email === '' || this.state.password === '') {
                  alert('Bạn chưa điền đầy đủ thông tin!');
                } else {
                  if (this.state.page === LOGIN) {
                    this.props.signUp();
                  } else {
                    if (
                      this.correctConFirmPassword(
                        this.state.pass,
                        this.state.confirmPass,
                      )
                    ) {
                      alert('Bạn đã tạo tài khoản thành công!');
                      this.props.navigation.navigate(SCREEN_NAME.DRAWER);
                    } else {
                      alert('Mật khẩu không trùng khớp, vui lòng điền lại!');
                    }
                  }
                }
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AntiFlashWhite,
  },
  headingContainer: {
    justifyContent: 'center',
    width: scale(414),
    height: '40%',
    borderBottomLeftRadius: scale(30),
    borderBottomRightRadius: scale(30),
    marginBottom: 20,
    backgroundColor: CUSTOM_COLOR.White,
  },
  logoContainer: {
    height: scale(162.38, 'h'),
    width: scale(131.53),
    alignSelf: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    lignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    height: scale(60, 'h'),
    flexDirection: 'row',
  },
  touchableContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerLiner: {
    position: 'absolute',
    bottom: 0,
    width: '50%',
    height: 3,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  textLabel: {
    fontFamily: FONT_FAMILY.Medium,
    fontSize: scale(18),
    color: CUSTOM_COLOR.Black,
  },
  contentContainer: {
    alignSelf: 'center',
    height: '40%',
    width: '87%',
  },
  forgetPasscode: {
    marginTop: 20,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.SunsetOrange,
  },
  buttonContainer: {
    flex: 1,
  },
});
