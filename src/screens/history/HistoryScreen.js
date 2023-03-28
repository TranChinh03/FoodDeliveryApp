import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import { IC_Clock } from '../../assets/icons/index';
import CustomButton from '../../components/CustomButton';
import CustomHeaderBack from '../../components/CustomHeaderBack';

class HistoryScreen extends Component {
    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <View style = {styles.headerContainer}>
                    <CustomHeaderBack 
                        title = 'History'
                        marginLeft = {scale(56)}
                        onPress={() => this.props.navigation.goBack()}
                        />
                </View>
    
                <View style = {styles.historyContainer}>
                    <IC_Clock style = {styles.ic_Clock}/>
                    <Text style = {styles.txt1}>No history yet</Text>
                    <Text style = {styles.txt2}>{'Hit the orange button down \nbelow to Create an order'}</Text>
                </View>
                
                <View style={styles.buttonContainer}>
                    <CustomButton
                        type = {'secondary'}
                        text = {'Start ordering'}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default HistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.Cultured,
    },

    headerContainer : {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.Cultured,
    },

    historyContainer : {
        flex: 4,
        backgroundColor: CUSTOM_COLOR.Cultured,
        marginTop: scale(170.92, 'h'), 
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    ic_Clock : {
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
        flex: 1,
    },

})