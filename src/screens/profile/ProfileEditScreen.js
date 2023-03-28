import {Text, StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import CustomHeaderBack from '../../components/CustomHeaderBack';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import { IC_Forward } from '../../assets/icons';
import CustomButton from '../../components/CustomButton';
import CustomHeaderText from '../../components/CustomHeaderText';
import scale from '../../constants/responsive';
import CustomPersonalDetail from '../../components/CustomPersonalDetail';
const DATA = [
  {
    id: '1',
    title: 'Orders',
  },
  {
    id: '2',
    title: 'Pending reviews',
  },
  {
    id: '3',
    title: 'Faq',
  },
  {
    id: '4',
    title: 'Help',
  },
];

const Item = ({title}) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.pText}>{title}</Text>
    <IC_Forward />
  </TouchableOpacity>
);
const renderItem = ({item}) => <Item title={item.title} />;

export default class ProfileEditScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* navigationBar */}
        <View style={styles.navigationBar}>
          <CustomHeaderBack onPress={() => this.props.navigation.goBack()} />
        </View>
        {/* headingContainer */}
        <View style={styles.headingContainer}>
          <CustomHeaderText text={'My profile'} />
        </View>
        {/* profileContainer */}
        <View style={styles.profileContainer}>
          <View style={styles.pTextContainer}>
            <TouchableOpacity>
              <Text style={styles.pText}>Personal Details</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.pText, {color: CUSTOM_COLOR.SunsetOrange}]}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
          <CustomPersonalDetail
            image={'Marvis'}
            style={styles.contentContainer}
            name={'Marvis Kparobo'}
            text1={'Dosamarvis@gmail.com'}
            text2={'+234 9011039271'}
            text3={'No 15 uti street off ovie palace road effurun delta state'}
            lineDivider1="false"
            lineDivider2="true"
            lineDivider3="true"
          />
        </View>
        {/* Flatlist */}
        <View style={styles.flatList}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        {/* button */}
        <View style={styles.button}>
          <>
            <CustomButton
              type="secondary"
              text="Update"
              //onPress={() => this.props.navigation.navigate('Login')}
            />
          </>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AntiFlashWhite,
  },
  navigationBar: {
    flex: 1.5, //backgroundColor: 'white',
    marginHorizontal: scale(50),
  },
  headingContainer: {
    flex: 2,
    //backgroundColor: 'red',
    marginHorizontal: scale(50),
  },
  profileContainer: {
    flex: 5.5,
    //backgroundColor: 'yellow',
    marginBottom: scale(20),
    marginHorizontal: scale(50),
  },
  flatList: {
    flex: 7,
    //backgroundColor: 'pink',
    marginHorizontal: scale(50),
  },
  button: {
    flex: 2,
    //backgroundColor: 'grey',
  },
  pTextContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pText: {
    fontSize: scale(18),
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.Black,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 8,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
    borderRadius: scale(20),
    flexDirection: 'row',
  },
});
