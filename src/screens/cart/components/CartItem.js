import React, {useState} from "react";
import {TouchableOpacity, StyleSheet, Text, View, Image} from "react-native";
import CUSTOM_COLOR from '../../../constants/colors';
import scale from '../../../constants/responsive';
import FONT_FAMILY from '../../../constants/fonts';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {IMG_Dishes_1_small, IMG_Dishes_2_small} from '../../../assets/images/index';



const CartItem = props => {
        const {category} = props
        const [count, setCount] = useState(1);
      
        return (
            <Swipeable
                // renderLeftActions={() => console.log('renderLeftActions')}
            >
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={category.id%2!==0?IMG_Dishes_1_small:IMG_Dishes_2_small}
                            resizeMode={'cover'}
                            borderRadius={30}
                            />
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{category.title}</Text>
                        <Text style={styles.price}>{category.price}</Text>
                    {/* Adjust quantity button */}
                        <View style={styles.adjustButtonContainer}>
                            <TouchableOpacity 
                                style={styles.adjustButton}
                                onPress={count>0 ? () => setCount(count-1):null}
                            >
                                <Text style={styles.adjustButtonText}>{'-'}</Text>
                            </TouchableOpacity>
                            <View style={styles.adjustNumber}>
                                <Text style={styles.adjustButtonText}>{count}</Text>
                            </View>
                            <TouchableOpacity 
                                style={styles.adjustButton}
                                onPress={() => setCount(count+1)}
                            >
                                <Text style={styles.adjustButtonText}>{'+'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Swipeable>
        )
}

// const LeftAction = () => {
//     return (
//         <View>
//             <Text>ABC</Text>
//         </View>
//         )
// }

export default CartItem

const styles = StyleSheet.create({
    swipeContainer: {
        flex: 1,
    },
    container: {
        height: scale(102, 'h'),
        width: scale(315),
        backgroundColor: CUSTOM_COLOR.White,
        marginTop: scale(14, 'h'),
        alignSelf: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    imageContainer: {
        marginLeft: scale(10),
        marginTop: scale(15, 'h'),
        flex: 1,
    },
    contentContainer: {
        flex: 3,
        marginVertical: 10,
        marginHorizontal: 10,
        // backgroundColor: 'blue',
    },
    title: {
        fontFamily: FONT_FAMILY.Bold,
        fontSize: scale(17),
        color: CUSTOM_COLOR.Black,
    },
    price: {
        fontFamily: FONT_FAMILY.Black,
        fontSize: scale(15),
        color: CUSTOM_COLOR.OriolesOrange,
    },
    adjustButtonContainer: {
        width: scale(52),
        height: scale(20,'h'),
        backgroundColor: CUSTOM_COLOR.Vermilion,
        borderRadius: 30,
        zIndex: 1,
        elevator: 1,
        position: 'absolute',
        right: 14,
        bottom: 8,
        flexDirection: 'row',
    },
    adjustButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adjustNumber: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    adjustButtonText: {
        fontFamily: FONT_FAMILY.Bold,
        fontSize: scale(10),
        color: CUSTOM_COLOR.White,
    }
})