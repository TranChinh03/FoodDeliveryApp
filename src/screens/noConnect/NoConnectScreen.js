import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import { IC_NoConnect } from '../../assets/icons/index';
import CustomButton from '../../components/CustomButton';

const NoConnectScreen = (props) => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.noConnectContainer}>
                <IC_NoConnect style = {styles.ic_noConnect}/>
            </View>
            
            <Text style = {styles.txt1}>No internet Connection</Text>

            <Text style = {styles.txt2}>{'Your internet connection is currently \nnot available please check or try again.'}</Text>

            <View style={styles.buttonContainer}>
                <CustomButton
                    type = {'secondary'}
                    text = {'Try again'}
                />
            </View>
        </SafeAreaView>
    );
}

export default NoConnectScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.Cultured,
    },

    noConnectContainer : {
        backgroundColor: CUSTOM_COLOR.Cultured,
        marginTop: scale(190.92, 'h'), 
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    ic_noConnect : {
        alignSelf: 'center',
    },

    txt1 : {
        fontFamily: FONT_FAMILY.Bold,
        fontSize: scale(28),
        color: CUSTOM_COLOR.Black,
        marginTop: scale(26.75, 'h'),
        alignSelf: 'center',
        textAlign: 'center',
    },

    txt2 : {
        fontFamily: FONT_FAMILY.Light,
        fontSize: scale(17),
        color: CUSTOM_COLOR.Black,
        marginTop: scale(17, 'h'),
        alignSelf: 'center',
        textAlign: 'center',
    },

    buttonContainer: {
        flex: 0.6,
      },

})