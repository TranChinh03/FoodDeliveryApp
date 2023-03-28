import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  FlatList
} from 'react-native';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import {
    IC_Swipe
} from '../../assets/icons/index';
import CartItem from './components/CartItem';
import CustomHeaderBack from '../../components/CustomHeaderBack';
import CustomButton from '../../components/CustomButton';
import SCREEN_NAME from '../../constants/screens';

class CartScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <CustomHeaderBack 
                    title='Cart' 
                    marginLeft={scale(56)}
                    onPress={() => this.props.navigation.goBack()}
                    />
                </View>

                {/* Chosen list */}
                <View style={styles.contentContainer}>
                    <View style={styles.scrollInstructionsContainer}>
                        <IC_Swipe/>
                        <Text style={styles.scrollInstructionsTitle}>{'swipe on an item to delete'}</Text>
                    </View>
                    <FlatList
                        data={DATA}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                                <CartItem category={item}
                                    // onSwipeFromLeft={(console.log('onSwipeFromLeft'))}
                                    // onSwipeFromRight={(console.log('onSwipeFromRight'))}
                                />
                        )}
                    />
                </View>

                {/* Button */}
                <View style={styles.buttonContainer}>
                    <CustomButton 
                    text='Complete order'
                    onPress={() => this.props.navigation.navigate(SCREEN_NAME.DELIVERY)}
                    />
                </View>
            </SafeAreaView>
        )
    }
} 

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.AthensGray,
    },
    headerContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 7,
        // backgroundColor: 'green',
    },
    buttonContainer: {
        flex: 2,
    },
    scrollInstructionsContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: scale(10, 'h'),
    },
    scrollInstructionsTitle: {
        marginLeft: scale(8),
        fontFamily: FONT_FAMILY.Bold,
        fontSize: scale(10, 'h'),
        color: CUSTOM_COLOR.Black,
    },
})


const DATA = [
    {
      id: '1',
      title: 'Veggie tomato mix',
      price: '#1,900',
    },
    {
        id: '2',
        title: 'Fishwith mix orange....',
        price: '#1,900',
      },
    {
        id: '3',
        title: 'Veggie tomato mix',
        price: '#1,900',
    },
    {
        id: '4',
        title: 'Fishwith mix orange....',
        price: '#1,900',
    },
    {
        id: '5',
        title: 'Veggie tomato mix',
        price: '#1,900',
    },
    {
        id: '6',
        title: 'Fishwith mix orange....',
        price: '#1,900',
    },
    {
        id: '7',
        title: 'Veggie tomato mix',
        price: '#1,900',
    },
    {
        id: '8',
        title: 'Fishwith mix orange....',
        price: '#1,900',
    },
  ];



