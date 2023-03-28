import {
    Text,
    StyleSheet,
    View,
    Alert,
    Modal,
    TouchableOpacity,
  } from 'react-native';
  import React, {Component} from 'react';
  import CustomButton from '../../components/CustomButton';
  import scale from '../../constants/responsive';
  import CUSTOM_COLOR from '../../constants/colors';
  import FONT_FAMILY from '../../constants/fonts';
  import CustomHeaderBack from '../../components/CustomHeaderBack';
  import CustomHeaderText from '../../components/CustomHeaderText';
  import CustomSelected from '../../components/CustomSelected';
  import SCREEN_NAME from '../../constants/screens';
  
  export default class PaymentScreen extends Component {
    state = {
      modalVisible: false,
      pagePayment: 'Card',
      pageDelivery: 'Door delivery',
    };
    setPageDelivery = newPageDelivery => {
      this.setState({
        pageDelivery: newPageDelivery,
      });
    };
    setPagePayment = newPagePayment => {
      this.setState({
        pagePayment: newPagePayment,
      });
    };
    setModalVisible = visible => {
      this.setState({modalVisible: visible});
    };
    render() {
      const {modalVisible} = this.state;
      return (
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.navigationBar}>
            <CustomHeaderBack
              title={'Check out'}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
          {/* Heading */}
          <View style={styles.headingContainer}>
            <CustomHeaderText text={'Payment'} />
          </View>
          {/* Payment Method */}
          <View style={styles.paymentContainer}>
            <Text style={styles.mtText}> Payment method</Text>
            <View style={styles.mtContentContainer}>
              <TouchableOpacity
                style={styles.mtContent}
                onPress={() => this.setPagePayment('Card')}>
                <CustomSelected
                  label="Card"
                  pageSelected={this.state.pagePayment}
                />
              </TouchableOpacity>
              <View
                style={[styles.dividerLine, {width: '60%', alignSelf: 'center'}]}
              />
              <TouchableOpacity
                style={styles.mtContent}
                onPress={() => this.setPagePayment('Bank account')}>
                <CustomSelected
                  label="Bank account"
                  pageSelected={this.state.pagePayment}
                />
              </TouchableOpacity>
              <View style={styles.mtContent} />
            </View>
          </View>
          {/* Delivery method */}
          <View style={styles.deliveryContainer}>
            <Text style={styles.mtText}> Delivery method</Text>
            <View style={styles.mtContentContainer}>
              <TouchableOpacity
                style={styles.mtContent}
                onPress={() => this.setPageDelivery('Door delivery')}>
                <CustomSelected
                  label="Door delivery"
                  pageSelected={this.state.pageDelivery}
                />
              </TouchableOpacity>
              <View
                style={[styles.dividerLine, {width: '60%', alignSelf: 'center'}]}
              />
              <TouchableOpacity
                style={styles.mtContent}
                onPress={() => this.setPageDelivery('Pick up')}>
                <CustomSelected
                  label="Pick up"
                  pageSelected={this.state.pageDelivery}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* ButtonNavigation */}
          <View style={styles.bottomContainer}>
            <View style={styles.totalContainer}>
              <Text style={[styles.textStyle2, {marginTop: 20}]}>Total</Text>
              <Text style={[styles.textStyle2, {marginTop: 20}]}>23,000</Text>
            </View>
            <View style={{flex: 2}}>
              <CustomButton
                type="secondary"
                text="Proceed to payment"
                onPress={() => this.setModalVisible(true)}
                // onPress={() => <ModalCus mdVisible={true}></ModalCus>}
              />
            </View>
          </View>
          {/* Modal */}
  
          <View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Your payment is not successful!');
                this.setModalVisible(!modalVisible);
              }}>
              {/* Modal Center */}
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  {/* Title */}
                  <View style={styles.titleContainer}>
                    <Text style={styles.modalText}>Please note</Text>
                  </View>
                  {/* Content */}
                  <View style={styles.textContainer}>
                    <Text style={styles.textStyle1}>
                      {'DELIVERY TO MAINLAND'}
                    </Text>
                    <Text style={styles.textStyle2}>{'N1000 - N2000'}</Text>
                    <View style={styles.dividerLine} />
                    <Text style={styles.textStyle1}>{'DELIVERY TO ISLAND'}</Text>
                    <Text style={styles.textStyle2}>{'N2000 - N3000'}</Text>
                  </View>
                  {/* Button */}
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.touchButton}
                      onPress={() => {
                        this.setModalVisible(!modalVisible),
                          Alert.alert('Your payment is not successful!');
                      }}>
                      <Text style={[styles.textStyle2, {color: 'none'}]}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.touchButton}
                      onPress={() => this.props.navigation.navigate(SCREEN_NAME.LOADING)}>
                      <View style={styles.button}>
                        <Text
                          style={[
                            styles.textStyle2,
                            {color: CUSTOM_COLOR.White},
                          ]}>
                          Proceed
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: CUSTOM_COLOR.AntiFlashWhite,
      marginHorizontal: scale(50),
    },
    navigationBar: {
      flex: 2,
      //backgroundColor: 'white',
    },
    headingContainer: {
      flex: 2,
      //backgroundColor: 'orange',
    },
    paymentContainer: {
      flex: 5,
      //backgroundColor: 'yellow',
      justifyContent: 'space-between',
    },
    deliveryContainer: {
      flex: 4,
      //backgroundColor: 'red',
      justifyContent: 'space-between',
    },
    bottomContainer: {
      flex: 3,
      // backgroundColor: 'green',
    },
    totalContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      // backgroundColor: 'pink',
    },
    mtText: {
      fontSize: 18,
      fontFamily: FONT_FAMILY.Medium,
      color: CUSTOM_COLOR.Black,
    },
    mtContentContainer: {
      backgroundColor: CUSTOM_COLOR.White,
      height: '80%',
      width: '100%',
      borderRadius: scale(20),
    },
    mtContent: {
      flexDirection: 'row',
      flex: 1,
    },
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      height: scale(322),
      width: scale(315),
      borderRadius: scale(30),
      backgroundColor: 'white',
    },
    dividerLine: {
      height: 0.8,
      width: '100%',
      backgroundColor: CUSTOM_COLOR.Silver,
    },
    titleContainer: {
      flex: 2,
      backgroundColor: CUSTOM_COLOR.BrightGray,
      borderTopLeftRadius: scale(30),
      borderTopRightRadius: scale(30),
      justifyContent: 'center',
      paddingHorizontal: scale(46),
    },
    textContainer: {
      flex: 5,
      backgroundColor: 'white',
      marginTop: scale(18),
      paddingHorizontal: scale(46),
    },
    buttonContainer: {
      flex: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: scale(46),
      //backgroundColor: 'yellow',
    },
    touchButton: {
      flex: 1,
    },
    button: {
      height: scale(60),
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: scale(30),
      backgroundColor: CUSTOM_COLOR.SunsetOrange,
    },
    textStyle1: {
      fontSize: scale(15),
      fontFamily: FONT_FAMILY.Regular,
    },
    textStyle2: {
      fontSize: scale(17),
      fontFamily: FONT_FAMILY.Regular,
      color: CUSTOM_COLOR.Black,
      fontWeight: 'bold',
    },
    modalText: {
      fontSize: scale(20),
      fontFamily: FONT_FAMILY.Regular,
      color: CUSTOM_COLOR.Black,
    },
    headingText: {
      fontSize: 34,
      fontFamily: FONT_FAMILY.Medium,
      color: CUSTOM_COLOR.Black,
    },
  });
  