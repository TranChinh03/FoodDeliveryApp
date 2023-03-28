import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import scale from '../../../constants/responsive';
import CUSTOM_COLOR from '../../../constants/colors';
import FONT_FAMILY from '../../../constants/fonts';
import {
  IC_More,
  IC_Cart,
  IC_Search,
  IC_Home,
  IC_Heart,
  IC_User,
  IC_Clock,
} from '../../../assets/icons/index.js';
import Label from './components/Label';
import MenuBlock from './components/MenuBlock';
import {IMG_Dishes_1} from '../../../assets/images/index';
import InputBox from '../../../components/InputBox';
import SCREEN_NAME from '../../../constants/screens';
import { DrawerActions } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';




class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actived: 'Foods',
      nav_selected: 'Home',
    };
  }


  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        {/* Header */}
        <>
          <View style={styles.headerContainer}>
            <TouchableOpacity 
            style={[styles.iconContainer, styles.ic_more]}
            onPress={() => this.props.navigation.openDrawer()}
            >
              <IC_More/>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.iconContainer,
                styles.ic_cart,
                {alignItems: 'flex-end'},
              ]}
              onPress={() => {
                this.props.navigation.navigate(SCREEN_NAME.CART),
                  this.setState({nav_selected: 'Home'});
              }}>
              <IC_Cart />
            </TouchableOpacity>
          </View>
        </>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Delicious \nfood for you'}</Text>
        </View>
        {/* Search Bar */}
        <>
          <View style={styles.searchContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate(SCREEN_NAME.SEARCH)}>
              <IC_Search style={styles.icon_search} />
            </TouchableOpacity>
            <InputBox style={[styles.input]} placeholder="Searching..." />
          </View>
        </>
        {/* Picker */}
        <>
          <View style={styles.pickerContainer}>
            <ScrollView
              style={styles.picker}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={styles.pickerContent}
                onPress={() => {
                  this.setState({actived: 'Foods'});
                }}>
                <Label
                  text="Foods"
                  isActived={this.state.actived === 'Foods' ? 'true' : 'false'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.pickerContent}
                onPress={() => {
                  this.setState({actived: 'Drinks'});
                }}>
                <Label
                  text="Drinks"
                  isActived={this.state.actived === 'Drinks' ? 'true' : 'false'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.pickerContent}
                onPress={() => {
                  this.setState({actived: 'Snacks'});
                }}>
                <Label
                  text="Snacks"
                  isActived={this.state.actived === 'Snacks' ? 'true' : 'false'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.pickerContent}
                onPress={() => {
                  this.setState({actived: 'Sauces'});
                }}>
                <Label
                  text="Sauces"
                  isActived={this.state.actived === 'Sauces' ? 'true' : 'false'}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </>
        {/* Menu */}
        <>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.smContainer}
              onPress={() => alert('Không có gì để xem thêm!')}>
              <Text style={styles.seeMore}>{'see more'}</Text>
            </TouchableOpacity>
            <ScrollView
              style={styles.picker}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.menuContent}>
                <TouchableOpacity
                  style={styles.menuContentContainer}
                  onPress={() => this.props.navigation.navigate(SCREEN_NAME.FOOD_DETAIL)}>
                  <View style={styles.menuImage}>
                    <Image source={IMG_Dishes_1} resizeMode={'contain'} />
                  </View>
                  <MenuBlock text={'Veggie \ntomato mix'} price="N1,900" />
                </TouchableOpacity>
              </View>
              <View style={styles.menuContent}>
                <TouchableOpacity
                  style={styles.menuContentContainer}
                  onPress={() => this.props.navigation.navigate(SCREEN_NAME.FOOD_DETAIL)}>
                  <View style={styles.menuImage}>
                    <Image source={IMG_Dishes_1} resizeMode={'contain'} />
                  </View>
                  <MenuBlock text={'Veggie \ntomato mix'} price="N1,900" />
                </TouchableOpacity>
              </View>
              <View style={styles.menuContent}>
                <TouchableOpacity
                  style={styles.menuContentContainer}
                  onPress={() => this.props.navigation.navigate(SCREEN_NAME.FOOD_DETAIL)}>
                  <View style={styles.menuImage}>
                    <Image source={IMG_Dishes_1} resizeMode={'contain'} />
                  </View>
                  <MenuBlock text={'Veggie \ntomato mix'} price="N1,900" />
                </TouchableOpacity>
              </View>
              <View style={styles.menuContent}>
                <TouchableOpacity
                  style={styles.menuContentContainer}
                  onPress={() => this.props.navigation.navigate(SCREEN_NAME.FOOD_DETAIL)}>
                  <View style={styles.menuImage}>
                    <Image source={IMG_Dishes_1} resizeMode={'contain'} />
                  </View>
                  <MenuBlock text={'Veggie \ntomato mix'} price="N1,900" />
                </TouchableOpacity>
              </View>
              <View style={styles.menuContent}>
                <TouchableOpacity
                  style={styles.menuContentContainer}
                  onPress={() => this.props.navigation.navigate(SCREEN_NAME.FOOD_DETAIL)}>
                  <View style={styles.menuImage}>
                    <Image source={IMG_Dishes_1} resizeMode={'contain'} />
                  </View>
                  <MenuBlock text={'Veggie \ntomato mix'} price="N1,900" />
                </TouchableOpacity>
              </View>
              <View style={styles.menuContent}>
                <TouchableOpacity
                  style={styles.menuContentContainer}
                  onPress={() => this.props.navigation.navigate(SCREEN_NAME.FOOD_DETAIL)}>
                  <View style={styles.menuImage}>
                    <Image source={IMG_Dishes_1} resizeMode={'contain'} />
                  </View>
                  <MenuBlock text={'Veggie \ntomato mix'} price="N1,900" />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </>
        {/* footContainer */}
        <View style={styles.footContainer}>
          <TouchableOpacity
            onPress={() => {
              this.setState({nav_selected: 'Home'});
            }}>
            <IC_Home
              fill={this.state.nav_selected === 'Home' ? '#FA4A0C' : '#ADADAF'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({nav_selected: 'Heart'});
            }}>
            <IC_Heart
              fill={this.state.nav_selected === 'Heart' ? '#FA4A0C' : '#ADADAF'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({nav_selected: 'User'});
              this.props.navigation.navigate(SCREEN_NAME.PROFILE);
            }}>
            <IC_User
              fill={this.state.nav_selected === 'User' ? '#FA4A0C' : '#ADADAF'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate(SCREEN_NAME.HISTORY);
              this.setState({nav_selected: 'Clock'});
            }}>
            <IC_Clock
              fill={this.state.nav_selected === 'Clock' ? '#FA4A0C' : '#ADADAF'}
            />
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  }
}

export default function(props) {
  const navigation = useNavigation();
  return <HomeScreen {...props} navigation={navigation}/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AntiFlashWhite,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'red',
    marginHorizontal: scale(56),
  },
  titleContainer: {
    flex: 2,
    //backgroundColor: 'yellow',
    marginHorizontal: scale(56),
  },
  iconContainer: {
    flex: 1,
    //backgroundColor: 'white',
    justifyContent: 'center',
  },
  // ic_more: {
  //   marginTop: scale(74, 'h'),
  //   marginLeft: scale(55),
  // },
  // ic_cart: {
  //   marginTop: scale(65, 'h'),
  //   marginLeft: scale(273),
  // },
  title: {
    fontSize: scale(34),
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.Black,
  },
  searchContainer: {
    flexDirection: 'row',
    width: scale(314),
    height: scale(60, 'h'),
    backgroundColor: CUSTOM_COLOR.Gallery,
    alignSelf: 'center',
    borderRadius: scale(30),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_search: {
    marginLeft: scale(35),
  },
  input: {
    width: scale(260),
    height: '100%',
    paddingLeft: scale(16),
  },
  pickerContainer: {
    marginTop: scale(40, 'h'),
    height: scale(50, 'h'),
    marginHorizontal: scale(56),

    // backgroundColor: 'pink',
  },
  picker: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  pickerContent: {
    flex: 1,
    paddingHorizontal: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  menuContainer: {
    height: scale(400, 'h'),
  },
  menuContentContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    paddingTop: scale(50, 'h'),
  },
  menuContent: {
    marginLeft: scale(56),
    // flex: 1,
    width: scale(220),
    height: '100%',
    // marginHorizontal: scale(15),
    borderRadius: scale(30),
  },
  menuImage: {
    alignSelf: 'center',
    zIndex: 1,
    elevator: 1,
    position: 'absolute',
    top: scale(55, 'h'),
    borderRadius: scale(100),
    overflow: 'hidden',
  },
  smContainer: {
    zIndex: 10,
    elevator: 10,
  },
  seeMore: {
    color: CUSTOM_COLOR.Vermilion,
    marginLeft: scale(315),
    fontSize: scale(15),
    position: 'absolute',
    marginTop: scale(25, 'h'),
  },
  footContainer: {
    marginHorizontal: scale(56),

    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
