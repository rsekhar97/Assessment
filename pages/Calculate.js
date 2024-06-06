/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View, TextInput,
    TouchableOpacity,
    Text,
    StatusBar,
} from 'react-native';

export default function Calculate() {

    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [sumResult, setSumResult] = useState(0);

    const calculateNumbers = () => {
        /*if (!firstNumber.trim() || !secondNumber.trim()) {
            Alert.alert('Please enter number');
        }*/
        const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
        if (isNaN(sum)) {
            setSumResult(0);
        } else {
            setSumResult(sum);
        }
    };

    return (
        <SafeAreaView style={stylesSheet.StatusBarStyle}>
            <View style={stylesSheet.container}>
                <TextInput style={stylesSheet.textInputStyle}
                    placeholder="Enter any number"
                    keyboardType="numeric"
                    onChangeText={text => setFirstNumber(text)}
                />

                <TextInput style = {stylesSheet.textInputStyle}
                    placeholder="Enter any number"
                    keyboardType="numeric"
                    onChangeText={text => setSecondNumber(text)}
                />

                <TouchableOpacity style={stylesSheet.buttonStyle} onPress={calculateNumbers}>
                    <Text style={stylesSheet.buttonTextStyle}>Add Two Numbers</Text>
                </TouchableOpacity>

                <Text style={stylesSheet.textOutputStyle}> Total: {sumResult !== 0 ? sumResult : '' }</Text>
            </View>
        </SafeAreaView>

    );
}

const stylesSheet = StyleSheet.create({
    StatusBarStyle: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputStyle: {
        width: '80%',
        height: 50,
        paddingHorizontal: 10,
        bottom: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
    },
    buttonStyle: {
        width: '80%',
        backgroundColor: '#dcdbe0',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonTextStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textOutputStyle: {
        marginTop: 50,
    },
});
