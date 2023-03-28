import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import { IC_NotFound } from '../../assets/icons/index';
import CustomHeaderBack from '../../components/CustomHeaderBack';
import InputBox from '../../components/InputBox';


const NotFoundScreen = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.headerContainer}>
            <View style={styles.headerContainer}>
                    <CustomHeaderBack marginLeft={scale(56)} input={true} onPress={() => this.props.navigation.goBack()}/>
                </View>

                <View style={styles.inputContainer}>
                    <InputBox
                    style = {[styles.input]}
                    placeholder = "Searching..."
                    ></InputBox>
                </View>


            </View>

            <View style = {styles.notFoundContainer}>
                <IC_NotFound style = {styles.ic_notFound}/>
            
                <Text style = {styles.txt1}>Item not found</Text>

                <Text style = {styles.txt2}>{'Try searching the item with \n       a different keyword.'}</Text>
            </View>

        </SafeAreaView>
    );
}

export default NotFoundScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.Cultured,
    },

    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: CUSTOM_COLOR.Cultured,
    },

    backButtonContainer: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.Cultured,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    inputContainer: {
        flex: 3,
        backgroundColor: CUSTOM_COLOR.Cultured,
        justifyContent: 'center',
        //alignItems: 'center',
    },

    input: {
        width: scale(260),
        height: '100%',
    },

    notFoundContainer : {
        flex: 5,
        backgroundColor: CUSTOM_COLOR.Cultured,
        //marginTop: scale(140, 'h'), 
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    ic_notFound : {
        alignSelf: 'center',
    },

    txt1 : {
        fontFamily: FONT_FAMILY.Bold,
        fontSize: scale(28),
        color: CUSTOM_COLOR.Black,
        marginTop: scale(26.75, 'h'),
        alignSelf: 'center',
    },

    txt2 : {
        fontFamily: FONT_FAMILY.Light,
        fontSize: scale(17),
        color: CUSTOM_COLOR.Black,
        marginTop: scale(17, 'h'),
        alignSelf: 'center',
    },

})