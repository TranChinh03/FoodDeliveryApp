import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import CustomHeaderBack from '../../components/CustomHeaderBack';
import FoodInfo from './components/FoodInfo'

class SearchScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* header */}
                <View style={styles.headerContainer}>
                    <CustomHeaderBack marginLeft={scale(56)} input={true} onPress={() => this.props.navigation.goBack()}/>
                </View>
                {/* content */}
                <View style={styles.contentContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.Title}>{'Found  6 results'}</Text>
                    </View>
                    <View style={styles.flatListContainer}>
                    <FlatList
                        data={DATA}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        renderItem={({ item }) => (
                                <FoodInfo
                                    {...item}
                                    text={item.title}
                                    price={item.price}
                                />
                        )}
                    />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.Silver,   
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
    },
    inputBox: {
        
    },
    contentContainer: {
        flex: 9,
        backgroundColor: CUSTOM_COLOR.White,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Title: {
        fontFamily: FONT_FAMILY.Light,
        fontSize: scale(28),
        color: CUSTOM_COLOR.Black,
    },
    flatListContainer: {
        flex: 9,
        backgroundColor: CUSTOM_COLOR.Alabaster,
    },

})


const DATA = [
    {
      id: '1',
      title: 'Veggie \ntomato mix',
      price: 'N1,900',
    },
    {
        id: '2',
        title: 'Egg and \ncucmber...',
        price: 'N1,900',
      },
    {
        id: '3',
        title: 'Fried \nchicken m.',
        price: 'N1,900',
    },
    {
        id: '4',
        title: 'Moi-moi and \nekpa.',
        price: 'N1,900',
    },
    {
        id: '5',
        title: 'Veggie \ntomato mix',
        price: 'N1,900',
    },
    {
        id: '6',
        title: 'Egg and \ncucmber...',
        price: 'N1,900',
    },
    {
        id: '7',
        title: 'Fried \nchicken m.',
        price: 'N1,900',
    },
    {
        id: '8',
        title: 'Moi-moi and \nekpa.',
        price: 'N1,900',
    },
  ];   