import React, {Component} from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CUSTOM_COLOR from "../../constants/colors";
import FONT_FAMILY from "../../constants/fonts";
import scale from "../../constants/responsive";
import CustomPersonalDetail from "../../components/CustomPersonalDetail";
import CustomHeaderBack from "../../components/CustomHeaderBack";
import CustomSelected from "../../components/CustomSelected";
import SCREEN_NAME from "../../constants/screens";

class DeliveryScreen extends React.Component {
  state = {
    pageDelivery: 'Door delivery',
  }

  setPageDelivery = newPageDelivery => {
    this.setState({
      pageDelivery: newPageDelivery,
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header Show  */}
        <View style={styles.navigationBar}>
          <CustomHeaderBack title='Checkout' onPress={() => this.props.navigation.goBack()}/>
        </View>
        
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Delivery'}</Text>
        </View>
      
        {/* Address Details  */}
        <View style={styles.addressChange}>
          <Text style={styles.details}>{'Address Details'}</Text>
          <TouchableOpacity style={styles.changeTouch}>
            <Text style={styles.change}>{'change'}</Text>
          </TouchableOpacity>
        </View>
        <CustomPersonalDetail 
        style={styles.addressContainer} 
        image='' 
        name='Marvis Kparobo' 
        text1='Km 5 refinery road oppsite re public road, effurun, delta state'
        text2='+234 9011039271'
        text3= ''
        lineDivider1='true'
        lineDivider2='true'
        lineDivider3='false'/>

        {/* Delivery Method  */}
        <View style={styles.deliveryContainer}>
          <Text style={styles.text}>{'Delivery method.'}</Text>
          <View style={styles.methodContainer}>
            <TouchableOpacity style={styles.method} onPress={()=>this.setPageDelivery('Door delivery')}>
              <CustomSelected label='Door delivery' pageSelected={this.state.pageDelivery}/>
            </TouchableOpacity>
            <View style={styles.dividerLine}/>
            <TouchableOpacity style={styles.method} onPress={()=>this.setPageDelivery('Pick up')}>
              <CustomSelected label='Pick up' pageSelected={this.state.pageDelivery}/>
            </TouchableOpacity>

          </View>

        </View>

        {/* Total cost  */}
        <View style={styles.totalContainer}>
          <Text style={styles.total}>{'Total'}</Text>
          <Text style={styles.cost}>{'23,000'}</Text>
        </View>

        {/* Button  */}
        <View style={styles.buttonContainer}>
          <CustomButton 
          type='secondary' 
          onPress={() => this.props.navigation.navigate(SCREEN_NAME.PAYMENT)}
          text='Proceed to payment'/>
        </View>

      </SafeAreaView>
    );
  }
}

export default DeliveryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },

  navigationBar: {
    flex: 2, 
    marginHorizontal: scale(50),
    
  },

  titleContainer: {
    // height: scale(41, 'h'),
    // width: '100%',
    // backgroundColor: 'orange',
    flex: 1.5,
    marginLeft: scale(50),
  },

  addressContainer: {
    // height: scale(196, 'h'),
    // width: scale(315),
    backgroundColor: CUSTOM_COLOR.White,
    marginHorizontal: scale(50),
    marginTop: scale(35, 'h'),
    flex: 3,
    borderRadius: scale(20),
  },

  addressChange: {
    flexDirection: "row",
    //backgroundColor: "pink",
    marginHorizontal: scale(50),
    alignItems: 'center',
  },

  details: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Bold,
  },

  deliveryContainer: {
    // height: scale(196, 'h'),
    // width: scale(315),
    // backgroundColor: 'red',
    marginHorizontal: scale(50),
    marginTop: scale(32, 'h'),
    flex: 4,
  },

  totalContainer: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    marginTop: scale(35, ' h'),
    // width: scale(315),
    flex: 3.5,
    marginHorizontal: scale(50),
  },

  ic_back : {
    position: 'absolute',
    bottom: scale(10),
    marginLeft: scale(50),
  },

  title: {
    fontSize: scale(34),
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.Medium,
  },

  total: {
    fontSize: scale(17),
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.Bold,
  },

  cost: {
    fontSize: scale(22),
    fontFamily: FONT_FAMILY.Black,
    color: CUSTOM_COLOR.Black,
    position:'absolute',
    right: 0,
  },

  buttonContainer: {
    // backgroundColor: 'blue',
    position: 'absolute',
    bottom: scale(41),
    alignSelf: 'center',
    flex: 2,
  },

  addressDetailContainer: {
    //backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    fontSize: scale(18),
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.Medium,
  },


  text: {
    fontSize: scale(17),
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.Medium,
  },

  changeTouch: {
    position: 'absolute',
    right: 0,
  },

  change: {
    color: CUSTOM_COLOR.TahitiGold,
    fontSize: scale(15),
    fontFamily: FONT_FAMILY.Bold,
  },

  contentContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
    borderRadius: scale(20),
  },
  
  box: {
    flex: 1,
    width: scale(232),
    justifyContent: 'center',
    // backgroundColor: CUSTOM_COLOR.Bombay,
    marginLeft: scale(30),
    // borderBottomWidth: 0.5,
  },

  border: {
    borderBottomWidth: 0.5,
  },

  information: {
    color: CUSTOM_COLOR.Black,
  },

  name:{
    fontFamily: FONT_FAMILY.Medium,
    fontSize: scale(17),
  },

  info: {
    fontFamily: FONT_FAMILY.Light,
    fontSize: scale(15),
  },

  methodContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
    borderRadius: scale(20),
    //backgroundColor: 'green',
  },

  method: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: 'yellow',
  },

  ic_dot: {
    marginLeft: scale(25),
  },

  methodText: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
  },

  textContainer: {
    width: scale(232),
    height: '100%',
    justifyContent: 'center',
    marginLeft: scale(16),
  },

  dividerLine: {
    height: 2,
    backgroundColor: CUSTOM_COLOR.Silver,
    marginHorizontal: scale(51),
  },

})